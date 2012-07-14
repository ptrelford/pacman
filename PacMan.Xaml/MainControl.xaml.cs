using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace PacMan.App
{
    public partial class MainControl : UserControl
    {
        public MainControl()
        {
            InitializeComponent();

            var canvas = Main.CreateCanvas();
            this.Width = canvas.Width;
            this.Height = canvas.Height;

            Main.StartGame(this, canvas);

            this.Content = canvas;                       
        }
    }
}
