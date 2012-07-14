using System;
using System.Collections.Generic;
using System.Linq;
#if NETFX_CORE
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Media.Imaging;
#else
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;
#endif

namespace PacMan.App
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
#if NETFX_CORE
            var pixels = bitmap.PixelBuffer.AsStream();
            foreach (var line in lines)
            {
                foreach (var pixel in line)
                {
                    pixels.WriteByte((byte)(pixel >> 00));
                    pixels.WriteByte((byte)(pixel >> 08));
                    pixels.WriteByte((byte)(pixel >> 16));
                    pixels.WriteByte((byte)(pixel >> 24));
                }                  
            }
#else
            var pixels = bitmap.Pixels;
            int p = 0;
            foreach (var line in lines)
            {
                foreach (var pixel in line)
                    pixels[p++] = pixel;
            }
#endif
            return new Bitmap(bitmap);
        }

        public static IBitmap Create(Paint paint, IEnumerable<int> lines)
        {
            int width = 8, height = lines.Count();
            var bitmap = new WriteableBitmap(width, height);
#if NETFX_CORE
            var pixels = bitmap.PixelBuffer.AsStream();
            foreach (int line in lines)
            {
                for (int x = 0; x < width; x++)
                {
                    int bit = 1 << (width - 1 - x);
                    int pixel =
                        (line & bit) == bit
                        ? paint.Color
                        : Paint.Black.Color;
                    pixels.WriteByte((byte)(pixel >> 00));
                    pixels.WriteByte((byte)(pixel >> 08));
                    pixels.WriteByte((byte)(pixel >> 16));
                    pixels.WriteByte((byte)(pixel >> 24));
                }
            }
#else
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
#endif
            return new Bitmap(bitmap);
        }

        public static IBitmap Load(string path)
        {
#if NETFX_CORE
            throw new NotImplementedException();
#else
            var uri = new Uri(path, UriKind.Relative);
            var stream = Application.GetResourceStream(uri).Stream;
            var image = new BitmapImage();
            image.SetSource(stream);
            return new Bitmap(image);
#endif
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
