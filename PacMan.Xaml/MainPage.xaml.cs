using Windows.Foundation;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace PacMan.App.Metro
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        ScaleTransform _transform;
        double _width;
        double _height;

        public MainPage()
        {
            this.InitializeComponent();

            var canvas = Main.CreateCanvas();
            _width = canvas.Width;
            _height = canvas.Height;

            _transform = new ScaleTransform
            {
                CenterX = canvas.Width / 2.0,
                CenterY = canvas.Height / 2.0                
            };
            canvas.RenderTransform = _transform;
            
            //this.LayoutRoot.Children.Add(canvas);
            this.Content = canvas;
            this.InvalidateMeasure();

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

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.  The Parameter
        /// property is typically used to configure the page.</param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }
    }
}
