#if NETFX_CORE
using Windows.UI.Xaml.Controls;
#else
using System.Windows.Controls;
#endif

namespace PacMan.App
{
    public class Layer : Content, ILayer
    {
        private readonly IContents _contents;

        internal Layer(Canvas canvas)
            : base(canvas)
        {
            _contents = new Contents(canvas.Children);
        }

        public IContents Contents
        {
            get { return _contents; }
        }
    }
}
