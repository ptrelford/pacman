#if INTERACTIVE
#r "System.Drawing.dll"
#endif

open System
open System.IO
open System.Drawing
open System.Drawing.Imaging

let convert name (path:string) = 
    let bitmap = new Bitmap(path)
    let rect = Rectangle(0,0,bitmap.Width,bitmap.Height)
    let bits = bitmap.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb)
    let ptr = bits.Scan0
    let byteCount  = bits.Stride * bits.Height;
    let bytes = Array.CreateInstance(typeof<byte>, byteCount) :?> byte[]
    System.Runtime.InteropServices.Marshal.Copy(ptr, bytes, 0, byteCount)
    bitmap.UnlockBits(bits)
    let grid =
        [|for y in 0..bitmap.Height-1 ->
            [|for x in 0..bitmap.Width-1 ->
                let i = y * bits.Stride + x * 4
                let b = int bytes.[i + 0] <<< 0 
                let g = int bytes.[i + 1] <<< 8
                let r = int bytes.[i + 2] <<< 16
                let a = int bytes.[i + 3] <<< 24
                if a = 0 then 0
                else a ||| r ||| g ||| b 
            |]
        |]
    let colors = grid |> Array.collect id |>  Seq.distinct |> Seq.toArray
    let code x =
        let toChar x = ('A' + char x).ToString()
        let rec toStr x = 
            if x < 26 then toChar x
            else (toStr ((x/26)-1)) + toChar(x%26)
        toStr x
    printfn "let %s =" name 
    printfn "\t%d, %d," bitmap.Width bitmap.Height
    let names = colors |> Array.mapi (fun i _ -> code i) |> String.concat ", "
    let values = colors |> Array.map (fun color -> String.Format("0x{0:X}",color)) |> String.concat ", "
    printfn "\tlet %s = %s" names values
    printfn "\t[|"
    for line in grid do
        [|for pixel in line -> let i = Array.IndexOf(colors, pixel) in code i|]
        |> String.concat "; "
        |> printfn "\t[|%s|]"
    printfn "\t|]"

do
    let folder = @"C:\Users\Moon\Documents\Visual Studio 2010\Projects\pacman\PacMan.Xaml\Images"
    let files = Directory.GetFiles(folder,"*.png")
    let toLabel (name:string) =
        if Char.IsDigit name.[0] 
        then sprintf "``%s``" name
        else name
    for path in files do
        let name = Path.GetFileNameWithoutExtension(path) |> toLabel
        convert name path
    printfn "let nameToValue ="
    printfn "\t["
    for path in files do
        let name = Path.GetFileNameWithoutExtension(path)
        let label = name |> toLabel
        printfn "\t\"%s\", %s" name label
    printf "\t]"