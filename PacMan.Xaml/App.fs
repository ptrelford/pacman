namespace PacMan

open System.Windows
open System.Windows.Controls

type App() as this = 
    inherit Application()
    do  this.Startup.AddHandler(fun o e -> this.RootVisual <- GameControl())
