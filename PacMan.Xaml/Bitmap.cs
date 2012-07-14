using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace PacMan.Metro
{
    public class Bitmap : IBitmap
    {
        private readonly BitmapSource _source;

        public Bitmap(BitmapSource source)
        {
            _source = source;
        }

        public static IBitmap Create(int width, int height, int[][] lines)
        {
            var bitmap = new WriteableBitmap(width, height);
            var pixels = bitmap.Pixels;
            int p = 0;
            foreach (var line in lines)
            {
                foreach (var pixel in line)
                    pixels[p++] = pixel;
            }
            return new Bitmap(bitmap);
        }

        public static IBitmap Create(Paint paint, IEnumerable<int> lines)
        {
            int width = 8, height = lines.Count();
            var bitmap = new WriteableBitmap(width, height);
            var pixels = bitmap.Pixels;
            int y = 0;
            foreach (int line in lines)
            {
                for (int x = 0; x < width; x++)
                {
                    int bit = 1 << (width - 1 - x);
                    int pixel =
                        (line & bit) == bit
                        ? paint.Color
                        : Paint.Black.Color;
                    pixels[x+y*width] = pixel;
                }
                ++y;
            }
            return new Bitmap(bitmap);
        }

        public static IBitmap Load(string path)
        {
            var uri = new Uri(path, UriKind.Relative);
            var stream = Application.GetResourceStream(uri).Stream;
            var image = new BitmapImage();
            image.SetSource(stream);
            return new Bitmap(image);
        }

        public IContent CreateContent()
        {
            var image = new Image { 
                Source = _source, 
                Stretch = Stretch.Fill,
                Width = _source.PixelWidth,
                Height = _source.PixelHeight
            };
            return new Content(image);
        }
    }
}
