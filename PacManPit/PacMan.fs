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
        let x = ref 105
        let y = ref 181
        let div = document.GetElementById("maindiv")
        let ppos = document.GetElementById("ppos")
        let pimg = document.GetElementById("pimg") |> Dom.DomImage.Of
        drawMaze div
        div 
        |> Event.keydown
        |> Event.add (fun e ->             
            let s = JsString.FromCharCode(e.KeyCode)                             
            let c = s.Chars(0)
            let turn d = pimg?src <- "Images/p"+d+".png"        
            if c = 'Z' then turn "l"; x := !x - 1; ppos.Style.Left <- (!x).ToString() + "px"
            if c = 'X' then turn "r"; x := !x + 1; ppos.Style.Left <- (!x).ToString() + "px"
            if c = 'Q' then turn "u"; y := !y - 1; ppos.Style.Top <- (!y).ToString() + "px"
            if c = 'A' then turn "d"; y := !y + 1;  ppos.Style.Top <- (!y).ToString() + "px"
        )

        