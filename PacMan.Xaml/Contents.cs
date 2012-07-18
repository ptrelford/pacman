#if NETFX_CORE
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
#else
using System.Windows;
using System.Windows.Controls;
#endif

namespace PacMan.App
{
    public class Contents : IContents
    {
        private readonly UIElementCollection _children;
        
        internal Contents(UIElementCollection children)
        {
            _children = children;
        }

        public void Add(IContent value)
        {
            _children.Add((UIElement) value.Control);
        }

        public bool Contains(IContent value)
        {
            return _children.Contains((UIElement) value.Control);
        }

        public void Remove(IContent value)
        {
            _children.Remove((UIElement)value.Control);
        }
    }
}
