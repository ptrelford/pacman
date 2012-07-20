using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace PacMan.App
{
    public partial class MainControl : UserControl
    {
        ScaleTransform _transform;
        double _width;
        double _height;

        public MainControl()
        {
            InitializeComponent();

            var canvas = Main.CreateCanvas();
            _width = canvas.Width;
            _height = canvas.Height;

            Main.StartGame(this, canvas);

            _transform = new ScaleTransform { 
                CenterX = _width/2, 
                CenterY = _height/2, 
                ScaleX = 2.0, 
                ScaleY = 2.0 };
            canvas.RenderTransform = _transform;

            this.LayoutRoot.Children.Add(canvas);
        }

        protected override Size MeasureOverride(Size availableSize)
        {
            var scale = 1.0;
            while ((_width * scale) < availableSize.Width && 
                   (_height * scale) < availableSize.Height) 
              scale += 0.5;
            scale = scale - 0.5;
            if (scale < 1.0) scale = 1.0;
            if (_transform.ScaleX != scale)
            {
                _transform.ScaleX = scale;
                _transform.ScaleY = scale;
            }
            return base.MeasureOverride(availableSize);
        }
    }
}
