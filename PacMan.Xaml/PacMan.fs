namespace PacMan

type Paint(aarrggbb:int) =
    static member White = Paint(0xFFFFFFFF)
    static member Black = Paint(0x00000000)
    static member Blue = Paint(0xFF0000FF)
    static member Yellow = Paint(0xFFFFFF00)
    static member Transparent = Paint(0x00FFFFFF)
    member this.Color = aarrggbb 

type IScene =
    abstract member AddLayer : unit -> ILayer
    abstract member CreateBitmap : Paint * int seq -> IBitmap
    abstract member LoadBitmap : string -> IBitmap
    abstract member Contents : IContents
and  IContents = 
    abstract member Add : IContent -> unit
    abstract member Remove : IContent -> unit
    abstract member Contains: IContent -> bool
and IContent =
    abstract member Control : obj
    abstract member Move : float * float -> unit
    abstract member SetOpacity : float -> unit
and IBitmap =
    abstract member CreateContent : unit -> IContent
and ILayer =
    inherit IContent
    abstract member Contents : IContents

type IInput =
    abstract member IsUp : bool
    abstract member IsDown : bool
    abstract member IsLeft : bool
    abstract member IsRight : bool

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

type Ghost = {
    Blue : IContent
    Eyes : IContent * IContent * IContent * IContent
    Body : IContent * IContent * IContent * IContent
    Image : IContent
    X : int
    Y : int
    V : int * int
    IsReturning : bool
    }

