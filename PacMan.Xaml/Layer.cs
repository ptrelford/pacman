using System.Windows.Controls;

namespace PacMan.Metro
{
    public class Layer : Content, ILayer
    {
        private readonly IContents _contents;

        public Layer(Canvas canvas)
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
