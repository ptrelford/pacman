using System;
#if NETFX_CORE
using Windows.UI.Xaml.Media;
#else
using System.Windows.Media;
#endif

namespace PacMan.App
{
    public static class Rendering
    {
        public static void Run(TimeSpan rate, Action action)
        {
            var lastUpdate = DateTime.Now;
            var residual = new TimeSpan();
            CompositionTarget.Rendering += (s, e) =>
            {
                var now = DateTime.Now;
                residual = residual + (now - lastUpdate);
                while (residual > rate)
                {
                    action();
                    residual -= rate;
                }
                lastUpdate = now;
            };
        }
    }
}
