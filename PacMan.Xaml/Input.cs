﻿using System.Windows.Input;

namespace PacMan.Metro
{
    public class Input : IInput
    {
        private readonly Keys _keys;

        public Input(Keys keys)
        {
            _keys = keys;
        }

        public bool IsDown
        {
            get { return _keys.IsKeyDown(Key.Down); }
        }

        public bool IsLeft
        {
            get { return _keys.IsKeyDown(Key.Left); }
        }

        public bool IsRight
        {
            get { return _keys.IsKeyDown(Key.Right); }
        }

        public bool IsUp
        {
            get { return _keys.IsKeyDown(Key.Up); }
        }
    }
}