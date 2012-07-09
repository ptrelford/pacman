using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace PacMan.Metro
{
    public partial class MainPage : UserControl
    {
        public MainPage()
        {
            InitializeComponent();

            var keys = new Keys(this);
            var canvas = new Canvas
            {
                Background = new SolidColorBrush(Colors.Black),
                Width = 28 * 8,
                Height = (32 + 4) * 8
            };
            var clip = new RectangleGeometry 
            {
                Rect = new Rect { Width=canvas.Width, Height = canvas.Height }
            };
            canvas.Clip = clip;
            this.Width = canvas.Width;
            this.Height = canvas.Height;
            this.Content = canvas;
            var game = new Game(new Scene(canvas), new Input(keys));
            Rendering.Run(TimeSpan.FromSeconds(1.0 / 50.0), game.Update);
        }
    }
}
