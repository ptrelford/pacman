(*[omit:Skip namespace definition on TryFSharp.org]*)
#if INTERACTIVE
#else
namespace PacMan
#endif
(*[/omit]*)

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
    member keys.IsKeyDown key = keysDown.Contains key

[<AutoOpen>]
module Game = 
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
    let private toInt (color:Color) = 
        (int color.A <<< 24) ||| 
        (int color.R <<< 16) ||| 
        (int color.G <<< 8)  ||| 
        int color.B
    let toBitmap color (xs:int list) =
        let width = 8
        let white = color |> toInt
        let black = 0x00000000
        let toColor = function true -> white | false -> black
#if SILVERLIGHT        
        let bitmap = WriteableBitmap(width, xs.Length)
        let pixels = bitmap.Pixels
        xs |> List.iteri (fun y xs ->
            for x = 0 to width-1 do
                let bit = 1 <<< (width - 1 - x) 
                pixels.[x+y*width] <- xs &&& bit = bit |> toColor
        )
        bitmap
#else
        let bitmap = WriteableBitmap(width, xs.Length, 300.0, 300.0, PixelFormats.Bgra32, null)
        xs |> List.iteri (fun y xs ->
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
    let loadImage path =
        #if SILVERLIGHT
        let stream = Application.GetResourceStream(new Uri(path, UriKind.Relative)).Stream
        let image = BitmapImage()
        image.SetSource(stream)
        #else
        let image = BitmapImage(Uri(path, UriKind.Relative))
        #endif
        image |> toImage

type GameControl() as control = 
    inherit UserControl(Background=SolidColorBrush Colors.Black)
    let maze = "
#/------------7/------------7#
#|............|!............|#
#|./__7./___7.|!./___7./__7.|#
#|o|  !.|   !.|!.|   !.|  !o|#
#|.L--J.L---J.LJ.L---J.L--J.|#
#|..........................|#
#|./__7./7./______7./7./__7.|#
#|.L--J.|!.L--7/--J.|!.L--J.|#
#|......|!....|!....|!......|#
#L____7.|L__7 |! /__J!./____J#
######!.|/--J LJ L--7!.|######
######!.|!          |!.|######
######!.|! /__==__7 |!.|######
------J.LJ |      ! LJ.L------
###### .   |      !   . ######
______7./7 |      ! /7./______
######!.|! L______J |!.|######
######!.|!          |!.|######
######!.|! /______7 |!.|######
#/----J.LJ L--7/--J LJ.L----7#
#|............|!............|#
#|./__7./___7.|!./___7./__7.|#
#|.L-7!.L---J.LJ.L---J.|/-J.|#
#|o..|!.......<>.......|!..o|#
#L_7.|!./7./______7./7.|!./_J#
#/-J.LJ.|!.L--7/--J.|!.LJ.L-7#
#|......|!....|!....|!......|#
#|./____JL__7.|!./__JL____7.|#
#|.L--------J.LJ.L--------J.|#
#|..........................|#
#L--------------------------J#"

    let tops = [
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000011, 0b11111111, 0b11000000
        0b00000100, 0b00000000, 0b00100000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000]
    let mids = [
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000]
    let bots = [
        0b00001000, 0b00000000, 0b00010000
        0b00001000, 0b00000000, 0b00010000
        0b00000100, 0b00000000, 0b00100000
        0b00000011, 0b11111111, 0b11000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000
        0b00000000, 0b00000000, 0b00000000]
    let door' = [
        0b00000000
        0b00000000
        0b00000000
        0b00000000
        0b11111111
        0b00000000
        0b00000000
        0b00000000]
    let pill' = [
        0b00000000
        0b00000000
        0b00000000
        0b00011000
        0b00011000
        0b00000000
        0b00000000
        0b00000000]
    let power' = [
        0b00000000
        0b00011000
        0b00111100
        0b01111110
        0b01111110
        0b00111100
        0b00011000
        0b00000000]

    let fromTriple xs = 
        let convert = toBitmap Colors.Blue
        List.foldBack (fun (l,m,r) (ls,ms,rs) -> l::ls, m::ms, r::rs) xs ([],[],[])
        |> fun (l,m,r) -> convert l, convert m, convert r

    let tl, top, tr         = fromTriple tops
    let left, blank, right  = fromTriple mids
    let bl, bottom, br      = fromTriple bots
    let door = toBitmap Colors.White door'
    let pill = toBitmap Colors.Yellow pill'
    let power = toBitmap Colors.Yellow power'

    let toTile c =
        match c with
        | '=' -> door
        | '_' -> top
        | '|' -> left
        | '!' -> right
        | '/' -> tl
        | '7' -> tr
        | 'L' -> bl
        | 'J' -> br
        | '-' -> bottom
        | '.' -> pill
        | 'o' -> power
        | _ -> blank

    let set element (x,y) =
        Canvas.SetLeft(element, x - 8 |> float)
        Canvas.SetTop(element, y |> float)
    let canvas = Canvas(Background = SolidColorBrush Colors.Black)
    do  canvas.Width <- 28.0 * 8.0; canvas.Height <- 32.0 * 8.0
    do  control.Content <- canvas
    let lines = maze.Split('\n')
    let tiles =
        lines |> Array.mapi (fun y line ->
            line.ToCharArray() |> Array.mapi (fun x item ->
                let tile = toTile item |> toImage
                set tile (x * 8, y * 8)
                canvas.Children.Add tile |> ignore
                tile
            )
        )

    let tileAt x y =
        if x < 0 || x > 28 then ' '
        else lines.[y].[x]
    let isWall x y =
        let c = tileAt x y
        match c with
        | '_' | '|' | '!' | '/' | '7' | 'L' | 'J' | '-' -> true
        | _ -> false

    let load s = sprintf "Images/%s.png" s |> loadImage
    let p, pu, pd, pl, pr = load "p", load "pu", load "pd", load "pl", load "pr"
    let blinky, pinky, inky, pokey = load "red1", load "pink1", load "cyan1", load "orange1"
    let ghosts = [
        blinky, (15, 12)
        inky, (13, 15)
        pinky , (15, 15)
        pokey , (17, 15)]
    do  ghosts |> List.iter (fun (ghost,(x,y)) -> 
        canvas.Children.Add(ghost) |> ignore
        set ghost (x*8-7,y*8-3)
        )

    let pacman = ref p
    do  canvas.Children.Add(!pacman) |> ignore

    let keys = Keys(control)
    let x = ref (15 * 8 - 7)
    let y = ref (24 * 8 - 3)

    let noWall (ex,ey) =
        let bx, by = int ((!x+6+ex)/8), int ((!y+6+ey)/8)
        isWall bx by |> not

    let updatePacman () =
        let up, down, left, right = Key.Q, Key.A, Key.Z, Key.X
        let pressed key = keys.IsKeyDown key
        let verticallyAligned, horizontallyAligned  = !x % 8 = 5, !y % 8 = 5 
        let directions = 
            [
            if pressed up && verticallyAligned && noWall (0,-4) then yield (0,-1), pu
            if pressed down && verticallyAligned && noWall (0,5) then yield (0,1), pd
            if pressed left && horizontallyAligned && noWall (-4,0) then yield (-1,0), pl
            if pressed right && horizontallyAligned && noWall (5,0) then yield (1,0), pr
            ] 
            |> List.sortBy (fun (_,p') -> p' = !pacman)
        let move ((dx,dy),d) =
            if dx = -1 && !x <= 0 then x := 30 * 8
            if dx = 1  && !x = 30 *8 then x := 0
            x := !x + dx; y := !y  + dy
            canvas.Children.Remove(!pacman) |> ignore
            canvas.Children.Add(d) |> ignore
            pacman := d
        if directions.Length > 0 then
            directions.Head |> move
        let tx, ty = int ((!x+6)/8), int ((!y+6)/8)
        if tileAt tx ty = '.' then
            canvas.Children.Remove(tiles.[ty].[tx]) |> ignore
        set !pacman (!x,!y)
    let update () =
        updatePacman ()
    do run (1.0/50.0) update |> ignore 

(*[omit:Run script on TryFSharp.org]*)
#if INTERACTIVE
open Microsoft.TryFSharp
App.Dispatch (fun() -> 
    App.Console.ClearCanvas()
    let canvas = App.Console.Canvas
    canvas.Background <- SolidColorBrush Colors.Black
    let control = GameControl()    
    control |> canvas.Children.Add
    App.Console.CanvasPosition <- CanvasPosition.Right
    control.Focus() |> ignore
)
#endif
(*[/omit]*)
