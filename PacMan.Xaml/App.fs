namespace PacMan

open System
open System.Windows
open System.Windows.Controls
open System.Windows.Input
open System.Windows.Media
open System.Windows.Media.Imaging

type Keys (control:Control) =
    #if SILVERLIGHT
    #else // WPF specific workaround
    do  control.Focusable <- true
    do  control.Focus() |> ignore
    #endif
    let mutable keysDown = Set.empty  
    do  control.KeyDown.Add (fun e -> keysDown <- keysDown.Add e.Key)
    do  control.KeyUp.Add (fun e -> keysDown <- keysDown.Remove e.Key)
    do  control.LostFocus.Add (fun _ -> keysDown <- Set.empty)
    member keys.IsKeyDown key = keysDown.Contains key

[<AutoOpen>]
module Text =
    let whiteBrush = SolidColorBrush Colors.White
    let createTextBlock () =
        TextBlock(
            Foreground=whiteBrush, 
            FontSize=8.0,
            FontWeight=FontWeights.ExtraBold
            )

[<AutoOpen>]
module Rendering = 
    let run rate update =
        let rate = TimeSpan.FromSeconds(rate)
        let lastUpdate = ref DateTime.Now
        let residual = ref (TimeSpan())
        CompositionTarget.Rendering.Subscribe (fun _ -> 
            let now = DateTime.Now
            residual := !residual + (now - !lastUpdate)
            while !residual > rate do
                update(); residual := !residual - rate
            lastUpdate := now
        )
    
[<AutoOpen>]
module Imaging =
    let toBitmap (paint:Paint) (xs:int seq) =
        let width = 8
        let white = paint.Color
        let black = 0x00000000
        let toColor = function true -> white | false -> black
#if SILVERLIGHT        
        let bitmap = WriteableBitmap(width, Seq.length xs)
        let pixels = bitmap.Pixels
        xs |> Seq.iteri (fun y xs ->
            for x = 0 to width-1 do
                let bit = 1 <<< (width - 1 - x) 
                pixels.[x+y*width] <- xs &&& bit = bit |> toColor
        )
        bitmap
#else
        let bitmap = WriteableBitmap(width, Seq.length xs, 300.0, 300.0, PixelFormats.Bgra32, null)
        xs |> Seq.iteri (fun y xs ->
            let line = 
                Array.init width (fun x ->
                    let bit = 1 <<< (width - 1 - x) 
                    xs &&& bit = bit |> toColor
                )
            bitmap.WritePixels(Int32Rect(0,0,width,1), line, width*4, 0 , y)
        )  
        bitmap
#endif
    let toImage (bitmap:#BitmapSource) =
        let w, h = float bitmap.PixelWidth, float bitmap.PixelHeight  
        Image(Source=bitmap,Stretch=Stretch.Fill,Width=w,Height=h) 
    let loadBitmap path =
        #if SILVERLIGHT
        let stream = Application.GetResourceStream(new Uri(path, UriKind.Relative)).Stream
        let image = BitmapImage()
        image.SetSource(stream)
        #else
        let image = BitmapImage(Uri(path, UriKind.Relative))
        #endif
        image
    let loadImage path =
        path |> loadBitmap |> toImage

type Scene (canvas:Canvas) =
    let contents = Contents(canvas)
    interface IScene with
        member scene.AddLayer () = 
            let layer = Canvas()
            canvas.Children.Add(layer) |> ignore
            Layer(layer) :> ILayer
        member scene.LoadBitmap(path) = 
            let bitmap = loadBitmap path
            Bitmap(bitmap) :> IBitmap
        member scene.CreateBitmap(paint,lines) = 
            let bitmap = toBitmap paint lines
            Bitmap(bitmap) :> IBitmap
        member scene.Contents = contents :> IContents
and  Bitmap (source:BitmapSource) =
    interface IBitmap with
        member bitmap.CreateContent() =
            let w, h = float source.PixelWidth, float source.PixelHeight  
            let image = Image(Source=source,Stretch=Stretch.Fill,Width=w,Height=h)
            Content(image) :> IContent
and  Contents (canvas:Canvas) =
    inherit Content(canvas)
    let children = canvas.Children
    interface IContents with
        member contents.Add content = 
            children.Add(content.Control :?> UIElement) |> ignore
        member contents.Remove content = 
            children.Remove(content.Control :?> UIElement) |> ignore
        member contents.Contains content =
            children.Contains(content.Control :?> UIElement)
and  Layer (canvas:Canvas) =
    let content = Content(canvas) :> IContent
    let contents = Contents(canvas) :> IContents
    interface ILayer with
        member this.Move(x,y) = content.Move(x,y)
        member this.SetOpacity(value) = content.SetOpacity(value)
        member this.Control = canvas :> obj
        member this.Contents = contents
and  Content (element:UIElement) =
    interface IContent with
        member content.Move (x,y) =
            Canvas.SetLeft(element, x)
            Canvas.SetTop(element, y)
        member content.SetOpacity (value) = 
            element.Opacity <- value
        member content.Control = element :> obj
 
type GameControl () as control =
    inherit UserControl(Background=SolidColorBrush Colors.Black)
#if SILVERLIGHT
    do control.RenderTransform <- ScaleTransform(ScaleX=1.5,ScaleY=1.5)
#endif
    let keys = Keys(control)
    let canvas = Canvas(Background = SolidColorBrush Colors.Black)
    do  canvas.Width <- 28.0 * 8.0; canvas.Height <- (32.0+4.0) * 8.0
    let clip = RectangleGeometry(Rect=Rect(Width=canvas.Width,Height=canvas.Height))
    do  canvas.Clip <- clip
    do  control.Width <- canvas.Width; control.Height <- canvas.Height
    do  control.Content <- canvas
    let scene = Scene(canvas) :> IScene
    let p1 = createTextBlock()
    do  p1.Text <- "1UP"
    let p1 = Content(p1) :> IContent
    do  p1.Move(2.0*8.0,0.0); scene.Contents.Add(p1)
    let s1 = createTextBlock()
    do  s1.Text <- "00"
    let s1 = Content(s1) :> IContent
    do  s1.Move(3.0*8.0,8.0); scene.Contents.Add(s1)
    let input = 
        let up, down, left, right = Key.Q, Key.A, Key.Z, Key.X
        let pressed key = keys.IsKeyDown key
        { new IInput with
            member this.IsUp = pressed up
            member this.IsDown = pressed down
            member this.IsLeft = pressed left
            member this.IsRight = pressed right
        }
    let game = Game(scene, input)
    
    do run (1.0/50.0) game.Update |> ignore

#if SILVERLIGHT
type App() as this = 
    inherit Application()
    do  this.Startup.AddHandler(fun o e -> this.RootVisual <- GameControl())
#else
module App =
    [<System.STAThread>]
    do  let win = new Window(Title="PacMan", Content=GameControl(), SizeToContent=SizeToContent.WidthAndHeight)
        (new Application()).Run(win) |> ignore
#endif
