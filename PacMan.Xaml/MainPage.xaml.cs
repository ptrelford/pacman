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
        public MainPage()
        {
            this.InitializeComponent();

            var canvas = Main.CreateCanvas();
            canvas.RenderTransform = new ScaleTransform
            {
                CenterX = canvas.Width / 2.0,
                CenterY = canvas.Height / 2.0,
                ScaleX = 3.0,
                ScaleY = 3.0
            };
            this.Width = canvas.Width;
            this.Height = canvas.Height;
            this.Content = canvas;
            Main.StartGame(this, canvas);
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
