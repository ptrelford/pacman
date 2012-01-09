namespace PacMan

open Dom
open Maze
open Pit
open Pit.Dom
open Pit.Javascript

module App =

    [<DomEntryPoint>]
    [<Js>]
    let main() =      
        
        let x = ref (14 * 8 - 7)
        let y = ref (23 * 8 - 3)
        let div = document.GetElementById("maindiv")
        let ppos = document.GetElementById("ppos")
        let pimg = document.GetElementById("pimg") |> Dom.DomImage.Of
        drawMaze div
        div 
        |> Event.keydown
        |> Event.add (fun e ->             
            let s = JsString.FromCharCode(e.KeyCode)                                        
            let (ex,ey), (dx,dy), dir =
                match s with
                | "Z" when !y % 8 = 5 -> (-4,0), (-1,0), "l" 
                | "X" when !y % 8 = 5 -> (5,0), (1,0), "r"
                | "Q" when !x % 8 = 5 -> (0,-4), (0,-1), "u"
                | "A" when !x % 8 = 5 -> (0,5), (0,1),  "d"               
                | _ -> (0,0), (0,0), ""
            let bx, by = int ((!x+6+ex)/8), int ((!y+6+ey)/8)
            if isBorder bx by |> not then x := !x + dx; y := !y + dy
            pimg?src <- "Images/p"+dir+".png"
            ppos.Style.Left <- (!x).ToString() + "px"
            ppos.Style.Top <- (!y).ToString() + "px"           
            
        )

        