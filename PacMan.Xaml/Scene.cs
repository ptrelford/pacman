using System;
using System.Collections.Generic;
#if NETFX_CORE
using Windows.UI.Xaml.Controls;
#else
using System.Windows.Controls;
#endif

namespace PacMan.App
{
    public class Scene : IScene
    {
        private readonly Canvas _canvas;
        private readonly IContents _contents;

        public Scene(Canvas canvas)
        {
            _canvas = canvas;
            _contents = new Contents(canvas.Children);
        }

        public ILayer AddLayer()
        {
            var layer = new Canvas();
            _canvas.Children.Add(layer);
            return new Layer(layer);
        }

        public IContents Contents
        {
            get { return _contents; }
        }

        public IBitmap CreateBitmap(Paint paint, IEnumerable<int> lines)
        {
            return Bitmap.Create(paint, lines);
        }

        public IBitmap CreateBitmap(int width, int height, int[][] lines)
        {
            return Bitmap.Create(width, height, lines);
        }

        public IBitmap LoadBitmap(string path)
        {
            return Bitmap.Load(path);
        }

        public ITextContent CreateText(string text)
        {
            return TextContent.Create(text);
        }
    }
}
