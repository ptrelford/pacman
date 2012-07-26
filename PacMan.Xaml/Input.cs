#if NETFX_CORE
using Windows.System;
using Key = Windows.System.VirtualKey;
#else
using System.Windows.Input;
#if WINDOWS_PHONE
using Microsoft.Devices.Sensors;
using Microsoft.Xna.Framework;
#endif 
#endif

namespace PacMan.App
{
    public class Input : IInput
    {
        #if WINDOWS_PHONE
        Accelerometer acc;
        float x;
        float y;
        #endif

        private readonly Keys _keys;

        internal Input(Keys keys)
        {
            _keys = keys;
            #if WINDOWS_PHONE
            acc = new Accelerometer();
            acc.CurrentValueChanged += (s, e) =>
                {
                    x = e.SensorReading.Acceleration.X;
                    y = e.SensorReading.Acceleration.Z;
                };
            acc.Start();
            #endif
        }

        public bool IsDown
        {
            get 
            { 
#if WINDOWS_PHONE
                return y > 0;
#else
                return _keys.IsKeyDown(Key.Down); 
#endif
            }
        }

        public bool IsLeft
        {
            get 
            {
#if WINDOWS_PHONE
                return x < 0;
#else
                return _keys.IsKeyDown(Key.Left);             
#endif
            }
        }

        public bool IsRight
        {
            get
            {
#if WINDOWS_PHONE
                return x > 0;
#else
                return _keys.IsKeyDown(Key.Right);             
#endif
            }
        }

        public bool IsUp
        {
            get
            {
#if WINDOWS_PHONE
                return y < 0;
#else
                return _keys.IsKeyDown(Key.Up);             
#endif
            }
        }
    }
}
