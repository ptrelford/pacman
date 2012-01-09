namespace PacMan

open Dom
open Pit
open Pit.Dom

module Maze =

    let [<Js>] maze = "\
/------------7/------------7,\
|............|!............|,\
|./__7./___7.|!./___7./__7.|,\
|o|  !.|   !.|!.|   !.|  !o|,\
|.L--J.L---J.LJ.L---J.L--J.|,\
|..........................|,\
|./__7./7./______7./7./__7.|,\
|.L--J.|!.L--7/--J.|!.L--J.|,\
|......|!....|!....|!......|,\
L____7.|L__7 |! /__J!./____J,\
#####!.|/--J LJ L--7!.|#####,\
#####!.|!          |!.|#####,\
#####!.|! /__==__7 |!.|#####,\
-----J.LJ |      ! LJ.L-----,\
##### .   |      !   . #####,\
_____7./7 |      ! /7./_____,\
#####!.|! L______J |!.|#####,\
#####!.|!          |!.|#####,\
#####!.|! /______7 |!.|#####,\
/----J.LJ L--7/--J LJ.L----7,\
|............|!............|,\
|./__7./___7.|!./___7./__7.|,\
|.L-7!.L---J.LJ.L---J.|/-J.|,\
|o..|!.......<>.......|!..o|,\
L_7.|!./7./______7./7.|!./_J,\
/-J.LJ.|!.L--7/--J.|!.LJ.L-7,\
|......|!....|!....|!......|,\
|./____JL__7.|!./__JL____7.|,\
|.L--------J.LJ.L--------J.|,\
|..........................|,\
L--------------------------J".Split(',')

    let [<Js>] toTile c =
        match c with
        | '='
        | '_' -> "top"
        | '|' -> "left"
        | '!' -> "right"
        | '/' -> "tl"
        | '7' -> "tr"
        | 'L' -> "bl"
        | 'J' -> "br"
        | '-' -> "bottom"
        | '.' -> "dot"
        | 'o' -> "pill"
        | _ -> "blank"

    let [<Js>] drawMaze (div:DomElement) =
        let lines = maze      
        for y = 0 to lines.Length-1 do
            let line = lines.[y]
            for x = 0 to line.Length-1 do
                let c = line.[x]
                let tile = toTile c                                    
                let style = "position:absolute;left:"+(x*8).ToString()+"px;top:"+(y*8).ToString()+"px"
                let path = "Images/"+tile+".png"
                let img = tag "img" ["src"@=path;"style"@=style] |> Dom.DomImage.Of
                div.AppendChild img

    let [<Js>] isBorder x y =               
        let c = maze.[y].[x]
        match c with
        | '_' | '|' | '!' | '/' | '7' | 'L' | 'J' | '-' -> true
        | _ -> false