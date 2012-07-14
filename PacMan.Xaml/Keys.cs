using System;
using System.Collections.Generic;
#if NETFX_CORE
using Windows.System;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Input;
#else
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
#endif

namespace PacMan.App
{
    public class Keys : IDisposable
    {
        private readonly HashSet<Key> _keysDown = new HashSet<Key>();
        private readonly Action _disposeAction;

        public Keys(Control control)
        {
            control.KeyDown += control_KeyDown;
            control.KeyUp += control_KeyUp;
            control.LostFocus += control_LostFocus;
            _disposeAction = () => {
                control.KeyUp -= control_KeyUp;
                control.LostFocus -= control_LostFocus;
            };
        }

        public bool IsKeyDown(Key key)
        {
            return _keysDown.Contains(key);
        }

        void control_LostFocus(object sender, RoutedEventArgs e)
        {
            _keysDown.Clear();
        }

        void control_KeyUp(object sender, KeyEventArgs e)
        {
            _keysDown.Remove(e.Key);
        }

        void control_KeyDown(object sender, KeyEventArgs e)
        {
            _keysDown.Add(e.Key);
        }

        public void Dispose()
        {
            _disposeAction();
        }
    }
}
