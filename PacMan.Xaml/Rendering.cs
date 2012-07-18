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
            var residual = TimeSpan.Zero;
            CompositionTarget.Rendering += (s, e) =>
            {
                var now = DateTime.Now;
                residual = residual + (now - lastUpdate);
                if (residual >= TimeSpan.FromMilliseconds(200))
                {
                    residual = TimeSpan.Zero;
                }
                else
                {
                    while (residual > rate)
                    {
                        action();
                        residual -= rate;
                    }
                }
                lastUpdate = now;
            };
        }
    }
}