type Game(scene:IScene, input:IInput) =
    let toBitmap color lines = scene.CreateBitmap(color,lines)
    let toImage (bitmap:IBitmap) = bitmap.CreateContent() 
    let load s = sprintf "Images/%s.png" s |> scene.LoadBitmap |> toImage
    let add item = scene.Contents.Add(item)
    let remove item = scene.Contents.Remove(item)
    let set (element:IContent) (x,y) = element.Move(x - 16 |> float, y + 16 |> float)
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
        let convert = toBitmap Paint.Blue
        List.foldBack (fun (l,m,r) (ls,ms,rs) -> l::ls, m::ms, r::rs) xs ([],[],[])
        |> fun (l,m,r) -> convert l, convert m, convert r

    let tl, top, tr         = fromTriple tops
    let left, blank, right  = fromTriple mids
    let bl, bottom, br      = fromTriple bots
    let door = toBitmap Paint.White door'
    let pill = toBitmap Paint.Yellow pill'
    let power = toBitmap Paint.Yellow power'

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

    let walls = scene.AddLayer()
    let lines = maze.Split('\n')
    let tiles =
        lines |> Array.mapi (fun y line ->
            line.ToCharArray() |> Array.mapi (fun x item ->
                let tile = toTile item |> toImage
                set tile (x * 8, y * 8)
                if isWall item 
                then walls.Contents.Add tile |> ignore
                else scene.Contents.Add tile |> ignore
                tile
            )
        )
    let route_home =
        let numbers =
            lines |> Array.map (fun line ->
                line.ToCharArray() 
                |> Array.map (fun c -> if isWall c then System.Int32.MaxValue else -1)
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
    let p = load "p"
    let pu = load "pu1",load "pu2"
    let pd = load "pd1",load "pd2"
    let pl = load "pl1",load "pl2"
    let pr = load "pr1",load "pr2"
    let lives = [for _ in 1..2 -> load "pl1"]
    do  lives |> List.iteri (fun i life -> add life; set life (16+16*i,32*8))

    let ghost_starts = 
        [
            "red", (16, 12), (1,0)
            "cyan", (14, 16), (1,0)
            "pink" , (16, 14), (0,-1)
            "orange" , (18, 16), (-1,0)
        ]
        |> List.map (fun (color,(x,y),v) -> 
            let blue = load "blue"
            let eyes = load "eyeu", load "eyed", load "eyel", load "eyer"
            let body = load (color+"u"), load (color+"d"), load (color+"l"), load (color+"r")
            let _,image,_,_ = body
            { Blue=blue; Eyes=eyes; Body=body; X=x*8-7; Y=y*8-3; V=v; Image=image; IsReturning=false }
        )
    let mutable ghosts = ghost_starts
    do  ghosts |> List.iter (fun ghost -> 
        add ghost.Image
        set ghost.Image (ghost.X,ghost.Y)
        )

    let pacman = ref p
    do  add !pacman
    let mutable powerCount = 0

    let x = ref (16 * 8 - 7)
    let y = ref (24 * 8 - 3)
    let v = ref (0,0)

    let noWall (x,y) (ex,ey) =
        let bx, by = int ((x+6+ex)/8), int ((y+6+ey)/8)
        isWallAt (bx,by) |> not

    let fillValue (x,y) (ex,ey) =
        let bx, by = int ((x+6+ex)/8), int ((y+6+ey)/8)
        route_home.[by].[bx]

    let verticallyAligned (x,y) = x % 8 = 5
    let horizontallyAligned (x,y) = y % 8 = 5

    let canGoUp (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,-4)
    let canGoDown (x,y) = verticallyAligned (x,y) && noWall (x,y) (0,5)
    let canGoLeft (x,y) = horizontallyAligned (x,y) && noWall (x,y) (-4,0)
    let canGoRight (x,y) = horizontallyAligned (x,y) && noWall (x,y) (5,0)

    let fillUp (x,y) = fillValue (x,y) (0,-4)
    let fillDown (x,y) = fillValue (x,y) (0,5)
    let fillLeft (x,y) = fillValue (x,y) (-4,0)
    let fillRight (x,y) = fillValue (x,y) (5,0)

    let go (x,y) (dx,dy) =
        let x = 
            if   dx = -1 && x = 0 then 30 * 8
            elif dx = 1  && x = 30 *8 then 0
            else x
        x + dx, y + dy

    let newGhosts () =
        ghosts |> List.map (fun ghost ->
            let x, y = ghost.X, ghost.Y
            let dx, dy = ghost.V
            let u,d,l,r = ghost.Body
            let u',d',l',r' = ghost.Eyes
            let face, eye, canMove =
                match dx, dy with
                | 0,-1 -> u, u', canGoUp (x,y)
                | 0, 1 -> d, d', canGoDown (x,y)
                | -1,0 -> l, l', canGoLeft (x,y)
                | 1, 0 -> r, r', canGoRight (x,y)
                | _, _ -> invalidOp ""
            let isBackwards (a,b) =
                (a <> 0 && a = -dx) || (b <> 0 && b = -dy)
            let directions = 
                [
                if canGoUp (x,y) then yield (0,-1), fillUp (x,y)
                if canGoDown (x,y) then yield (0,1), fillDown (x,y)
                if canGoLeft (x,y) then yield (-1,0), fillLeft (x,y)
                if canGoRight(x,y) then yield (1,0), fillRight (x,y)
                ]
            let directions =
                if ghost.IsReturning then
                    directions
                    |> Seq.sortBy snd
                    |> Seq.map fst
                    |> Seq.sortBy isBackwards
                else
                    directions
                    |> Seq.map fst
                    |> Seq.unsort
                    |> Seq.sortBy isBackwards
            let dx, dy = 
                let newDirection = 
                    directions |> Seq.head
                if not <| isBackwards newDirection 
                then newDirection
                else dx,dy
            let x,y = go (x,y) (dx,dy)
            let returning =
                if ghost.IsReturning && 0 = (fillValue (x,y) (0,0))
                then false
                else ghost.IsReturning
            remove ghost.Image
            let face = 
                if ghost.IsReturning then eye
                else
                    if powerCount > 0 then ghost.Blue else face
            add face
            set face (x,y)
            { ghost with X = x; Y = y; V = (dx,dy); Image = face; IsReturning = returning }
        )

    let updateGhosts () = ghosts <- newGhosts ()

    let updatePacman () =
        let directions = 
            [
            if input.IsUp && canGoUp (!x,!y) then yield (0,-1), pu
            if input.IsDown && canGoDown (!x,!y) then yield (0,1), pd
            if input.IsLeft && canGoLeft (!x,!y) then yield (-1,0), pl
            if input.IsRight && canGoRight (!x,!y) then yield (1,0), pr
            ] 
            |> List.sortBy (fun (v',_) -> v' = !v)
        let move ((dx,dy),(d1,d2)) =
            let x', y' = go (!x,!y) (dx,dy)
            x := x'; y := y'; v := (dx,dy)
            remove !pacman
            let d = if (!x/6 + !y/6) % 2 = 0 then d1 else d2
            add d
            pacman := d
        if directions.Length > 0 then
            directions.Head |> move
        let tx, ty = int ((!x+6)/8), int ((!y+6)/8)
        if tileAt tx ty = '.' then
            remove (tiles.[ty].[tx])
        if tileAt tx ty = 'o' then
            if scene.Contents.Contains (tiles.[ty].[tx]) then
                powerCount <- 500
            remove (tiles.[ty].[tx])
        set !pacman (!x,!y)

    let updatePower () =
        if powerCount > 0 then
            if (powerCount/5) % 2 = 1 then walls.SetOpacity(0.5)
            else walls.SetOpacity(1.0)
        else walls.SetOpacity(1.0)
        powerCount <- powerCount - 1

    let mutable flashCount = 0
    let updateFlash () =
        if flashCount > 0 then
            if ((flashCount / 5) % 2) = 1 then (!pacman).SetOpacity(0.5)
            else (!pacman).SetOpacity(1.0)
        else (!pacman).SetOpacity(1.0)
        flashCount <- flashCount - 1

    let touchGhosts () =
        let px, py = !x, !y
        ghosts |> List.filter (fun ghost ->
            let x,y = ghost.X, ghost.Y
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
                    let ghost' = ghost_starts.[i]
                    { ghost with IsReturning = true; }
                else ghost
            )
            else flashCount <- 20
        updateFlash ()
        updatePower ()

    member this.Update () = update ()