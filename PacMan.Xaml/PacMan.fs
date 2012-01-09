﻿(*[omit:Skip namespace definition on TryFSharp.org]*)
#if INTERACTIVE
#else
namespace PacMan
#endif
(*[/omit]*)

open System
open System.Windows
open System.Windows.Controls
open System.Windows.Media
open System.Windows.Media.Imaging

type GameControl() as this = 
    inherit UserControl()
    let maze = "
/------------7/------------7
|............|!............|
|./__7./___7.|!./___7./__7.|
|o|  !.|   !.|!.|   !.|  !o|
|.L--J.L---J.LJ.L---J.L--J.|
|..........................|
|./__7./7./______7./7./__7.|
|.L--J.|!.L--7/--J.|!.L--J.|
|......|!....|!....|!......|
L____7.|L__7 |! /__J!./____J
#####!.|/--J LJ L--7!.|#####
#####!.|!          |!.|#####
#####!.|! /__==__7 |!.|#####
-----J.LJ |      ! LJ.L-----
##### .   |      !   . #####
_____7./7 |      ! /7./_____
#####!.|! L______J |!.|#####
#####!.|!          |!.|#####
#####!.|! /______7 |!.|#####
/----J.LJ L--7/--J LJ.L----7
|............|!............|
|./__7./___7.|!./___7./__7.|
|.L-7!.L---J.LJ.L---J.|/-J.|
|o..|!.......<>.......|!..o|
L_7.|!./7./______7./7.|!./_J
/-J.LJ.|!.L--7/--J.|!.LJ.L-7
|......|!....|!....|!......|
|./____JL__7.|!./__JL____7.|
|.L--------J.LJ.L--------J.|
|..........................|
L--------------------------J"

    let toInt (color:Color) = 
        (int color.A <<< 24) ||| 
        (int color.R <<< 16) ||| 
        (int color.G <<< 8)  ||| 
        int color.B
    let toBitmap color (xs:int list) =
        let width = 8
        let white = color |> toInt
        let black = 0x00000000
        let toColor = function true -> white | false -> black
        let bitmap = WriteableBitmap(width, xs.Length)
        let pixels = bitmap.Pixels
        xs |> List.iteri (fun y xs ->
            for x = 0 to width-1 do
                let bit = 1 <<< (width - 1 - x) 
                pixels.[x+y*width] <- xs &&& bit = bit |> toColor
        )
        bitmap
    let toImage (bitmap:#BitmapSource) =
        let w = bitmap.GetValue(BitmapSource.PixelWidthProperty) :?> int
        let h = bitmap.GetValue(BitmapSource.PixelHeightProperty) :?> int
        Image(Source=bitmap,Stretch=Stretch.Fill,Width=float w,Height=float h) 

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
    let pill = toBitmap Colors.Yellow pill'
    let power = toBitmap Colors.Yellow power'

    let toTile c =
        match c with
        | '='
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

    let canvas = Canvas(Background = SolidColorBrush Colors.Black)
    do  this.Content <- canvas
    let lines = maze.Split('\n')
    do  lines |> Array.iteri (fun y line ->
            line |> Seq.iteri (fun x item ->
                let tile = toTile item |> toImage
                Canvas.SetLeft(tile, x * 8 |> float)
                Canvas.SetTop(tile, y * 8 |> float)
                canvas.Children.Add tile |> ignore
            )
        )

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
