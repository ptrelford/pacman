using System;
#if NETFX_CORE
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media;
#else
using System.Windows.Controls;
using System.Windows.Media;
#endif

namespace PacMan.App
{
    public static class Rendering
    {
        public static void Run(Control control, TimeSpan rate, Action action)
        {
            var focus = true;
            var lastUpdate = DateTime.Now + TimeSpan.FromSeconds(0.5);
            var residual = TimeSpan.Zero;
            control.GotFocus += (s, e) =>
            {
                focus = true;
                lastUpdate = DateTime.Now + TimeSpan.FromSeconds(0.5);
                residual = TimeSpan.Zero;
            };
            control.LostFocus += (s, e) =>
            {
                focus = false;
            };
            CompositionTarget.Rendering += (s, e) =>
            {
                var now = DateTime.Now;
                if (now >= lastUpdate)
                {
                    residual = residual + (now - lastUpdate);
                    while (residual > rate)
                    {
                        if (focus) action();
                        residual -= rate;
                    }
                    lastUpdate = now;
                }
            };
        }
    }
}
