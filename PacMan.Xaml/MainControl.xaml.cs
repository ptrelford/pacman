using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace PacMan.App
{
    public partial class MainControl : UserControl
    {
        ScaleTransform _transform;

        public MainControl()
        {
            InitializeComponent();

            var canvas = Main.CreateCanvas();

            Main.StartGame(this, canvas);

            _transform = new ScaleTransform { 
                CenterX = canvas.Width/2, 
                CenterY = canvas.Height/2, 
                ScaleX = 2.0, 
                ScaleY = 2.0 };
            canvas.RenderTransform = _transform;

            this.LayoutRoot.Children.Add(canvas);
        }

        protected override Size MeasureOverride(Size availableSize)
        {
            return base.MeasureOverride(availableSize);
        }
    }
}
