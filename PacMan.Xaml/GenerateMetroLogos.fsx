#if INTERACTIVE
#r "System.Drawing.dll"
#endif

open System
open System.IO
open System.Drawing
open System.Drawing.Imaging

let drawPacman (bitmap:Bitmap, x:int, y:int, size:int) =
    let width, height = bitmap.Width, bitmap.Height
    let graphics = Graphics.FromImage(bitmap)
    do  graphics.Clear(Color.Black)
    graphics.FillEllipse(Brushes.Yellow,x,y,size,size)
    let points = 
        let right = x + size
        [|right,y + size/2 - size/4;right,y + size/2 + size/4; x + size/2, y + size/2|]
        |> Array.map (fun (x,y) -> PointF(float32 x,float32 y))
    graphics.FillPolygon(Brushes.Black,points)

open System.Windows.Forms

let show (bitmap:Bitmap) =
    let form = new Form()
    let box = new PictureBox(Image = bitmap)
    box.Width <- bitmap.Width
    box.Height <- bitmap.Height
    form.Width <- bitmap.Width
    form.Height <- bitmap.Height + 32
    form.Controls.Add(box)
    form.Show()

do  // Logo
    let path = @"C:\Users\Moon\Documents\Visual Studio 2010\Projects\pacman\PacMan.Xaml\Assets\Logo.png"
    let bitmap = new Bitmap(path)
    drawPacman(bitmap, 42, 38, 64)
    bitmap.Save("PacMan_Logo.png", ImageFormat.Png)

do  // SmallLogo
    let path = @"C:\Users\Moon\Documents\Visual Studio 2010\Projects\pacman\PacMan.Xaml\Assets\SmallLogo.png"
    let bitmap = new Bitmap(path)
    drawPacman(bitmap, 3, 3, 24)
    bitmap.Save("PacMan_SmallLogo.png", ImageFormat.Png)

do  // StoreLogo
    let path = @"C:\Users\Moon\Documents\Visual Studio 2010\Projects\pacman\PacMan.Xaml\Assets\StoreLogo.png"
    let bitmap = new Bitmap(path)
    drawPacman(bitmap, 5, 5, 40)
    bitmap.Save("PacMan_StoreLogo.png", ImageFormat.Png)

do  // SplashScreen
    let path = @"C:\Users\Moon\Documents\Visual Studio 2010\Projects\pacman\PacMan.Xaml\Assets\SplashScreen.png"
    let bitmap = new Bitmap(path)
    drawPacman(bitmap, 200, 42, 214)
    bitmap.Save("PacMan_SplashScreen.png", ImageFormat.Png)
    show bitmap