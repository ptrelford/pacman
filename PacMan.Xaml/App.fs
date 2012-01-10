#if SILVERLIGHT
namespace PacMan

open System.Windows
open System.Windows.Controls

type App() as this = 
    inherit Application()
    do  this.Startup.AddHandler(fun o e -> this.RootVisual <- GameControl())
#else
module PacMan.App

open System.Windows

[<System.STAThread>]
do  let win = new Window(Title="Spreadsheet", Content=GameControl())
    (new Application()).Run(win) |> ignore
#endif
