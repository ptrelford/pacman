#if NETFX_CORE
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
#else
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
#endif

namespace PacMan.App
{
    public class TextContent : Content, ITextContent
    {
        private readonly TextBlock _block;

        private TextContent(TextBlock block)
            : base(block)
        {
            _block = block;
        }

        internal static ITextContent Create(string text)
        {
            var block = 
                new TextBlock {
                    FontFamily=new FontFamily("Courier New"),
                    Foreground=new SolidColorBrush(Colors.White), 
                    FontSize=8.0,
                    FontWeight=FontWeights.ExtraBold,
                    Text=text
                };
            return new TextContent(block); 
        }

        public void SetText(string value)
        {
            _block.Text = value;
        }
    }
}
