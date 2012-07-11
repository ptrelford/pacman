﻿using System;
using System.Windows;
using System.Windows.Controls;

namespace PacMan.Metro
{
    public class Content : IContent
    {
        private readonly UIElement _element;

        public Content(UIElement element)
        {
            _element = element;
        }

        public object Control
        {
            get { return _element; }
        }

        public void Move(double x, double y)
        {
            Canvas.SetLeft(_element, x);
            Canvas.SetTop(_element, y);
        }

        public void SetOpacity(double value)
        {
            _element.Opacity = value;
        }
    }
}