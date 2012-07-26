using System.Collections.Generic;

namespace PacMan.App
{
    public class HashSet<T>
    {
        private List<T> _values = new List<T>();

        public void Clear()
        {
            _values.Clear();
        }

        public bool Contains(T value)
        {
            return _values.Contains(value);
        }

        public void Add(T value)
        {
            _values.Add(value);
        }

        public void Remove(T Value)
        {
            _values.Remove(Value);
        }
    }
}
