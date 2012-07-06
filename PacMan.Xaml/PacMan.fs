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
    do  control.LostFocus.Add (fun _ -> keysDown <- Set.empty)
    member keys.IsKeyDown key = keysDown.Contains key

[<AutoOpen>]
module Algorithm =
    let flood canFill fill (x,y) =
        let rec f n = function
            | [] -> ()
            | ps ->
                let ps = ps |> List.filter canFill
                ps |> List.iter (fill n)
                ps |> List.collect (fun (x,y) -> [(x-1,y);(x+1,y);(x,y-1);(x,y+1)])
                |> f (n+1)
        f 0 [(x,y)]

module Seq =
    let private rand = System.Random()
    let unsort xs =
        xs
        |> Seq.map (fun x -> rand.Next(),x)
        |> Seq.cache
        |> Seq.sortBy fst
        |> Seq.map snd

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
    do control.RenderTransform <- ScaleTransform(ScaleX=1.5,ScaleY=1.5)
    let maze = "
##/------------7/------------7##
##|............|!............|##
##|./__7./___7.|!./___7./__7.|##
##|o|  !.|   !.|!.|   !.|  !o|##
##|.L--J.L---J.LJ.L---J.L--J.|##
##|..........................|##
##|./__7./7./______7./7./__7.|##
##|.L--J.|!.L--7/--J.|!.L--J.|##
##|......|!....|!....|!......|##
##L____7.|L__7 |! /__J!./____J##
#######!.|/--J LJ L--7!.|#######
#######!.|!          |!.|#######
#######!.|! /__==__7 |!.|#######
-------J.LJ |      ! LJ.L-------
########.   | **** !   .########
_______7./7 |      ! /7./_______
#######!.|! L______J |!.|#######
#######!.|!          |!.|#######
#######!.|! /______7 |!.|#######
##/----J.LJ L--7/--J LJ.L----7##
##|............|!............|##
##|./__7./___7.|!./___7./__7.|##
##|.L-7!.L---J.LJ.L---J.|/-J.|##
##|o..|!.......<>.......|!..o|##
##L_7.|!./7./______7./7.|!./_J##
##/-J.LJ.|!.L--7/--J.|!.LJ.L-7##
##|......|!....|!....|!......|##
##|./____JL__7.|!./__JL____7.|##
##|.L--------J.LJ.L--------J.|##
##|..........................|##
##L--------------------------J##"

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

    let isWall = function
        | '_' | '|' | '!' | '/' | '7' | 'L' | 'J' | '-' | '*' -> true
        | _ -> false

    let set element (x,y) =
        Canvas.SetLeft(element, x - 16 |> float)
        Canvas.SetTop(element, y |> float)
    let canvas = Canvas(Background = SolidColorBrush Colors.Black)
    let walls = Canvas()
    do  canvas.Width <- 28.0 * 8.0; canvas.Height <- 32.0 * 8.0
    let g = RectangleGeometry(Rect=Rect(Width=canvas.Width,Height=canvas.Height))
    do  canvas.Clip <- g
    let add item = canvas.Children.Add(item) |> ignore
    let remove item = canvas.Children.Remove(item) |> ignore
    do  add walls
    do  control.Width <- canvas.Width; control.Height <- canvas.Height
    do  control.Content <- canvas
    let lines = maze.Split('\n')
    let tiles =
        lines |> Array.mapi (fun y line ->
            line.ToCharArray() |> Array.mapi (fun x item ->
                let tile = toTile item |> toImage
                set tile (x * 8, y * 8)
                if isWall item 
                then walls.Children.Add tile |> ignore
                else canvas.Children.Add tile |> ignore
                tile
            )
        )
    let route_home =
        let numbers =
            lines |> Array.map (fun line ->
                line.ToCharArray() 
                |> Array.map (fun c -> if isWall c then Int32.MaxValue else -1)
            )
        let canFill (x,y) =
            y>=0 && y < numbers.Length &&
            x>=0 && x < numbers.[y].Length &&
            numbers.[y].[x] = -1
        let fill n (x,y) = numbers.[y].[x] <- n
        flood canFill fill (16,16)
        numbers

    let tileAt x y =
        if x < 0 || x > 30 then ' '
        else lines.[y].[x]

    let isWallAt (x,y) = tileAt x y |> isWall

    let load s = sprintf "Images/%s.png" s |> loadImage
    let p, pu, pd, pl, pr = load "p", load "pu", load "pd", load "pl", load "pr"
    let ghost_starts = 
        [
            "red", (16, 12), (1,0)
            "cyan", (14, 16), (1,0)
            "pink" , (16, 14), (0,-1)
            "orange" , (18, 16), (-1,0)
        ]
        |> List.map (fun (color,(x,y),v) -> 
            let blue = load "blue"
            let eyes = load "eyeu", load "eyed", load "eyel", load "eyer", blue
            let u, d, l, r =
                load (color+"u"), load (color+"d"), load (color+"l"), load (color+"r")
            eyes, ((u,d,l,r,blue), (x*8-7,y*8-3), v, d)
        )
    let mutable ghosts = ghost_starts |> List.map snd
    do  ghosts |> List.iter (fun (_,(x,y),_,ghost) -> 
        add ghost
        set ghost (x,y)
        )

    let pacman = ref p
    do  add !pacman
    let mutable powerCount = 0

    let keys = Keys(control)
    let x = ref (16 * 8 - 7)
    let y = ref (24 * 8 - 3)

    let noWall (x,y) (ex,ey) =
        let bx, by = int ((x+6+ex)/8), int ((y+6+ey)/8)
        isWallAt (bx,by) |> not

    let verticallyAligned (x,y) = x % 8 = 5
    let horizontallyAligned (x,y) = y % 8 = 5

    let canGoUp (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,-4)
    let canGoDown (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,5)
    let canGoLeft (x,y) = horizontallyAligned (x,y) && noWall (x,y) (-4,0)
    let canGoRight (x,y) = horizontallyAligned (x,y) && noWall (x,y) (5,0)

    let go (x,y) (dx,dy) =
        let x = 
            if   dx = -1 && x = 0 then 30 * 8
            elif dx = 1  && x = 30 *8 then 0
            else x
        x + dx, y + dy

    let newGhosts () =
        ghosts |> List.map (fun ((u,d,l,r,blue),(x,y),(dx,dy),g) ->
            let face, canMove =
                match dx,dy with
                | 0,-1 -> u, canGoUp (x,y)
                | 0, 1 -> d, canGoDown (x,y)
                | -1,0 -> l, canGoLeft (x,y)
                | 1, 0 -> r, canGoRight (x,y)
                | _, _ -> invalidOp ""
            let isBackwards (a,b) =
                (a <> 0 && a = -dx) || (b <> 0 && b = -dy)
            let directions = 
                [
                if canGoUp (x,y) then yield (0,-1)
                if canGoDown (x,y) then yield (0,1)
                if canGoLeft (x,y) then yield (-1,0)
                if canGoRight(x,y) then yield (1,0)
                ]
                |> Seq.unsort
                |> Seq.sortBy isBackwards
            let dx, dy = 
                let newDirection = directions |> Seq.head
                if not <| isBackwards newDirection 
                then newDirection
                else dx,dy
            let x,y = go (x,y) (dx,dy)
            remove g
            let face = if powerCount > 0 then blue else face
            add face
            set face (x,y)
            (u,d,l,r,blue),(x,y),(dx,dy),face
        )

    let updateGhosts () = ghosts <- newGhosts ()

    let updatePacman () =
        let up, down, left, right = Key.Q, Key.A, Key.Z, Key.X
        let pressed key = keys.IsKeyDown key
        let directions = 
            [
            if pressed up && canGoUp (!x,!y) then yield (0,-1), pu
            if pressed down && canGoDown (!x,!y) then yield (0,1), pd
            if pressed left && canGoLeft (!x,!y) then yield (-1,0), pl
            if pressed right && canGoRight (!x,!y) then yield (1,0), pr
            ] 
            |> List.sortBy (fun (_,p') -> p' = !pacman)
        let move ((dx,dy),d) =
            let x', y' = go (!x,!y) (dx,dy)
            x := x'; y := y'
            remove !pacman
            add d
            pacman := d
        if directions.Length > 0 then
            directions.Head |> move
        let tx, ty = int ((!x+6)/8), int ((!y+6)/8)
        if tileAt tx ty = '.' then
            remove (tiles.[ty].[tx])
        if tileAt tx ty = 'o' then
            if canvas.Children.Contains (tiles.[ty].[tx]) then
                powerCount <- 500
            remove (tiles.[ty].[tx])
        set !pacman (!x,!y)

    let updatePower () =
        if powerCount > 0 then
            if (powerCount/5) % 2 = 1 then walls.Opacity <- 0.5
            else walls.Opacity <- 1.0
        else walls.Opacity <- 1.0
        powerCount <- powerCount - 1

    let mutable flashCount = 0
    let updateFlash () =
        if flashCount > 0 then
            if ((flashCount / 5) % 2) = 1 then (!pacman).Opacity <- 0.5
            else (!pacman).Opacity <- 1.0
        else (!pacman).Opacity <- 1.0
        flashCount <- flashCount - 1

    let touchGhosts () =
        let px, py = !x, !y
        ghosts |> List.filter (fun (_,(x,y),_,_) ->
            ((px >= x && px < x + 13) ||
             (x < px + 13 && x >= px)) &&
            ((py >= y && py < y + 13) ||
             (y < py + 13 && y >= py))
        )

    let update () =
        updatePacman ()
        updateGhosts ()
        let touching = touchGhosts()
        if touching.Length > 0 then
            if powerCount > 0 
            then ghosts <- ghosts |> List.mapi (fun i ghost ->
                if touching |> List.exists ((=) ghost)
                then 
                    let (images,_,_,image), (eyes,(_,(x,y),v,_)) = 
                        ghost, ghost_starts.[i]
                    (eyes,(x,y),v,image) 
                else ghost
            )
            else flashCount <- 20
        updateFlash ()
        updatePower ()
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
