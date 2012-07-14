using System;
#if NETFX_CORE
using Windows.UI;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
using Windows.Foundation;
#else
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
#endif

namespace PacMan.App
{
    public static class Main
    {
        public static void StartGame(Control control, Canvas canvas)
        {
            var keys = new Keys(control);
            var game = new Game(new Scene(canvas), new Input(keys));
            Rendering.Run(TimeSpan.FromSeconds(1.0 / 50.0), game.Update);
        }

        public static Canvas CreateCanvas()
        {
            var canvas = new Canvas
            {
                Background = new SolidColorBrush(Colors.Black),
                Width = 28 * 8,
                Height = (32 + 4) * 8
            };
            var clip = new RectangleGeometry
            {
                Rect = new Rect { Width = canvas.Width, Height = canvas.Height }
            };
            canvas.Clip = clip;
            return canvas;
        }
    }
}
