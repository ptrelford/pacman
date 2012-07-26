using System.Windows;
using System.Windows.Media;
using Microsoft.Phone.Controls;

namespace PacMan.App
{
    public partial class MainPhonePage : PhoneApplicationPage
    {
        ScaleTransform _transform;
        double _width;
        double _height;

        // Constructor
        public MainPhonePage()
        {
            InitializeComponent();
         
            var canvas = Main.CreateCanvas();
            _width = canvas.Width;
            _height = canvas.Height;

            _transform = new ScaleTransform
            {
                CenterX = _width / 2,
                CenterY = _height / 2
            };
            canvas.RenderTransform = _transform;

            this.ContentPanel.Children.Add(canvas);
            Main.StartGame(this, canvas);     
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