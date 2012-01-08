namespace PacMan

open Maze
open Pit
open Pit.Dom

module App =

    [<DomEntryPoint>]
    [<Js>]
    let main() =      
        let div = document.GetElementById("maindiv")
        drawMaze div