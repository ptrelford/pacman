registerNamespace("Pit");
registerNamespace("Pit.FSharp.Core");
registerNamespace("Pit.FSharp.Collections");
registerNamespace("Pit.Text");
registerNamespace("Pit.FSharp.Control");
registerNamespace("Pit.Dom.Html5");
registerNamespace("Pit.FSharp.Core.FSharpChoice2");
registerNamespace("Pit.FSharp.Core.FSharpChoice3");
registerNamespace("Pit.FSharp.Core.FSharpChoice4");
registerNamespace("Pit.FSharp.Core.FSharpChoice5");
registerNamespace("Pit.FSharp.Core.FSharpChoice6");
registerNamespace("Pit.FSharp.Core.FSharpChoice7");
registerNamespace("Pit.FSharp.Core.FSharpOption1");
registerNamespace("Pit.FSharp.Collections.SetTree1");
registerNamespace("Pit.FSharp.Collections.FSharpList1");
registerNamespace("Pit.Dom.Event");
registerNamespace("Pit.FSharp.Control.ObservableModule");
registerNamespace("Pit.FSharp.Control.EventModule");
registerNamespace("Pit.FSharp.Control.CommonExtensions");
registerNamespace("Pit.JsCommon");
registerNamespace("Pit.FSharp.Core.StringModule");
registerNamespace("Pit.FSharp.Collections.SeqModule");
registerNamespace("Pit.FSharp.Core.CompilerServices.RuntimeHelpers");
registerNamespace("Pit.FSharp.Collections.Generator");
registerNamespace("Pit.FSharp.Collections.IEnumerator");
registerNamespace("Pit.FSharp.Collections.ListModule");
registerNamespace("Pit.FSharp.Collections.Array2DModule");
registerNamespace("Pit.FSharp.Collections.ArrayModule");
registerNamespace("Pit.FSharp.Collections.SetModule");
registerNamespace("Pit.FSharp.Collections.SetTreeModule");
registerNamespace("Pit.FSharp.Control.LazyExtensions");
registerNamespace("Pit.FSharp.Core.LanguagePrimitives");
registerNamespace("Pit.FSharp.Core.OptionModule");
registerNamespace("Pit.FSharp.Core.Operators");
Pit.Exception = (function () {
    function Exception() {
        this.message = '';
    }
    Exception.prototype.get_message = function () {
        return this.message;
    };
    Exception.prototype.get_Message = function () {
        return x.get_message();
    };
    return Exception;
})();
Pit.Exception.__init__ = function (idx, lambda) {
    if (typeof this['ctors'] == 'undefined') {
        this['ctors'] = [];
    }
    var ctors = this['ctors'];
    ctors[idx] = lambda;
};
Pit.Exception.__init__(0, function (msg) {
    var e = new Pit.Exception();
    e.message = msg;
    return e;
});
Pit.ArgumentException = (function () {
    function ArgumentException() {
        this.message = '';
    }
    ArgumentException.prototype.get_message = function () {
        return this.message;
    };
    ArgumentException.prototype.get_Message = function () {
        return x.get_message();
    };
    return ArgumentException;
})();
Pit.ArgumentException.__init__ = function (idx, lambda) {
    if (typeof this['ctors'] == 'undefined') {
        this['ctors'] = [];
    }
    var ctors = this['ctors'];
    ctors[idx] = lambda;
};
Pit.ArgumentException.__init__(0, function (msg) {
    var a = new Pit.ArgumentException();
    a.message = msg;
    return a;
});
Pit.InvalidOperationException = (function () {
    function InvalidOperationException() {
        this.message = '';
    }
    InvalidOperationException.prototype.get_message = function () {
        return this.message;
    };
    InvalidOperationException.prototype.get_Message = function () {
        return x.get_message();
    };
    return InvalidOperationException;
})();
Pit.InvalidOperationException.__init__ = function (idx, lambda) {
    if (typeof this['ctors'] == 'undefined') {
        this['ctors'] = [];
    }
    var ctors = this['ctors'];
    ctors[idx] = lambda;
};
Pit.InvalidOperationException.__init__(0, function (msg) {
    var i = new Pit.InvalidOperationException();
    i.message = msg;
    return i;
});
Pit.NotSupportedException = (function () {
    function NotSupportedException() {
        this.message = '';
    }
    NotSupportedException.prototype.get_message = function () {
        return this.message;
    };
    NotSupportedException.prototype.get_Message = function () {
        return x.get_message();
    };
    return NotSupportedException;
})();
Pit.NotSupportedException.__init__ = function (idx, lambda) {
    if (typeof this['ctors'] == 'undefined') {
        this['ctors'] = [];
    }
    var ctors = this['ctors'];
    ctors[idx] = lambda;
};
Pit.NotSupportedException.__init__(0, function (msg) {
    var n = new Pit.NotSupportedException();
    n.message = msg;
    return n;
});
Pit.FSharp.Core.FSharpChoice2 = function () {
    this.Tag = 0;
    this.IsChoice2Of2 = false;
    this.IsChoice1Of2 = false;
};
Pit.FSharp.Core.FSharpChoice2.Choice1Of2 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice2.Choice1Of2.prototype = new Pit.FSharp.Core.FSharpChoice2();
Pit.FSharp.Core.FSharpChoice2.Choice1Of2.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice2.Choice1Of2.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice2.Choice2Of2 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice2.Choice2Of2.prototype = new Pit.FSharp.Core.FSharpChoice2();
Pit.FSharp.Core.FSharpChoice2.Choice2Of2.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice2.Choice2Of2.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice2.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice2.prototype.get_IsChoice2Of2 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2;
};
Pit.FSharp.Core.FSharpChoice2.prototype.get_IsChoice1Of2 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice2.Choice1Of2;
};
Pit.FSharp.Core.FSharpChoice2.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpChoice3 = function () {
    this.Tag = 0;
    this.IsChoice3Of3 = false;
    this.IsChoice2Of3 = false;
    this.IsChoice1Of3 = false;
};
Pit.FSharp.Core.FSharpChoice3.Choice1Of3 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice3.Choice1Of3.prototype = new Pit.FSharp.Core.FSharpChoice3();
Pit.FSharp.Core.FSharpChoice3.Choice1Of3.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice3.Choice1Of3.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice3.Choice2Of3 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice3.Choice2Of3.prototype = new Pit.FSharp.Core.FSharpChoice3();
Pit.FSharp.Core.FSharpChoice3.Choice2Of3.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice3.Choice2Of3.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice3.Choice3Of3 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice3.Choice3Of3.prototype = new Pit.FSharp.Core.FSharpChoice3();
Pit.FSharp.Core.FSharpChoice3.Choice3Of3.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice3.Choice3Of3.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice3.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice3.prototype.get_IsChoice3Of3 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice3.Choice3Of3;
};
Pit.FSharp.Core.FSharpChoice3.prototype.get_IsChoice2Of3 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice3.Choice2Of3;
};
Pit.FSharp.Core.FSharpChoice3.prototype.get_IsChoice1Of3 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice3.Choice1Of3;
};
Pit.FSharp.Core.FSharpChoice3.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpChoice4 = function () {
    this.Tag = 0;
    this.IsChoice4Of4 = false;
    this.IsChoice3Of4 = false;
    this.IsChoice2Of4 = false;
    this.IsChoice1Of4 = false;
};
Pit.FSharp.Core.FSharpChoice4.Choice1Of4 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice4.Choice1Of4.prototype = new Pit.FSharp.Core.FSharpChoice4();
Pit.FSharp.Core.FSharpChoice4.Choice1Of4.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice4.Choice1Of4.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice4.Choice2Of4 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice4.Choice2Of4.prototype = new Pit.FSharp.Core.FSharpChoice4();
Pit.FSharp.Core.FSharpChoice4.Choice2Of4.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice4.Choice2Of4.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice4.Choice3Of4 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice4.Choice3Of4.prototype = new Pit.FSharp.Core.FSharpChoice4();
Pit.FSharp.Core.FSharpChoice4.Choice3Of4.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice4.Choice3Of4.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice4.Choice4Of4 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice4.Choice4Of4.prototype = new Pit.FSharp.Core.FSharpChoice4();
Pit.FSharp.Core.FSharpChoice4.Choice4Of4.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice4.Choice4Of4.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice4.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice4.prototype.get_IsChoice4Of4 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice4.Choice4Of4;
};
Pit.FSharp.Core.FSharpChoice4.prototype.get_IsChoice3Of4 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice4.Choice3Of4;
};
Pit.FSharp.Core.FSharpChoice4.prototype.get_IsChoice2Of4 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice4.Choice2Of4;
};
Pit.FSharp.Core.FSharpChoice4.prototype.get_IsChoice1Of4 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice4.Choice1Of4;
};
Pit.FSharp.Core.FSharpChoice4.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpChoice5 = function () {
    this.Tag = 0;
    this.IsChoice5Of5 = false;
    this.IsChoice4Of5 = false;
    this.IsChoice3Of5 = false;
    this.IsChoice2Of5 = false;
    this.IsChoice1Of5 = false;
};
Pit.FSharp.Core.FSharpChoice5.Choice1Of5 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice5.Choice1Of5.prototype = new Pit.FSharp.Core.FSharpChoice5();
Pit.FSharp.Core.FSharpChoice5.Choice1Of5.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice5.Choice1Of5.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice5.Choice2Of5 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice5.Choice2Of5.prototype = new Pit.FSharp.Core.FSharpChoice5();
Pit.FSharp.Core.FSharpChoice5.Choice2Of5.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice5.Choice2Of5.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice5.Choice3Of5 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice5.Choice3Of5.prototype = new Pit.FSharp.Core.FSharpChoice5();
Pit.FSharp.Core.FSharpChoice5.Choice3Of5.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice5.Choice3Of5.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice5.Choice4Of5 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice5.Choice4Of5.prototype = new Pit.FSharp.Core.FSharpChoice5();
Pit.FSharp.Core.FSharpChoice5.Choice4Of5.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice5.Choice4Of5.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice5.Choice5Of5 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice5.Choice5Of5.prototype = new Pit.FSharp.Core.FSharpChoice5();
Pit.FSharp.Core.FSharpChoice5.Choice5Of5.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice5.Choice5Of5.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_IsChoice5Of5 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice5.Choice5Of5;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_IsChoice4Of5 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice5.Choice4Of5;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_IsChoice3Of5 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice5.Choice3Of5;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_IsChoice2Of5 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice5.Choice2Of5;
};
Pit.FSharp.Core.FSharpChoice5.prototype.get_IsChoice1Of5 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice5.Choice1Of5;
};
Pit.FSharp.Core.FSharpChoice5.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpChoice6 = function () {
    this.Tag = 0;
    this.IsChoice6Of6 = false;
    this.IsChoice5Of6 = false;
    this.IsChoice4Of6 = false;
    this.IsChoice3Of6 = false;
    this.IsChoice2Of6 = false;
    this.IsChoice1Of6 = false;
};
Pit.FSharp.Core.FSharpChoice6.Choice1Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice1Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice1Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice1Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.Choice2Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice2Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice2Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice2Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.Choice3Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice3Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice3Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice3Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.Choice4Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice4Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice4Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice4Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.Choice5Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice5Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice5Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice5Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.Choice6Of6 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice6.Choice6Of6.prototype = new Pit.FSharp.Core.FSharpChoice6();
Pit.FSharp.Core.FSharpChoice6.Choice6Of6.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice6.Choice6Of6.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice6Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice6Of6;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice5Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice5Of6;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice4Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice4Of6;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice3Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice3Of6;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice2Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice2Of6;
};
Pit.FSharp.Core.FSharpChoice6.prototype.get_IsChoice1Of6 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice6.Choice1Of6;
};
Pit.FSharp.Core.FSharpChoice6.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpChoice7 = function () {
    this.Tag = 0;
    this.IsChoice7Of7 = false;
    this.IsChoice6Of7 = false;
    this.IsChoice5Of7 = false;
    this.IsChoice4Of7 = false;
    this.IsChoice3Of7 = false;
    this.IsChoice2Of7 = false;
    this.IsChoice1Of7 = false;
};
Pit.FSharp.Core.FSharpChoice7.Choice1Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice1Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice1Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice1Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice2Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice2Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice2Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice2Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice3Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice3Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice3Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice3Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice4Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice4Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice4Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice4Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice5Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice5Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice5Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice5Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice6Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice6Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice6Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice6Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.Choice7Of7 = function (item) {
    this.Item = item;
};
Pit.FSharp.Core.FSharpChoice7.Choice7Of7.prototype = new Pit.FSharp.Core.FSharpChoice7();
Pit.FSharp.Core.FSharpChoice7.Choice7Of7.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Core.FSharpChoice7.Choice7Of7.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice7Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice7Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice6Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice6Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice5Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice5Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice4Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice4Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice3Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice3Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice2Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice2Of7;
};
Pit.FSharp.Core.FSharpChoice7.prototype.get_IsChoice1Of7 = function () {
    return this instanceof Pit.FSharp.Core.FSharpChoice7.Choice1Of7;
};
Pit.FSharp.Core.FSharpChoice7.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Core.FSharpOption1 = function () {
    this.Value = null;
    this.IsNone = false;
    this.IsSome = false;
};
Pit.FSharp.Core.FSharpOption1.None = function () {};
Pit.FSharp.Core.FSharpOption1.None.prototype = new Pit.FSharp.Core.FSharpOption1();
Pit.FSharp.Core.FSharpOption1.None.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Core.FSharpOption1.Some = function (value) {
    this.Value = value;
};
Pit.FSharp.Core.FSharpOption1.Some.prototype = new Pit.FSharp.Core.FSharpOption1();
Pit.FSharp.Core.FSharpOption1.Some.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Value() == compareTo.get_Value();
    return result;
};
Pit.FSharp.Core.FSharpOption1.Some.prototype.get_Value = function () {
    return this.Value;
};
Pit.FSharp.Core.FSharpOption1.prototype.get_Value = function () {
    return this.Value;
};
Pit.FSharp.Core.FSharpOption1.get_IsNone = function (x) {
    return (function (thisObject) {
        if (x instanceof Pit.FSharp.Core.FSharpOption1.None) {
            return true;
        } else {
            return false;
        }
    })(this);
};
Pit.FSharp.Core.FSharpOption1.get_IsSome = function (x) {
    return (function (thisObject) {
        if (x instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            return true;
        } else {
            return false;
        }
    })(this);
};
Pit.FSharp.Core.FSharpOption1.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Collections.SetTree1 = function () {};
Pit.FSharp.Collections.SetTree1.SetEmpty = function () {};
Pit.FSharp.Collections.SetTree1.SetEmpty.prototype = new Pit.FSharp.Collections.SetTree1();
Pit.FSharp.Collections.SetTree1.SetEmpty.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.SetTree1.SetNode = function (item1, item2, item3, item4) {
    this.Item1 = item1;
    this.Item2 = item2;
    this.Item3 = item3;
    this.Item4 = item4;
};
Pit.FSharp.Collections.SetTree1.SetNode.prototype = new Pit.FSharp.Collections.SetTree1();
Pit.FSharp.Collections.SetTree1.SetNode.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item1() == compareTo.get_Item1();
    result = result && this.get_Item2() == compareTo.get_Item2();
    result = result && this.get_Item3() == compareTo.get_Item3();
    result = result && this.get_Item4() == compareTo.get_Item4();
    return result;
};
Pit.FSharp.Collections.SetTree1.SetNode.prototype.get_Item1 = function () {
    return this.Item1;
};
Pit.FSharp.Collections.SetTree1.SetNode.prototype.get_Item2 = function () {
    return this.Item2;
};
Pit.FSharp.Collections.SetTree1.SetNode.prototype.get_Item3 = function () {
    return this.Item3;
};
Pit.FSharp.Collections.SetTree1.SetNode.prototype.get_Item4 = function () {
    return this.Item4;
};
Pit.FSharp.Collections.SetTree1.SetOne = function (item) {
    this.Item = item;
};
Pit.FSharp.Collections.SetTree1.SetOne.prototype = new Pit.FSharp.Collections.SetTree1();
Pit.FSharp.Collections.SetTree1.SetOne.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Collections.SetTree1.SetOne.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Collections.SetTree1.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Collections.FSharpSet1 = (function () {
    function FSharpSet1(comparer, tree) {
        this.IEnumerable = __createIEnumerable(this);
        this.IEnumerable1 = __createIEnumerable1(this);
        this.ICollection1 = __createICollection1(this);
        this.IComparable = __createIComparable(this);
        this.comparer = comparer;
        this.tree = tree;
    }
    FSharpSet1.prototype.Equals = function (that) {
        return (function (thisObject) {
            if (that instanceof Pit.FSharp.Collections.FSharpSet1) {
                var that1 = that;
                var e1 = thisObject.IEnumerable1_GetEnumerator();
                return (function (thisObject) {
                    try {
                        var e2 = that1.IEnumerable1_GetEnumerator();
                        return (function (thisObject) {
                            try {
                                var loop = function () {
                                    var m1 = e1.IEnumerator_MoveNext();
                                    var m2 = e2.IEnumerator_MoveNext();
                                    return (function (thisObject) {
                                        if (m1 == m2) {
                                            return (function (thisObject) {
                                                if (!m1) {
                                                    return true;
                                                } else {
                                                    return (function (thisObject) {
                                                        if (e1.IEnumerator1_get_Current() == e2.IEnumerator1_get_Current()) {
                                                            return loop();
                                                        } else {
                                                            return false;
                                                        }
                                                    })(thisObject);
                                                }
                                            })(thisObject);
                                        } else {
                                            return false;
                                        }
                                    })(thisObject);
                                };
                                return loop();
                            } finally {
                                (function (thisObject) {
                                    if (e2.containsInterface("__getIDisposable")) {
                                        return e2.IDisposable_Dispose();
                                    } else {
                                        return null;
                                    }
                                })(thisObject)
                            }
                        })(thisObject);
                    } finally {
                        (function (thisObject) {
                            if (e1.containsInterface("__getIDisposable")) {
                                return e1.IDisposable_Dispose();
                            } else {
                                return null;
                            }
                        })(thisObject)
                    }
                })(thisObject);
            } else {
                return false;
            }
        })(this);
    };
    FSharpSet1.prototype.GetHashCode = function () {
        return this.ComputeHashCode();
    };
    FSharpSet1.prototype.ComputeHashCode = function () {
        var combineHash = function (x) {
            return function (y) {
                return ((x << 1 + y) + 631);
            };
        };
        var res = 0;
        var enumerator = this.IEnumerable1_GetEnumerator();
        (function (thisObject) {
            try {
                while (enumerator.IEnumerator_MoveNext()) {
                    var x = enumerator.IEnumerator1_get_Current();
                    res = combineHash(res)(Pit.FSharp.Core.Operators.Hash(x));
                }
            } finally {
                (function (thisObject) {
                    if (enumerator.containsInterface("__getIDisposable")) {
                        return enumerator.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
        return Pit.FSharp.Core.Operators.Abs(res);
    };
    FSharpSet1.prototype.ToArray = function () {
        return Pit.FSharp.Collections.SetTreeModule.toArray(this.get_Tree());
    };
    FSharpSet1.prototype.ToList = function () {
        return Pit.FSharp.Collections.SetTreeModule.toList(this.get_Tree());
    };
    FSharpSet1.prototype.IsProperSupersetOf = function (y) {
        return Pit.FSharp.Collections.SetTreeModule.psubset(this.get_Comparer())(y.get_Tree())(this.get_Tree());
    };
    FSharpSet1.prototype.IsProperSubsetOf = function (y) {
        return Pit.FSharp.Collections.SetTreeModule.psubset(this.get_Comparer())(this.get_Tree())(y.get_Tree());
    };
    FSharpSet1.prototype.IsSupersetOf = function (y) {
        return Pit.FSharp.Collections.SetTreeModule.subset(this.get_Comparer())(y.get_Tree())(this.get_Tree());
    };
    FSharpSet1.prototype.IsSubsetOf = function (y) {
        return Pit.FSharp.Collections.SetTreeModule.subset(this.get_Comparer())(this.get_Tree())(y.get_Tree());
    };
    FSharpSet1.prototype.GetPreviousElement = function (e) {
        return Pit.FSharp.Collections.SetTreeModule.prevElem(this.get_Comparer())(e)(this.get_Tree());
    };
    FSharpSet1.prototype.GetNextElement = function (e) {
        return Pit.FSharp.Collections.SetTreeModule.nextElem(this.get_Comparer())(e)(this.get_Tree());
    };
    FSharpSet1.prototype.ForAll = function (f) {
        return Pit.FSharp.Collections.SetTreeModule.forall(f)(this.get_Tree());
    };
    FSharpSet1.prototype.Exists = function (f) {
        return Pit.FSharp.Collections.SetTreeModule.exists(f)(this.get_Tree());
    };
    FSharpSet1.prototype.Add = function (x) {
        return new Pit.FSharp.Collections.FSharpSet1(this.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.add(this.get_Comparer())(x)(this.get_Tree()));
    };
    FSharpSet1.prototype.Remove = function (x) {
        return new Pit.FSharp.Collections.FSharpSet1(this.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.remove(this.get_Comparer())(x)(this.get_Tree()));
    };
    FSharpSet1.prototype.Contains = function (x) {
        return Pit.FSharp.Collections.SetTreeModule.mem(this.get_Comparer())(x)(this.get_Tree());
    };
    FSharpSet1.prototype.Iterate = function (x) {
        return Pit.FSharp.Collections.SetTreeModule.iter(x)(this.get_Tree());
    };
    FSharpSet1.prototype.Fold = function (f) {
        return function (z) {
            return Pit.FSharp.Collections.SetTreeModule.fold(function (x) {
                return function (z1) {
                    return f(z1)(x);
                };
            })(z)(this.get_Tree());
        };
    };
    FSharpSet1.prototype.Partition = function (f) {
        var matchValue = this.get_Tree();
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                return {
                    Item1: thisObject,
                    Item2: thisObject
                };
            } else {
                var patternInput = Pit.FSharp.Collections.SetTreeModule.partition(thisObject.get_Comparer())(f)(thisObject.get_Tree());
                var t2 = patternInput.Item2;
                var t1 = patternInput.Item1;
                return {
                    Item1: new Pit.FSharp.Collections.FSharpSet1(thisObject.get_Comparer(), t1),
                    Item2: new Pit.FSharp.Collections.FSharpSet1(thisObject.get_Comparer(), t2)
                };
            }
        })(this);
    };
    FSharpSet1.prototype.Filter = function (f) {
        var matchValue = this.get_Tree();
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                return thisObject;
            } else {
                return new Pit.FSharp.Collections.FSharpSet1(thisObject.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.filter(thisObject.get_Comparer())(f)(thisObject.get_Tree()));
            }
        })(this);
    };
    FSharpSet1.prototype.Map = function (f) {
        var comparer = Pit.FSharp.Core.LanguagePrimitives.FastGenericComparer();
        return new Pit.FSharp.Collections.FSharpSet1(comparer, Pit.FSharp.Collections.SetTreeModule.fold(function (acc) {
            return function (k) {
                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(f(k))(acc);
            };
        })(new Pit.FSharp.Collections.SetTree1.SetEmpty())(this.get_Tree()));
    };
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.SetTreeModule.mkIEnumerator(this.x.get_Tree());
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    }
    FSharpSet1.prototype.__getIEnumerable = function () {
        return this.IEnumerable;
    };
    FSharpSet1.prototype.IEnumerable_GetEnumerator = function () {
        return this.IEnumerable.GetEnumerator();
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.SetTreeModule.mkIEnumerator(this.x.get_Tree());
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    }
    FSharpSet1.prototype.__getIEnumerable1 = function () {
        return this.IEnumerable1;
    };
    FSharpSet1.prototype.IEnumerable1_GetEnumerator = function () {
        return this.IEnumerable1.GetEnumerator();
    };
    function __createICollection1(thisObject) {
        var icollection1 = (function () {
            function ICollection1(thisObject) {
                this.x = thisObject;
            }
            ICollection1.prototype.get_Count = function () {
                return Pit.FSharp.Collections.SetTreeModule.count(this.x.get_Tree());
            };
            ICollection1.prototype.get_IsReadOnly = function () {
                return true;
            };
            ICollection1.prototype.Add = function (x) {
                throw Pit.NotSupportedException.ctors[0]("ReadOnlyCollection");
            };
            ICollection1.prototype.Clear = function () {
                throw Pit.NotSupportedException.ctors[0]("ReadOnlyCollection");
            };
            ICollection1.prototype.Contains = function (x) {
                return Pit.FSharp.Collections.SetTreeModule.mem(this.x.get_Comparer())(x)(this.x.get_Tree());
            };
            ICollection1.prototype.CopyTo = function (tupledArg) {
                var arr = tupledArg.Item1;
                var i = tupledArg.Item2;
                return Pit.FSharp.Collections.SetTreeModule.copyToArray(this.x.get_Tree())(arr)(i);
            };
            ICollection1.prototype.Remove = function (x) {
                throw Pit.NotSupportedException.ctors[0]("ReadOnlyCollection");
            };
            return ICollection1;
        })();
        return new icollection1(thisObject);
    }
    FSharpSet1.prototype.__getICollection1 = function () {
        return this.ICollection1;
    };
    FSharpSet1.prototype.ICollection1_get_Count = function () {
        return this.ICollection1.get_Count();
    };
    FSharpSet1.prototype.ICollection1_get_IsReadOnly = function () {
        return this.ICollection1.get_IsReadOnly();
    };
    FSharpSet1.prototype.ICollection1_Add = function (x) {
        return this.ICollection1.Add(x);
    };
    FSharpSet1.prototype.ICollection1_Clear = function () {
        return this.ICollection1.Clear();
    };
    FSharpSet1.prototype.ICollection1_Contains = function (x) {
        return this.ICollection1.Contains(x);
    };
    FSharpSet1.prototype.ICollection1_CopyTo = function (tupledArg) {
        return this.ICollection1.CopyTo(tupledArg);
    };
    FSharpSet1.prototype.ICollection1_Remove = function (x) {
        return this.ICollection1.Remove(x);
    };
    function __createIComparable(thisObject) {
        var icomparable = (function () {
            function IComparable(thisObject) {
                this.x = thisObject;
            }
            IComparable.prototype.CompareTo = function (that) {
                return Pit.FSharp.Collections.SetTreeModule.compare(this.x.get_Comparer())(this.x.get_Tree())(that.get_Tree());
            };
            return IComparable;
        })();
        return new icomparable(thisObject);
    }
    FSharpSet1.prototype.__getIComparable = function () {
        return this.IComparable;
    };
    FSharpSet1.prototype.IComparable_CompareTo = function (that) {
        return this.IComparable.CompareTo(that);
    };
    FSharpSet1.prototype.get_Comparer = function () {
        return this.comparer;
    };
    FSharpSet1.prototype.get_Tree = function () {
        return this.tree;
    };
    FSharpSet1.get_Empty = function () {
        var comparer = Pit.FSharp.Core.LanguagePrimitives.FastGenericComparer();
        return new Pit.FSharp.Collections.FSharpSet1(comparer, new Pit.FSharp.Collections.SetTree1.SetEmpty());
    };
    FSharpSet1.prototype.get_Count = function () {
        return Pit.FSharp.Collections.SetTreeModule.count(this.get_Tree());
    };
    FSharpSet1.prototype.get_IsEmpty = function () {
        return Pit.FSharp.Collections.SetTreeModule.isEmpty(this.get_Tree());
    };
    FSharpSet1.prototype.get_Choose = function () {
        return Pit.FSharp.Collections.SetTreeModule.choose(this.get_Tree());
    };
    FSharpSet1.prototype.get_MinimumElement = function () {
        return Pit.FSharp.Collections.SetTreeModule.minimumElement(this.get_Tree());
    };
    FSharpSet1.prototype.get_MaximumElement = function () {
        return Pit.FSharp.Collections.SetTreeModule.maximumElement(this.get_Tree());
    };
    return FSharpSet1;
})();
Pit.FSharp.Collections.FSharpSet1.__init__ = function (idx, lambda) {
    if (typeof this['ctors'] == 'undefined') {
        this['ctors'] = [];
    }
    var ctors = this['ctors'];
    ctors[idx] = lambda;
};
Pit.FSharp.Collections.FSharpSet1.__init__(0, function (elements) {
    var comparer = Pit.FSharp.Core.LanguagePrimitives.FastGenericComparer();
    return new Pit.FSharp.Collections.FSharpSet1(comparer, Pit.FSharp.Collections.SetTreeModule.ofSeq(comparer)(elements));
});
Pit.FSharp.Collections.FSharpSet1.FromArray = function (arr) {
    var comparer = Pit.FSharp.Core.LanguagePrimitives.FastGenericComparer();
    return new Pit.FSharp.Collections.FSharpSet1(comparer, Pit.FSharp.Collections.SetTreeModule.ofArray(comparer)(arr));
};
Pit.FSharp.Collections.FSharpSet1.Create = function (elements) {
    return Pit.FSharp.Collections.FSharpSet1.ctors[0](elements);
};
Pit.FSharp.Collections.FSharpSet1.Singleton = function (x) {
    return Pit.FSharp.Collections.FSharpSet1.get_Empty().Add(x);
};
Pit.FSharp.Collections.FSharpSet1.Compare = function (tupledArg) {
    var a = tupledArg.Item1;
    var b = tupledArg.Item2;
    return Pit.FSharp.Collections.SetTreeModule.compare(a.get_Comparer())(a.get_Tree())(b.get_Tree());
};
Pit.FSharp.Collections.FSharpSet1.Equality = function (tupledArg) {
    var a = tupledArg.Item1;
    var b = tupledArg.Item2;
    return Pit.FSharp.Collections.SetTreeModule.compare(a.get_Comparer())(a.get_Tree())(b.get_Tree()) == 0;
};
Pit.FSharp.Collections.FSharpSet1.Intersection1 = function (tupledArg) {
    var a = tupledArg.Item1;
    var b = tupledArg.Item2;
    var matchValue = b.get_Tree();
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
            return b;
        } else {
            var matchValue1 = a.get_Tree();
            return (function (thisObject) {
                if (matchValue1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return a;
                } else {
                    return new Pit.FSharp.Collections.FSharpSet1(a.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.intersection(a.get_Comparer())(a.get_Tree())(b.get_Tree()));
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.FSharpSet1.Intersection2 = function (sets) {
    return Pit.FSharp.Collections.SeqModule.Reduce(function (s1) {
        return function (s2) {
            return Pit.FSharp.Collections.FSharpSet1.Intersection1({
                Item1: s1,
                Item2: s2
            });
        };
    })(sets);
};
Pit.FSharp.Collections.FSharpSet1.Union = function (sets) {
    return Pit.FSharp.Collections.SeqModule.Fold(function (s1) {
        return function (s2) {
            return Pit.FSharp.Collections.FSharpSet1.op_Addition(s1, s2);
        };
    })(Pit.FSharp.Collections.FSharpSet1.get_Empty())(sets);
};
Pit.FSharp.Collections.FSharpSet1.op_Addition = function (a, b) {
    var matchValue = b.get_Tree();
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
            return a;
        } else {
            var matchValue1 = a.get_Tree();
            return (function (thisObject) {
                if (matchValue1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return b;
                } else {
                    return new Pit.FSharp.Collections.FSharpSet1(a.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.union(a.get_Comparer())(a.get_Tree())(b.get_Tree()));
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.FSharpSet1.op_Subtraction = function (a, b) {
    var matchValue = a.get_Tree();
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
            return a;
        } else {
            var matchValue1 = b.get_Tree();
            return (function (thisObject) {
                if (matchValue1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return a;
                } else {
                    return new Pit.FSharp.Collections.FSharpSet1(a.get_Comparer(), Pit.FSharp.Collections.SetTreeModule.diff(a.get_Comparer())(a.get_Tree())(b.get_Tree()));
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.FSharpList1 = function () {
    this.Tag = 0;
    this.IsCons = false;
    this.IsEmpty = false;
    this.Head = null;
    this.Tail = null;
    this.Length = 0;
    this.Item = null;
};
Pit.FSharp.Collections.FSharpList1.prototype.__getIEnumerable = function () {
    return this.IEnumerable;
};
Pit.FSharp.Collections.FSharpList1.prototype.IEnumerable_GetEnumerator = function () {
    return this.IEnumerable.GetEnumerator();
};
Pit.FSharp.Collections.FSharpList1.prototype.__getIEnumerable1 = function () {
    return this.IEnumerable1;
};
Pit.FSharp.Collections.FSharpList1.prototype.IEnumerable1_GetEnumerator = function () {
    return this.IEnumerable1.GetEnumerator();
};
Pit.FSharp.Collections.FSharpList1.Empty = function () {
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return new Pit.FSharp.Collections.ListEnumerator1(this.x);
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return new Pit.FSharp.Collections.ListEnumerator1(this.x);
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    };
    this.IEnumerable = __createIEnumerable(this);
    this.IEnumerable1 = __createIEnumerable1(this);
};
Pit.FSharp.Collections.FSharpList1.Empty.prototype = new Pit.FSharp.Collections.FSharpList1();
Pit.FSharp.Collections.FSharpList1.Empty.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.FSharpList1.Cons = function (item1, item2) {
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return new Pit.FSharp.Collections.ListEnumerator1(this.x);
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return new Pit.FSharp.Collections.ListEnumerator1(this.x);
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    };
    this.IEnumerable = __createIEnumerable(this);
    this.IEnumerable1 = __createIEnumerable1(this);
    this.Item1 = item1;
    this.Item2 = item2;
};
Pit.FSharp.Collections.FSharpList1.Cons.prototype = new Pit.FSharp.Collections.FSharpList1();
Pit.FSharp.Collections.FSharpList1.Cons.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item1() == compareTo.get_Item1();
    result = result && this.get_Item2() == compareTo.get_Item2();
    return result;
};
Pit.FSharp.Collections.FSharpList1.Cons.prototype.get_Item1 = function () {
    return this.Item1;
};
Pit.FSharp.Collections.FSharpList1.Cons.prototype.get_Item2 = function () {
    return this.Item2;
};
Pit.FSharp.Collections.FSharpList1.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Collections.FSharpList1.prototype.get_Head = function () {
    return (function (thisObject) {
        if (thisObject instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
            throw Pit.InvalidOperationException.ctors[0]("Input list was empty")
        } else {
            var a = thisObject.get_Item1();
            return a;
        }
    })(this);
};
Pit.FSharp.Collections.FSharpList1.prototype.get_Tail = function () {
    return (function (thisObject) {
        if (thisObject instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
            throw Pit.InvalidOperationException.ctors[0]("Input list was empty")
        } else {
            var a = thisObject.get_Item2();
            return a;
        }
    })(this);
};
Pit.FSharp.Collections.FSharpList1.prototype.get_Length = function () {
    var lengthAcc = function (acc) {
        return function (xs) {
            return (function (thisObject) {
                if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = xs.get_Item2();
                    return lengthAcc((acc + 1))(t);
                } else {
                    return acc;
                }
            })(this);
        };
    };
    return lengthAcc(0)(this);
};
Pit.FSharp.Collections.FSharpList1.prototype.get_Item = function (index) {
    var nth = function (xs) {
        return function (n) {
            return (function (thisObject) {
                if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = xs.get_Item2();
                    var h = xs.get_Item1();
                    return (function (thisObject) {
                        if (n < 0) {
                            throw Pit.ArgumentException.ctors[0]("Index must be non-negative")
                        } else {
                            return (function (thisObject) {
                                if (n == 0) {
                                    return h;
                                } else {
                                    return nth(t)((n - 1));
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                } else {
                    throw Pit.ArgumentException.ctors[0]("Index out of bounds")
                }
            })(this);
        };
    };
    return nth(this)(index);
};
Pit.FSharp.Collections.FSharpList1.prototype.get_IsCons = function () {
    return this instanceof Pit.FSharp.Collections.FSharpList1.Cons;
};
Pit.FSharp.Collections.FSharpList1.prototype.get_IsEmpty = function () {
    return this instanceof Pit.FSharp.Collections.FSharpList1.Empty;
};
Pit.FSharp.Collections.FSharpList1.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Collections.ListEnumerator1 = (function () {
    function ListEnumerator1(s) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.s = s;
        this.curr = this.s;
        this.started = false;
    }
    ListEnumerator1.prototype.nonempty = function (x) {
        return (function (thisObject) {
            if (x instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                return false;
            } else {
                return true;
            }
        })(this);
    };
    ListEnumerator1.prototype.GetCurrent = function () {
        return (function (thisObject) {
            if (thisObject.started) {
                var matchValue = thisObject.curr;
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = matchValue.get_Item2();
                        var h = matchValue.get_Item1();
                        return h;
                    } else {
                        throw Pit.InvalidOperationException.ctors[0]("List already finished")
                    }
                })(thisObject);
            } else {
                throw Pit.InvalidOperationException.ctors[0]("List not started")
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    ListEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    ListEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return (function (thisObject) {
                    if (thisObject.x.started) {
                        var matchValue = thisObject.x.curr;
                        return (function (thisObject) {
                            if (matchValue instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                var t = matchValue.get_Item2();
                                var h = matchValue.get_Item1();
                                thisObject.x.curr = t;
                                return thisObject.x.nonempty(thisObject.x.curr);
                            } else {
                                return false;
                            }
                        })(thisObject);
                    } else {
                        thisObject.x.started = true;
                        return thisObject.x.nonempty(thisObject.x.curr);
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            IEnumerator.prototype.Reset = function () {
                this.x.started = false;
                return this.x.curr = this.x.s;
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    ListEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    ListEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    ListEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    ListEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    ListEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    ListEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return ListEnumerator1;
})();
Pit.Text.StringBuilder = (function () {
    function StringBuilder() {
        this.array = [];
    }
    StringBuilder.prototype.Append = function (s) {
        return this.array.push(s);
    };
    StringBuilder.prototype.ToString = function () {
        return this.array.join('');
    };
    return StringBuilder;
})();
Pit.FSharp.Control.BasicDisposable = (function () {
    function BasicDisposable(f) {
        this.IDisposable = __createIDisposable(this);
        this.f = f;
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return this.x.f();
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    BasicDisposable.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    BasicDisposable.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    return BasicDisposable;
})();
Pit.FSharp.Control.EventPublish22 = (function () {
    function EventPublish22(eventFuncs) {
        this.IObservable1 = __createIObservable1(this);
        this.IDelegateEvent1 = __createIDelegateEvent1(this);
        this.IEvent2 = __createIEvent2(this);
        this.eventFuncs = eventFuncs;
    }
    function __createIObservable1(thisObject) {
        var iobservable1 = (function () {
            function IObservable1(thisObject) {
                this.x = thisObject;
            }
            IObservable1.prototype.Subscribe = function (observer) {
                var h = function (sender, args) {
                    return observer.IObserver1_OnNext(args);
                };
                this.x.eventFuncs.push(h);
                return new Pit.FSharp.Control.BasicDisposable(function (_arg1) {
                    return this.x.eventFuncs.remove(h);
                });
            };
            return IObservable1;
        })();
        return new iobservable1(thisObject);
    }
    EventPublish22.prototype.__getIObservable1 = function () {
        return this.IObservable1;
    };
    EventPublish22.prototype.IObservable1_Subscribe = function (observer) {
        return this.IObservable1.Subscribe(observer);
    };
    function __createIDelegateEvent1(thisObject) {
        var idelegateevent1 = (function () {
            function IDelegateEvent1(thisObject) {
                this.x = thisObject;
            }
            IDelegateEvent1.prototype.AddHandler = function (d) {
                return this.x.eventFuncs.push(d);
            };
            IDelegateEvent1.prototype.RemoveHandler = function (d) {
                return this.x.eventFuncs.remove(d);
            };
            return IDelegateEvent1;
        })();
        return new idelegateevent1(thisObject);
    }
    EventPublish22.prototype.__getIDelegateEvent1 = function () {
        return this.IDelegateEvent1;
    };
    EventPublish22.prototype.IDelegateEvent1_AddHandler = function (d) {
        return this.IDelegateEvent1.AddHandler(d);
    };
    EventPublish22.prototype.IDelegateEvent1_RemoveHandler = function (d) {
        return this.IDelegateEvent1.RemoveHandler(d);
    };
    function __createIEvent2(thisObject) {
        var ievent2 = (function () {
            function IEvent2(thisObject) {
                this.x = thisObject;
            }
            return IEvent2;
        })();
        return new ievent2(thisObject);
    }
    EventPublish22.prototype.__getIEvent2 = function () {
        return this.IEvent2;
    };
    return EventPublish22;
})();
Pit.FSharp.Control.EventPublish1 = (function () {
    function EventPublish1(eventFuncs) {
        this.IObservable1 = __createIObservable1(this);
        this.IDelegateEvent1 = __createIDelegateEvent1(this);
        this.IEvent2 = __createIEvent2(this);
        this.eventFuncs = eventFuncs;
    }
    function __createIObservable1(thisObject) {
        var iobservable1 = (function () {
            function IObservable1(thisObject) {
                this.x = thisObject;
            }
            IObservable1.prototype.Subscribe = function (observer) {
                var h = function (sender, args) {
                    return observer.IObserver1_OnNext(args);
                };
                this.x.eventFuncs.push(h);
                return new Pit.FSharp.Control.BasicDisposable(function (_arg2) {
                    return this.x.eventFuncs.remove(h);
                });
            };
            return IObservable1;
        })();
        return new iobservable1(thisObject);
    }
    EventPublish1.prototype.__getIObservable1 = function () {
        return this.IObservable1;
    };
    EventPublish1.prototype.IObservable1_Subscribe = function (observer) {
        return this.IObservable1.Subscribe(observer);
    };
    function __createIDelegateEvent1(thisObject) {
        var idelegateevent1 = (function () {
            function IDelegateEvent1(thisObject) {
                this.x = thisObject;
            }
            IDelegateEvent1.prototype.AddHandler = function (d) {
                return this.x.eventFuncs.push(d);
            };
            IDelegateEvent1.prototype.RemoveHandler = function (d) {
                return this.x.eventFuncs.remove(d);
            };
            return IDelegateEvent1;
        })();
        return new idelegateevent1(thisObject);
    }
    EventPublish1.prototype.__getIDelegateEvent1 = function () {
        return this.IDelegateEvent1;
    };
    EventPublish1.prototype.IDelegateEvent1_AddHandler = function (d) {
        return this.IDelegateEvent1.AddHandler(d);
    };
    EventPublish1.prototype.IDelegateEvent1_RemoveHandler = function (d) {
        return this.IDelegateEvent1.RemoveHandler(d);
    };
    function __createIEvent2(thisObject) {
        var ievent2 = (function () {
            function IEvent2(thisObject) {
                this.x = thisObject;
            }
            return IEvent2;
        })();
        return new ievent2(thisObject);
    }
    EventPublish1.prototype.__getIEvent2 = function () {
        return this.IEvent2;
    };
    return EventPublish1;
})();
Pit.FSharp.Control.UIEventPublish1 = (function () {
    function UIEventPublish1(evtName, el) {
        this.IObservable1 = __createIObservable1(this);
        this.IDelegateEvent1 = __createIDelegateEvent1(this);
        this.IEvent2 = __createIEvent2(this);
        this.evtName = evtName;
        this.el = el;
    }
    function __createIObservable1(thisObject) {
        var iobservable1 = (function () {
            function IObservable1(thisObject) {
                this.x = thisObject;
            }
            IObservable1.prototype.Subscribe = function (observer) {
                var h = function (args) {
                    return observer.IObserver1_OnNext(args);
                };
                Pit.JsCommon.attachHandler(this.x.evtName)(this.x.el)(h);
                return new Pit.FSharp.Control.BasicDisposable(function (_arg3) {
                    return Pit.JsCommon.detachHandler(this.x.evtName)(this.x.el)(h);
                });
            };
            return IObservable1;
        })();
        return new iobservable1(thisObject);
    }
    UIEventPublish1.prototype.__getIObservable1 = function () {
        return this.IObservable1;
    };
    UIEventPublish1.prototype.IObservable1_Subscribe = function (observer) {
        return this.IObservable1.Subscribe(observer);
    };
    function __createIDelegateEvent1(thisObject) {
        var idelegateevent1 = (function () {
            function IDelegateEvent1(thisObject) {
                this.x = thisObject;
            }
            IDelegateEvent1.prototype.AddHandler = function (d) {
                return Pit.JsCommon.attachHandler(this.x.evtName)(this.x.el)(d);
            };
            IDelegateEvent1.prototype.RemoveHandler = function (d) {
                return Pit.JsCommon.detachHandler(this.x.evtName)(this.x.el)(d);
            };
            return IDelegateEvent1;
        })();
        return new idelegateevent1(thisObject);
    }
    UIEventPublish1.prototype.__getIDelegateEvent1 = function () {
        return this.IDelegateEvent1;
    };
    UIEventPublish1.prototype.IDelegateEvent1_AddHandler = function (d) {
        return this.IDelegateEvent1.AddHandler(d);
    };
    UIEventPublish1.prototype.IDelegateEvent1_RemoveHandler = function (d) {
        return this.IDelegateEvent1.RemoveHandler(d);
    };
    function __createIEvent2(thisObject) {
        var ievent2 = (function () {
            function IEvent2(thisObject) {
                this.x = thisObject;
            }
            return IEvent2;
        })();
        return new ievent2(thisObject);
    }
    UIEventPublish1.prototype.__getIEvent2 = function () {
        return this.IEvent2;
    };
    return UIEventPublish1;
})();
Pit.FSharp.Control.UIEvent1 = (function () {
    function UIEvent1(evtName, el) {
        this.evtName = evtName;
        this.el = el;
    }
    UIEvent1.prototype.get_Publish = function () {
        return new Pit.FSharp.Control.UIEventPublish1(this.evtName, this.el);
    };
    return UIEvent1;
})();
Pit.FSharp.Control.FSharpEvent2 = (function () {
    function FSharpEvent2() {
        this.eventFuncs = [];
    }
    FSharpEvent2.prototype.Trigger = function (sender, args) {
        for (var i = 0; i <= (this.eventFuncs.length - 1); i++) {
            (function (thisObject, i) {
                Pit.JsCommon.invokeEvent(thisObject.eventFuncs)(i)(sender)(args)
            })(this, i);
        }
    };
    FSharpEvent2.prototype.get_Publish = function () {
        return new Pit.FSharp.Control.EventPublish22(this.eventFuncs);
    };
    return FSharpEvent2;
})();
Pit.FSharp.Control.FSharpEvent1 = (function () {
    function FSharpEvent1() {
        this.eventFuncs = [];
    }
    FSharpEvent1.prototype.Trigger = function (args) {
        for (var i = 0; i <= (this.eventFuncs.length - 1); i++) {
            (function (thisObject, i) {
                Pit.JsCommon.invokeEvent(thisObject.eventFuncs)(i)()(args)
            })(this, i);
        };
    };
    FSharpEvent1.prototype.get_Publish = function () {
        return new Pit.FSharp.Control.EventPublish1(this.eventFuncs);
    };
    return FSharpEvent1;
})();
Pit.Dom.Html5.CanvasGradient = (function () {
    function CanvasGradient() {}
    return CanvasGradient;
})();
Pit.Dom.Html5.CanvasPattern = (function () {
    function CanvasPattern() {}
    return CanvasPattern;
})();
Pit.Dom.Event.click = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("click", el);
    return evt.get_Publish();
};
Pit.Dom.Event.change = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("change", el);
    return evt.get_Publish();
};
Pit.Dom.Event.blur = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("blur", el);
    return evt.get_Publish();
};
Pit.Dom.Event.dblclick = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("dblclick", el);
    return evt.get_Publish();
};
Pit.Dom.Event.error = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("error", el);
    return evt.get_Publish();
};
Pit.Dom.Event.focus = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("focus", el);
    return evt.get_Publish();
};
Pit.Dom.Event.keydown = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("keydown", el);
    return evt.get_Publish();
};
Pit.Dom.Event.keypress = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("keypress", el);
    return evt.get_Publish();
};
Pit.Dom.Event.keyup = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("keyup", el);
    return evt.get_Publish();
};
Pit.Dom.Event.load = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("load", el);
    return evt.get_Publish();
};
Pit.Dom.Event.mousedown = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("mousedown", el);
    return evt.get_Publish();
};
Pit.Dom.Event.mousemove = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("mousemove", el);
    return evt.get_Publish();
};
Pit.Dom.Event.mouseout = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("mouseout", el);
    return evt.get_Publish();
};
Pit.Dom.Event.mouseover = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("mouseover", el);
    return evt.get_Publish();
};
Pit.Dom.Event.mouseup = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("mouseup", el);
    return evt.get_Publish();
};
Pit.Dom.Event.resize = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("resize", el);
    return evt.get_Publish();
};
Pit.Dom.Event.select = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("select", el);
    return evt.get_Publish();
};
Pit.Dom.Event.unload = function (el) {
    var evt = new Pit.FSharp.Control.UIEvent1("unload", el);
    return evt.get_Publish();
};
registerNamespace("Pit.FSharp.Control");
Pit.FSharp.Control.ObservableModule.BasicObserver1 = (function () {
    function BasicObserver1(next, error, completed) {
        this.IObserver1 = __createIObserver1(this);
        this.next = next;
        this.error = error;
        this.completed = completed;
        this.stopped = false;
    }
    function __createIObserver1(thisObject) {
        var iobserver1 = (function () {
            function IObserver1(thisObject) {
                this.x = thisObject;
            }
            IObserver1.prototype.OnNext = function (args) {
                return this.x.next(args);
            };
            IObserver1.prototype.OnError = function (e) {
                return this.x.error(e);
            };
            IObserver1.prototype.OnCompleted = function () {
                return this.x.completed();
            };
            return IObserver1;
        })();
        return new iobserver1(thisObject);
    }
    BasicObserver1.prototype.__getIObserver1 = function () {
        return this.IObserver1;
    };
    BasicObserver1.prototype.IObserver1_OnNext = function (args) {
        return this.IObserver1.OnNext(args);
    };
    BasicObserver1.prototype.IObserver1_OnError = function (e) {
        return this.IObserver1.OnError(e);
    };
    BasicObserver1.prototype.IObserver1_OnCompleted = function () {
        return this.IObserver1.OnCompleted();
    };
    return BasicObserver1;
})();
Pit.FSharp.Control.ObservableModule.BasicObservable1 = (function () {
    function BasicObservable1(f) {
        this.IObservable1 = __createIObservable1(this);
        this.f = f;
    }
    function __createIObservable1(thisObject) {
        var iobservable1 = (function () {
            function IObservable1(thisObject) {
                this.x = thisObject;
            }
            IObservable1.prototype.Subscribe = function (observer) {
                return this.x.f(observer);
            };
            return IObservable1;
        })();
        return new iobservable1(thisObject);
    }
    BasicObservable1.prototype.__getIObservable1 = function () {
        return this.IObservable1;
    };
    BasicObservable1.prototype.IObservable1_Subscribe = function (observer) {
        return this.IObservable1.Subscribe(observer);
    };
    return BasicObservable1;
})();
Pit.FSharp.Control.ObservableModule.mkObservable = function (f) {
    return new Pit.FSharp.Control.ObservableModule.BasicObservable1(f);
};
Pit.FSharp.Control.ObservableModule.mkObserver = function (n) {
    return function (e) {
        return function (c) {
            return new Pit.FSharp.Control.ObservableModule.BasicObserver1(n, e, c);
        };
    };
};
Pit.FSharp.Control.ObservableModule.protect = function (f) {
    return function (succeed) {
        return function (fail) {
            var matchValue = (function (thisObject) {
                try {
                    return new Pit.FSharp.Core.FSharpChoice2.Choice1Of2(f());
                } catch(e) {
                    new Pit.FSharp.Core.FSharpChoice2.Choice2Of2(e)
                }
            })(this);
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2) {
                    var e = matchValue.get_Item();
                    return fail(e);
                } else {
                    var x = matchValue.get_Item();
                    return succeed(x);
                }
            })(this);
        };
    };
};
Pit.FSharp.Control.ObservableModule.Map = function (f) {
    return function (w) {
        return Pit.FSharp.Control.ObservableModule.mkObservable(function (observer) {
            var o = Pit.FSharp.Control.ObservableModule.mkObserver(function (v) {
                return Pit.FSharp.Control.ObservableModule.protect(function () {
                    return f(v);
                })(function (arg00) {
                    return observer.IObserver1_OnNext(arg00);
                })(function (arg00) {
                    return observer.IObserver1_OnError(arg00);
                });
            })(function (e) {
                return observer.IObserver1_OnError(e);
            })(function () {
                return observer.IObserver1_OnCompleted();
            });
            return w.IObservable1_Subscribe(o);
        });
    };
};
Pit.FSharp.Control.ObservableModule.Choose = function (f) {
    return function (w) {
        return Pit.FSharp.Control.ObservableModule.mkObservable(function (observer) {
            var o = Pit.FSharp.Control.ObservableModule.mkObserver(function (v) {
                return Pit.FSharp.Control.ObservableModule.protect(function () {
                    return f(v);
                })(function (_arg1) {
                    return (function (thisObject) {
                        if (_arg1 instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                            var v2 = _arg1.get_Value();
                            return observer.IObserver1_OnNext(v2);
                        } else {
                            return null;
                        }
                    })(this);
                })(function (arg00) {
                    return observer.IObserver1_OnError(arg00);
                });
            })(function (e) {
                return observer.IObserver1_OnError(e);
            })(function () {
                return observer.IObserver1_OnCompleted();
            });
            return w.IObservable1_Subscribe(o);
        });
    };
};
Pit.FSharp.Control.ObservableModule.Filter = function (f) {
    return function (w) {
        return Pit.FSharp.Control.ObservableModule.Choose(function (x) {
            return (function (thisObject) {
                if (f(x)) {
                    return new Pit.FSharp.Core.FSharpOption1.Some(x);
                } else {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                }
            })(this);
        })(w);
    };
};
Pit.FSharp.Control.ObservableModule.Partition = function (f) {
    return function (w) {
        return {
            Item1: Pit.FSharp.Control.ObservableModule.Filter(f)(w),
            Item2: Pit.FSharp.Control.ObservableModule.Filter(Pit.FSharp.Core.Operators.op_ComposeRight(f)(function (value) {
                return !value;
            }))(w)
        };
    };
};
Pit.FSharp.Control.ObservableModule.Scan = function (f) {
    return function (z) {
        return function (w) {
            return Pit.FSharp.Control.ObservableModule.mkObservable(function (observer) {
                var state = z;
                var o = Pit.FSharp.Control.ObservableModule.mkObserver(function (v) {
                    var s = state;
                    return Pit.FSharp.Control.ObservableModule.protect(function () {
                        return f(s)(v);
                    })(function (z1) {
                        state = z1;
                        return observer.IObserver1_OnNext(z1);
                    })(function (arg00) {
                        return observer.IObserver1_OnError(arg00);
                    });
                })(function (e) {
                    return observer.IObserver1_OnError(e);
                })(function () {
                    return observer.IObserver1_OnCompleted();
                });
                return w.IObservable1_Subscribe(o);
            });
        };
    };
};
Pit.FSharp.Control.ObservableModule.Add = function (f) {
    return function (w) {
        return Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(f);
    };
};
Pit.FSharp.Control.ObservableModule.Subscribe = function (f) {
    return function (w) {
        return Pit.FSharp.Control.CommonExtensions.SubscribeToObservable(w)(f);
    };
};
Pit.FSharp.Control.ObservableModule.Pairwise = function (w) {
    return Pit.FSharp.Control.ObservableModule.mkObservable(function (observer) {
        var lastArgs = new Pit.FSharp.Core.FSharpOption1.None();
        var o = Pit.FSharp.Control.ObservableModule.mkObserver(function (args2) {
            var matchValue = lastArgs;
            (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                    var args1 = matchValue.get_Value();
                    return observer.IObserver1_OnNext({
                        Item1: args1,
                        Item2: args2
                    });
                } else {
                    return null;
                }
            })(this);
            return lastArgs = new Pit.FSharp.Core.FSharpOption1.Some(args2);
        })(function (e) {
            return observer.IObserver1_OnError(e);
        })(function () {
            return observer.IObserver1_OnCompleted();
        });
        return w.IObservable1_Subscribe(o);
    });
};
Pit.FSharp.Control.ObservableModule.Merge = function (w1) {
    return function (w2) {
        return Pit.FSharp.Control.ObservableModule.mkObservable(function (observer) {
            var stopped = false;
            var completed1 = false;
            var completed2 = false;
            var obs1 = Pit.FSharp.Control.ObservableModule.mkObserver(function (v) {
                return (function (thisObject) {
                    if (!stopped) {
                        return observer.IObserver1_OnNext(v);
                    } else {
                        return null;
                    }
                })(this);
            })(function (e) {
                return (function (thisObject) {
                    if (!stopped) {
                        stopped = true;
                        return observer.IObserver1_OnError(e);
                    } else {
                        return null;
                    }
                })(this);
            })(function () {
                return (function (thisObject) {
                    if (!stopped) {
                        completed1 = true;
                        return (function (thisObject) {
                            if ((function (thisObject) {
                                if (completed1) {
                                    return completed2;
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                stopped = true;
                                return observer.IObserver1_OnCompleted();
                            } else {
                                return null;
                            }
                        })(thisObject);
                    } else {
                        return null;
                    }
                })(this);
            });
            var h1 = w1.IObservable1_Subscribe(obs1);
            var obs2 = Pit.FSharp.Control.ObservableModule.mkObserver(function (v) {
                return (function (thisObject) {
                    if (!stopped) {
                        return observer.IObserver1_OnNext(v);
                    } else {
                        return null;
                    }
                })(this);
            })(function (e) {
                return (function (thisObject) {
                    if (!stopped) {
                        stopped = true;
                        return observer.IObserver1_OnError(e);
                    } else {
                        return null;
                    }
                })(this);
            })(function () {
                return (function (thisObject) {
                    if (!stopped) {
                        completed2 = true;
                        return (function (thisObject) {
                            if ((function (thisObject) {
                                if (completed1) {
                                    return completed2;
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                stopped = true;
                                return observer.IObserver1_OnCompleted();
                            } else {
                                return null;
                            }
                        })(thisObject);
                    } else {
                        return null;
                    }
                })(this);
            });
            var h2 = w2.IObservable1_Subscribe(obs2);
            return new Pit.FSharp.Control.BasicDisposable(function () {
                h1.IDisposable_Dispose();
                return h2.IDisposable_Dispose();
            });
        });
    };
};
Pit.FSharp.Control.ObservableModule.Split = function (f) {
    return function (w) {
        return {
            Item1: Pit.FSharp.Control.ObservableModule.Choose(function (v) {
                var matchValue = f(v);
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpChoice2.Choice1Of2) {
                        var x = matchValue.get_Item();
                        return new Pit.FSharp.Core.FSharpOption1.Some(x);
                    } else {
                        return new Pit.FSharp.Core.FSharpOption1.None();
                    }
                })(this);
            })(w),
            Item2: Pit.FSharp.Control.ObservableModule.Choose(function (v) {
                var matchValue = f(v);
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2) {
                        var x = matchValue.get_Item();
                        return new Pit.FSharp.Core.FSharpOption1.Some(x);
                    } else {
                        return new Pit.FSharp.Core.FSharpOption1.None();
                    }
                })(this);
            })(w)
        };
    };
};
Pit.FSharp.Control.EventModule.Create = function () {
    var ev = new Pit.FSharp.Control.FSharpEvent1();
    return {
        Item1: function (arg00) {
            return ev.Trigger(arg00);
        },
        Item2: ev.get_Publish()
    };
};
Pit.FSharp.Control.EventModule.Map = function (f) {
    return function (w) {
        var ev = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (x) {
            return ev.Trigger(f(x));
        });
        return ev.get_Publish();
    };
};
Pit.FSharp.Control.EventModule.Filter = function (f) {
    return function (w) {
        var ev = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (x) {
            return (function (thisObject) {
                if (f(x)) {
                    return ev.Trigger(x);
                } else {
                    return null;
                }
            })(this);
        });
        return ev.get_Publish();
    };
};
Pit.FSharp.Control.EventModule.Partition = function (f) {
    return function (w) {
        var ev1 = new Pit.FSharp.Control.FSharpEvent1();
        var ev2 = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (x) {
            return (function (thisObject) {
                if (f(x)) {
                    return ev1.Trigger(x);
                } else {
                    return ev2.Trigger(x);
                }
            })(this);
        });
        return {
            Item1: ev1.get_Publish(),
            Item2: ev2.get_Publish()
        };
    };
};
Pit.FSharp.Control.EventModule.Choose = function (f) {
    return function (w) {
        var ev = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (x) {
            var matchValue = f(x);
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                    var r = matchValue.get_Value();
                    return ev.Trigger(r);
                } else {
                    return null;
                }
            })(this);
        });
        return ev.get_Publish();
    };
};
Pit.FSharp.Control.EventModule.Scan = function (f) {
    return function (z) {
        return function (w) {
            var state = z;
            var ev = new Pit.FSharp.Control.FSharpEvent1();
            Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (msg) {
                var z1 = state;
                var z12 = f(z1)(msg);
                state = z12;
                return ev.Trigger(z12);
            });
            return ev.get_Publish();
        };
    };
};
Pit.FSharp.Control.EventModule.Add = function (f) {
    return function (w) {
        return Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(f);
    };
};
Pit.FSharp.Control.EventModule.Pairwise = function (inp) {
    var ev = new Pit.FSharp.Control.FSharpEvent1();
    var lastArgs = new Pit.FSharp.Core.FSharpOption1.None();
    Pit.FSharp.Control.CommonExtensions.AddToObservable(inp)(function (args2) {
        var matchValue = lastArgs;
        (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var args1 = matchValue.get_Value();
                return ev.Trigger({
                    Item1: args1,
                    Item2: args2
                });
            } else {
                return null;
            }
        })(this);
        return lastArgs = new Pit.FSharp.Core.FSharpOption1.Some(args2);
    });
    return ev.get_Publish();
};
Pit.FSharp.Control.EventModule.Merge = function (w1) {
    return function (w2) {
        var ev = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w1)(function (x) {
            return ev.Trigger(x);
        });
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w2)(function (x) {
            return ev.Trigger(x);
        });
        return ev.get_Publish();
    };
};
Pit.FSharp.Control.EventModule.Split = function (f) {
    return function (w) {
        var ev1 = new Pit.FSharp.Control.FSharpEvent1();
        var ev2 = new Pit.FSharp.Control.FSharpEvent1();
        Pit.FSharp.Control.CommonExtensions.AddToObservable(w)(function (x) {
            var matchValue = f(x);
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2) {
                    var z = matchValue.get_Item();
                    return ev2.Trigger(z);
                } else {
                    var y = matchValue.get_Item();
                    return ev1.Trigger(y);
                }
            })(this);
        });
        return {
            Item1: ev1.get_Publish(),
            Item2: ev2.get_Publish()
        };
    };
};
registerNamespace("Pit.FSharp.Control");
Pit.FSharp.Control.CommonExtensions.BasicObserver1 = (function () {
    function BasicObserver1(f) {
        this.IObserver1 = __createIObserver1(this);
        this.f = f;
    }
    function __createIObserver1(thisObject) {
        var iobserver1 = (function () {
            function IObserver1(thisObject) {
                this.x = thisObject;
            }
            IObserver1.prototype.OnNext = function (args) {
                return this.x.f(args);
            };
            IObserver1.prototype.OnError = function (e) {
                return null;
            };
            IObserver1.prototype.OnCompleted = function () {
                return null;
            };
            return IObserver1;
        })();
        return new iobserver1(thisObject);
    }
    BasicObserver1.prototype.__getIObserver1 = function () {
        return this.IObserver1;
    };
    BasicObserver1.prototype.IObserver1_OnNext = function (args) {
        return this.IObserver1.OnNext(args);
    };
    BasicObserver1.prototype.IObserver1_OnError = function (e) {
        return this.IObserver1.OnError(e);
    };
    BasicObserver1.prototype.IObserver1_OnCompleted = function () {
        return this.IObserver1.OnCompleted();
    };
    return BasicObserver1;
})();
Pit.FSharp.Control.CommonExtensions.AddToObservable = function (x) {
    return function (f) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Control.CommonExtensions.SubscribeToObservable(x)(f))(function (value) {
            return Pit.FSharp.Core.Operators.Ignore(value);
        });
    };
};
Pit.FSharp.Control.CommonExtensions.SubscribeToObservable = function (x) {
    return function (f) {
        return x.IObservable1_Subscribe(new Pit.FSharp.Control.CommonExtensions.BasicObserver1(f));
    };
};
Pit.FSharp.Core.StringModule.emptyIfNull = function (str) {
    return (function (thisObject) {
        if (str == null) {
            return '';
        } else {
            return str;
        }
    })(this);
};
Pit.FSharp.Core.StringModule.Concat = function (sep) {
    return function (strings) {
        var strArray = Pit.FSharp.Collections.SeqModule.ToArray(strings);
        var js = strArray;
        return js.join();
    };
};
Pit.FSharp.Core.StringModule.Iterate = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        for (var i = 0; i <= (str1.get_Length() - 1); i++) {
            (function (thisObject, i) {
                f(Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetString(str1)(i))
            })(this, i);
        };
    };
};
Pit.FSharp.Core.StringModule.IterateIndexed = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        for (var i = 0; i <= (str1.get_Length() - 1); i++) {
            (function (thisObject, i) {
                f(i)(Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetString(str1)(i))
            })(this, i);
        };
    };
};
Pit.FSharp.Core.StringModule.Map = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var res = new Pit.Text.StringBuilder();
        Pit.FSharp.Core.Operators.op_PipeRight(str1)(function (str12) {
            return Pit.FSharp.Core.StringModule.Iterate(function (c) {
                return Pit.FSharp.Core.Operators.op_PipeRight(res.Append(f(c)))(function (value) {
                    return Pit.FSharp.Core.Operators.Ignore(value);
                });
            })(str12);
        });
        return res.ToString();
    };
};
Pit.FSharp.Core.StringModule.MapIndexed = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var res = new Pit.Text.StringBuilder();
        Pit.FSharp.Core.Operators.op_PipeRight(str1)(function (str12) {
            return Pit.FSharp.Core.StringModule.IterateIndexed(function (i) {
                return function (c) {
                    return Pit.FSharp.Core.Operators.op_PipeRight(res.Append(f(i)(c)))(function (value) {
                        return Pit.FSharp.Core.Operators.Ignore(value);
                    });
                };
            })(str12);
        });
        return res.ToString();
    };
};
Pit.FSharp.Core.StringModule.Collect = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var res = new Pit.Text.StringBuilder();
        Pit.FSharp.Core.Operators.op_PipeRight(str1)(function (str12) {
            return Pit.FSharp.Core.StringModule.Iterate(function (c) {
                return Pit.FSharp.Core.Operators.op_PipeRight(res.Append(f(c)))(function (value) {
                    return Pit.FSharp.Core.Operators.Ignore(value);
                });
            })(str12);
        });
        return res.ToString();
    };
};
Pit.FSharp.Core.StringModule.Initialize = function (count) {
    return function (initializer) {
        (function (thisObject) {
            if (count < 0) {
                throw Pit.InvalidOperationException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        var res = new Pit.Text.StringBuilder();
        for (var i = 0; i <= (count - 1); i++) {
            (function (thisObject, i) {
                Pit.FSharp.Core.Operators.op_PipeRight(res.Append(initializer(i)))(function (value) {
                    return Pit.FSharp.Core.Operators.Ignore(value);
                })
            })(this, i);
        };
        return res.ToString();
    };
};
Pit.FSharp.Core.StringModule.Replicate = function (count) {
    return function (str) {
        (function (thisObject) {
            if (count < 0) {
                throw Pit.InvalidOperationException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var res = new Pit.Text.StringBuilder();
        for (var i = 0; i <= (count - 1); i++) {
            (function (thisObject, i) {
                Pit.FSharp.Core.Operators.op_PipeRight(res.Append(str1))(function (value) {
                    return Pit.FSharp.Core.Operators.Ignore(value);
                })
            })(this, i);
        };
        return res.ToString();
    };
};
Pit.FSharp.Core.StringModule.ForAll = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var check = function (i) {
            return (function (thisObject) {
                if (i >= str1.get_Length()) {
                    return true;
                } else {
                    return (function (thisObject) {
                        if (f(Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetString(str1)(i))) {
                            return check((i + 1));
                        } else {
                            return false;
                        }
                    })(thisObject);
                }
            })(this);
        };
        return check(0);
    };
};
Pit.FSharp.Core.StringModule.Exists = function (f) {
    return function (str) {
        var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
        var check = function (i) {
            return (function (thisObject) {
                if (i < str1.get_Length()) {
                    return (function (thisObject) {
                        if (f(Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetString(str1)(i))) {
                            return true;
                        } else {
                            return check((i + 1));
                        }
                    })(thisObject);
                } else {
                    return false;
                }
            })(this);
        };
        return check(0);
    };
};
Pit.FSharp.Core.StringModule.Length = function (str) {
    var str1 = Pit.FSharp.Core.StringModule.emptyIfNull(str);
    return str1.get_Length();
};
registerNamespace("Pit.FSharp.Collections.SeqModule.EmptyEnumerable1");
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1 = function () {
    this.Tag = 0;
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.prototype.__getIEnumerable = function () {
    return this.IEnumerable;
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.prototype.IEnumerable_GetEnumerator = function () {
    return this.IEnumerable.GetEnumerator();
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.prototype.__getIEnumerable1 = function () {
    return this.IEnumerable1;
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.prototype.IEnumerable1_GetEnumerator = function () {
    return this.IEnumerable1.GetEnumerator();
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.EmptyEnumerable = function () {
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.IEnumerator.Empty();
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.IEnumerator.Empty();
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    };
    this.IEnumerable = __createIEnumerable(this);
    this.IEnumerable1 = __createIEnumerable1(this);
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.EmptyEnumerable.prototype = new Pit.FSharp.Collections.SeqModule.EmptyEnumerable1();
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.EmptyEnumerable.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.SeqModule.EmptyEnumerable1.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Collections.SeqModule.GroupBy = function (f) {
    return function (source) {
        var arr = [];
        var array = arr;
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                while (e.IEnumerator_MoveNext()) {
                    var item = e.IEnumerator1_get_Current();
                    var key = f(item);
                    var matchValue = Pit.FSharp.Core.Operators.op_PipeRight(arr)(function (array1) {
                        return Pit.FSharp.Collections.ArrayModule.TryFind(function (tupledArg) {
                            var k = tupledArg.Item1;
                            var x = tupledArg.Item2;
                            return key == k;
                        })(array1);
                    });
                    (function (thisObject) {
                        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                            var tuple = {
                                Item1: key,
                                Item2: [item]
                            };
                            return array.push(tuple);
                        } else {
                            var result = matchValue.get_Value();
                            var coll = Pit.FSharp.Core.Operators.Snd(result);
                            return coll.push(item);
                        }
                    })(thisObject);
                };
                return arr;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.CountBy = function (f) {
    return function (source) {
        var arr = [];
        var array = arr;
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                while (e.IEnumerator_MoveNext()) {
                    var key = f(e.IEnumerator1_get_Current());
                    var matchValue = Pit.FSharp.Core.Operators.op_PipeRight(arr)(function (array1) {
                        return Pit.FSharp.Collections.ArrayModule.TryFindIndex(function (tupledArg) {
                            var k = tupledArg.Item1;
                            var x = tupledArg.Item2;
                            return key == k;
                        })(array1);
                    });
                    (function (thisObject) {
                        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                            return array.push({
                                Item1: key,
                                Item2: 1
                            });
                        } else {
                            var i = matchValue.get_Value();
                            var t = Pit.FSharp.Core.Operators.Snd(arr[i]);
                            return arr[i] = {
                                Item1: key,
                                Item2: (t + 1)
                            };
                        }
                    })(thisObject);
                };
                return arr;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Distinct = function (source) {
    var arr = [];
    var array = arr;
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            while (e.IEnumerator_MoveNext()) {
                var item = e.IEnumerator1_get_Current();
                var matchValue = Pit.FSharp.Core.Operators.op_PipeRight(arr)(function (array1) {
                    return Pit.FSharp.Collections.ArrayModule.Exists(function (k) {
                        return item == k;
                    })(array1);
                });
                (function (thisObject) {
                    if (matchValue) {
                        return null;
                    } else {
                        return array.push(item);
                    }
                })(thisObject);
            };
            return arr;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.DistinctBy = function (f) {
    return function (source) {
        var keys = [];
        var keysArr = keys;
        var values = [];
        var valuesArr = values;
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                while (e.IEnumerator_MoveNext()) {
                    var item = e.IEnumerator1_get_Current();
                    var key = f(item);
                    var matchValue = Pit.FSharp.Core.Operators.op_PipeRight(keys)(function (array) {
                        return Pit.FSharp.Collections.ArrayModule.Exists(function (k) {
                            return item == k;
                        })(array);
                    });
                    (function (thisObject) {
                        if (matchValue) {
                            return null;
                        } else {
                            keysArr.push(key);
                            return valuesArr.push(item);
                        }
                    })(thisObject);
                };
                return values;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Sort = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    return Pit.FSharp.Collections.SeqModule.mkDelayedSeq(function () {
        var array = Pit.FSharp.Core.Operators.op_PipeRight(source)(function (source1) {
            return Pit.FSharp.Collections.SeqModule.ToArray(source1);
        });
        Pit.FSharp.Collections.ArrayModule.SortInPlace(array);
        return array;
    });
};
Pit.FSharp.Collections.SeqModule.SortBy = function (keyf) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Collections.SeqModule.mkDelayedSeq(function () {
            var array = Pit.FSharp.Core.Operators.op_PipeRight(source)(function (source1) {
                return Pit.FSharp.Collections.SeqModule.ToArray(source1);
            });
            Pit.FSharp.Collections.ArrayModule.SortInPlaceBy(keyf)(array);
            return array;
        });
    };
};
Pit.FSharp.Collections.SeqModule.Windowed = function (windowSize) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        (function (thisObject) {
            if (windowSize <= 0) {
                throw Pit.InvalidOperationException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
            var arr = Pit.FSharp.Collections.ArrayModule.ZeroCreate(windowSize);
            var r = (windowSize - 1);
            var i = 0;
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (e) {
                return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                    return e.IEnumerator_MoveNext();
                })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    arr[i] = e.IEnumerator1_get_Current();
                    i = ((i + 1) % windowSize);
                    return (function (thisObject) {
                        if (r == 0) {
                            return Pit.FSharp.Collections.SeqModule.Singleton(Pit.FSharp.Collections.ArrayModule.Initialize(windowSize)(function (j) {
                                return arr[((i + j) % windowSize)];
                            }));
                        } else {
                            r = (r - 1);
                            return Pit.FSharp.Collections.SeqModule.Empty();
                        }
                    })(this);
                }));
            });
        }));
    };
};
Pit.FSharp.Collections.SeqModule.ReadOnly = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return source.IEnumerable1_GetEnumerator();
    });
};
Pit.FSharp.Collections.SeqModule.checkNonNull = function (argName) {
    return function (arg) {
        var matchValue = arg;
        return (function (thisObject) {
            if (matchValue == null) {
                return Pit.FSharp.Core.Operators.NullArg(argName);
            } else {
                return null;
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.mkSeq = function (f) {
    return new Pit.FSharp.Core.Operators.mkSeq1(f);
};
Pit.FSharp.Collections.SeqModule.mkDelayedSeq = function (f) {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return f().IEnumerable1_GetEnumerator();
    });
};
Pit.FSharp.Collections.SeqModule.mkUnfoldSeq = function (f) {
    return function (x) {
        return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
            return Pit.FSharp.Collections.IEnumerator.unfold(f)(x);
        });
    };
};
Pit.FSharp.Collections.SeqModule.Delay = function (f) {
    return Pit.FSharp.Collections.SeqModule.mkDelayedSeq(f);
};
Pit.FSharp.Collections.SeqModule.Unfold = function (f) {
    return function (x) {
        return Pit.FSharp.Collections.SeqModule.mkUnfoldSeq(f)(x);
    };
};
Pit.FSharp.Collections.SeqModule.Empty = function () {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return Pit.FSharp.Collections.IEnumerator.Empty();
    });
};
Pit.FSharp.Collections.SeqModule.InitializeInfinite = function (f) {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return Pit.FSharp.Collections.IEnumerator.upto(new Pit.FSharp.Core.FSharpOption1.None())(f);
    });
};
Pit.FSharp.Collections.SeqModule.Initialize = function (count) {
    return function (f) {
        (function (thisObject) {
            if (count < 0) {
                throw Pit.InvalidOperationException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
            return Pit.FSharp.Collections.IEnumerator.upto(new Pit.FSharp.Core.FSharpOption1.Some((count - 1)))(f);
        });
    };
};
Pit.FSharp.Collections.SeqModule.OfArray = function (arr) {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return Pit.FSharp.Collections.IEnumerator.ofArray(arr);
    });
};
Pit.FSharp.Collections.SeqModule.Iterate = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                while (e.IEnumerator_MoveNext()) {
                    f(e.IEnumerator1_get_Current())
                }
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Get = function (i) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                return Pit.FSharp.Collections.IEnumerator.nth(i)(e);
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.IterateIndexed = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var i = 0;
                while (e.IEnumerator_MoveNext()) {
                    f(i)(e.IEnumerator1_get_Current());
                    i = (i + 1);
                };
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Exists = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var state = false;
                while ((function (thisObject) {
                    if (!state) {
                        return e.IEnumerator_MoveNext();
                    } else {
                        return false;
                    }
                })(thisObject)) {
                    state = f(e.IEnumerator1_get_Current());
                };
                return state;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.ForAll = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var state = true;
                while ((function (thisObject) {
                    if (state) {
                        return e.IEnumerator_MoveNext();
                    } else {
                        return false;
                    }
                })(thisObject)) {
                    state = f(e.IEnumerator1_get_Current());
                };
                return state;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Iterate2 = function (f) {
    return function (source1) {
        return function (source2) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            var e1 = source1.IEnumerable1_GetEnumerator();
            return (function (thisObject) {
                try {
                    var e2 = source2.IEnumerable1_GetEnumerator();
                    return (function (thisObject) {
                        try {
                            while ((function (thisObject) {
                                if (e1.IEnumerator_MoveNext()) {
                                    return e2.IEnumerator_MoveNext();
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                f(e1.IEnumerator1_get_Current())(e2.IEnumerator1_get_Current())
                            }
                        } finally {
                            (function (thisObject) {
                                if (e2.containsInterface("__getIDisposable")) {
                                    return e2.IDisposable_Dispose();
                                } else {
                                    return null;
                                }
                            })(thisObject)
                        }
                    })(thisObject);
                } finally {
                    (function (thisObject) {
                        if (e1.containsInterface("__getIDisposable")) {
                            return e1.IDisposable_Dispose();
                        } else {
                            return null;
                        }
                    })(thisObject)
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SeqModule.revamp = function (f) {
    return function (ie) {
        return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
            return f(ie.IEnumerable1_GetEnumerator());
        });
    };
};
Pit.FSharp.Collections.SeqModule.revamp2 = function (f) {
    return function (ie1) {
        return function (source2) {
            return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
                return f(ie1.IEnumerable1_GetEnumerator())(source2.IEnumerable1_GetEnumerator());
            });
        };
    };
};
Pit.FSharp.Collections.SeqModule.Filter = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Collections.SeqModule.revamp(function (e) {
            return Pit.FSharp.Collections.IEnumerator.filter(f)(e);
        })(source);
    };
};
Pit.FSharp.Collections.SeqModule.Map = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Collections.SeqModule.revamp(function (e) {
            return Pit.FSharp.Collections.IEnumerator.map(f)(e);
        })(source);
    };
};
Pit.FSharp.Collections.SeqModule.MapIndexed = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Collections.SeqModule.revamp(function (e) {
            return Pit.FSharp.Collections.IEnumerator.mapi(f)(e);
        })(source);
    };
};
Pit.FSharp.Collections.SeqModule.Map2 = function (f) {
    return function (source1) {
        return function (source2) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            return Pit.FSharp.Collections.SeqModule.revamp2(function (e1) {
                return function (e2) {
                    return Pit.FSharp.Collections.IEnumerator.map2(f)(e1)(e2);
                };
            })(source1)(source2);
        };
    };
};
Pit.FSharp.Collections.SeqModule.Choose = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Collections.SeqModule.revamp(function (e) {
            return Pit.FSharp.Collections.IEnumerator.choose(f)(e);
        })(source);
    };
};
Pit.FSharp.Collections.SeqModule.Zip = function (source1) {
    return function (source2) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
        Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
        return Pit.FSharp.Collections.SeqModule.Map2(function (x) {
            return function (y) {
                return {
                    Item1: x,
                    Item2: y
                };
            };
        })(source1)(source2);
    };
};
Pit.FSharp.Collections.SeqModule.Zip3 = function (source1) {
    return function (source2) {
        return function (source3) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source3")(source3);
            return Pit.FSharp.Collections.SeqModule.Map2(function (x) {
                return function (tupledArg) {
                    var y = tupledArg.Item1;
                    var z = tupledArg.Item2;
                    return {
                        Item1: x,
                        Item2: y,
                        Item3: z
                    };
                };
            })(source1)(Pit.FSharp.Collections.SeqModule.Zip(source2)(source3));
        };
    };
};
Pit.FSharp.Collections.SeqModule.TryPick = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var res = new Pit.FSharp.Core.FSharpOption1.None();
                while ((function (thisObject) {
                    if (Pit.FSharp.Core.OptionModule.IsNone(res)) {
                        return e.IEnumerator_MoveNext();
                    } else {
                        return false;
                    }
                })(thisObject)) {
                    res = f(e.IEnumerator1_get_Current());
                };
                return res;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Pick = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var matchValue = Pit.FSharp.Collections.SeqModule.TryPick(f)(source);
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = matchValue.get_Value();
                return x;
            } else {
                throw Pit.InvalidOperationException.ctors[0]("Key not found")
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.TryFind = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var res = new Pit.FSharp.Core.FSharpOption1.None();
                while ((function (thisObject) {
                    if (Pit.FSharp.Core.OptionModule.IsNone(res)) {
                        return e.IEnumerator_MoveNext();
                    } else {
                        return false;
                    }
                })(thisObject)) {
                    var c = e.IEnumerator1_get_Current();
                    (function (thisObject) {
                        if (f(c)) {
                            return res = new Pit.FSharp.Core.FSharpOption1.Some(c);
                        } else {
                            return null;
                        }
                    })(thisObject);
                };
                return res;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Find = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var matchValue = Pit.FSharp.Collections.SeqModule.TryFind(f)(source);
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = matchValue.get_Value();
                return x;
            } else {
                throw Pit.InvalidOperationException.ctors[0]("Key not found")
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.IsEmpty = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var ie = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            return !ie.IEnumerator_MoveNext();
        } finally {
            (function (thisObject) {
                if (ie.containsInterface("__getIDisposable")) {
                    return ie.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.Concat = function (sources) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("sources")(sources);
    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkConcatSeq(sources);
};
Pit.FSharp.Collections.SeqModule.Length = function (source) {
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var state = 0;
            while (e.IEnumerator_MoveNext()) {
                state = (state + 1);
            };
            return state;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.Fold = function (f) {
    return function (x) {
        return function (source) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
            var e = source.IEnumerable1_GetEnumerator();
            return (function (thisObject) {
                try {
                    var state = x;
                    while (e.IEnumerator_MoveNext()) {
                        state = f(state)(e.IEnumerator1_get_Current());
                    };
                    return state;
                } finally {
                    (function (thisObject) {
                        if (e.containsInterface("__getIDisposable")) {
                            return e.IDisposable_Dispose();
                        } else {
                            return null;
                        }
                    })(thisObject)
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SeqModule.Reduce = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                (function (thisObject) {
                    if (!e.IEnumerator_MoveNext()) {
                        throw Pit.InvalidOperationException.ctors[0]("Input sequence is empty")
                    } else {
                        return null;
                    }
                })(thisObject);
                var state = e.IEnumerator1_get_Current();
                while (e.IEnumerator_MoveNext()) {
                    state = f(state)(e.IEnumerator1_get_Current());
                };
                return state;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.fromGenerator = function (f) {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return Pit.FSharp.Collections.Generator.EnumerateFromGenerator(f());
    });
};
Pit.FSharp.Collections.SeqModule.toGenerator = function (ie) {
    return Pit.FSharp.Collections.Generator.GenerateFromEnumerator(ie.IEnumerable1_GetEnumerator());
};
Pit.FSharp.Collections.SeqModule.Append = function (source1) {
    return function (source2) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
        Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
        return Pit.FSharp.Collections.SeqModule.fromGenerator(function () {
            return Pit.FSharp.Collections.Generator.bindG(Pit.FSharp.Collections.SeqModule.toGenerator(source1))(function () {
                return Pit.FSharp.Collections.SeqModule.toGenerator(source2);
            });
        });
    };
};
Pit.FSharp.Collections.SeqModule.Collect = function (f) {
    return function (sources) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Collections.SeqModule.Map(f)(sources))(function (sources1) {
            return Pit.FSharp.Collections.SeqModule.Concat(sources1);
        });
    };
};
Pit.FSharp.Collections.SeqModule.CompareWith = function (f) {
    return function (source1) {
        return function (source2) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            var e1 = source1.IEnumerable1_GetEnumerator();
            return (function (thisObject) {
                try {
                    var e2 = source2.IEnumerable1_GetEnumerator();
                    return (function (thisObject) {
                        try {
                            var go = function () {
                                var e1ok = e1.IEnumerator_MoveNext();
                                var e2ok = e2.IEnumerator_MoveNext();
                                var c = (function (thisObject) {
                                    if (e1ok == e2ok) {
                                        return 0;
                                    } else {
                                        return (function (thisObject) {
                                            if (e1ok) {
                                                return 1;
                                            } else {
                                                return -1;
                                            }
                                        })(thisObject);
                                    }
                                })(thisObject);
                                return (function (thisObject) {
                                    if (c != 0) {
                                        return c;
                                    } else {
                                        return (function (thisObject) {
                                            if ((function (thisObject) {
                                                if (!e1ok) {
                                                    return true;
                                                } else {
                                                    return !e2ok;
                                                }
                                            })(thisObject)) {
                                                return 0;
                                            } else {
                                                var c1 = f(e1.IEnumerator1_get_Current())(e2.IEnumerator1_get_Current());
                                                return (function (thisObject) {
                                                    if (c1 != 0) {
                                                        return c1;
                                                    } else {
                                                        return go();
                                                    }
                                                })(thisObject);
                                            }
                                        })(thisObject);
                                    }
                                })(thisObject);
                            };
                            return go();
                        } finally {
                            (function (thisObject) {
                                if (e2.containsInterface("__getIDisposable")) {
                                    return e2.IDisposable_Dispose();
                                } else {
                                    return null;
                                }
                            })(thisObject)
                        }
                    })(thisObject);
                } finally {
                    (function (thisObject) {
                        if (e1.containsInterface("__getIDisposable")) {
                            return e1.IDisposable_Dispose();
                        } else {
                            return null;
                        }
                    })(thisObject)
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SeqModule.Singleton = function (x) {
    return Pit.FSharp.Collections.SeqModule.mkSeq(function () {
        return Pit.FSharp.Collections.IEnumerator.Singleton(x);
    });
};
Pit.FSharp.Collections.SeqModule.Truncate = function (n) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
            var i = 0;
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (ie) {
                return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                    return (function (thisObject) {
                        if (i < n) {
                            return ie.IEnumerator_MoveNext();
                        } else {
                            return false;
                        }
                    })(this);
                })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    i = (i + 1);
                    return Pit.FSharp.Collections.SeqModule.Singleton(ie.IEnumerator1_get_Current());
                }));
            });
        }));
    };
};
Pit.FSharp.Collections.SeqModule.Take = function (count) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        (function (thisObject) {
            if (count < 0) {
                throw Pit.InvalidOperationException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        return (function (thisObject) {
            if (count == 0) {
                return Pit.FSharp.Collections.SeqModule.Empty();
            } else {
                return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (e) {
                        return Pit.FSharp.Collections.SeqModule.Collect(function (matchValue) {
                            return Pit.FSharp.Collections.SeqModule.Append((function (thisObject) {
                                if (!e.IEnumerator_MoveNext()) {
                                    throw Pit.InvalidOperationException.ctors[0]("Not enough elements");
                                    return Pit.FSharp.Collections.SeqModule.Empty();
                                } else {
                                    return Pit.FSharp.Collections.SeqModule.Empty();
                                }
                            })(thisObject))(Pit.FSharp.Collections.SeqModule.Delay(function () {
                                return Pit.FSharp.Collections.SeqModule.Singleton(e.IEnumerator1_get_Current());
                            }));
                        })(Pit.FSharp.Core.Operators.op_Range(0)((count - 1)));
                    });
                }));
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.TakeWhile = function (p) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (e) {
                var latest = null;
                return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                    return (function (thisObject) {
                        if (e.IEnumerator_MoveNext()) {
                            latest = e.IEnumerator1_get_Current();
                            return p(latest);
                        } else {
                            return false;
                        }
                    })(this);
                })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    return Pit.FSharp.Collections.SeqModule.Singleton(latest);
                }));
            });
        }));
    };
};
Pit.FSharp.Collections.SeqModule.Skip = function (count) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (e) {
                return Pit.FSharp.Collections.SeqModule.Append(Pit.FSharp.Collections.SeqModule.Collect(function (matchValue) {
                    return (function (thisObject) {
                        if (!e.IEnumerator_MoveNext()) {
                            Pit.FSharp.Core.Operators.op_PipeLeft(function (exn) {
                                throw exn;
                            })(Pit.InvalidOperationException.ctors[0]("Not enough elements"));
                            return Pit.FSharp.Collections.SeqModule.Empty();
                        } else {
                            return Pit.FSharp.Collections.SeqModule.Empty();
                        }
                    })(this);
                })(Pit.FSharp.Core.Operators.op_Range(1)(count)))(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                        return e.IEnumerator_MoveNext();
                    })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                        return Pit.FSharp.Collections.SeqModule.Singleton(e.IEnumerator1_get_Current());
                    }));
                }));
            });
        }));
    };
};
Pit.FSharp.Collections.SeqModule.SkipWhile = function (p) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (e) {
                var latest = null;
                var ok = false;
                return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                    return e.IEnumerator_MoveNext();
                })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    latest = e.IEnumerator1_get_Current();
                    return (function (thisObject) {
                        if ((function (thisObject) {
                            if (ok) {
                                return true;
                            } else {
                                return !p(latest);
                            }
                        })(thisObject)) {
                            ok = true;
                            return Pit.FSharp.Collections.SeqModule.Singleton(latest);
                        } else {
                            return Pit.FSharp.Collections.SeqModule.Empty();
                        }
                    })(this);
                }));
            });
        }));
    };
};
Pit.FSharp.Collections.SeqModule.Pairwise = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
        return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (ie) {
            return (function (thisObject) {
                if (ie.IEnumerator_MoveNext()) {
                    var iref = ie.IEnumerator1_get_Current();
                    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                        return ie.IEnumerator_MoveNext();
                    })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                        var j = ie.IEnumerator1_get_Current();
                        return Pit.FSharp.Collections.SeqModule.Append(Pit.FSharp.Collections.SeqModule.Singleton({
                            Item1: iref,
                            Item2: j
                        }))(Pit.FSharp.Collections.SeqModule.Delay(function () {
                            iref = j;
                            return Pit.FSharp.Collections.SeqModule.Empty();
                        }));
                    }));
                } else {
                    return Pit.FSharp.Collections.SeqModule.Empty();
                }
            })(this);
        });
    }));
};
Pit.FSharp.Collections.SeqModule.Scan = function (f) {
    return function (z) {
        return function (source) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
            return Pit.FSharp.Core.Operators.CreateSequence(Pit.FSharp.Collections.SeqModule.Delay(function () {
                var zref = z;
                return Pit.FSharp.Collections.SeqModule.Append(Pit.FSharp.Collections.SeqModule.Singleton(zref))(Pit.FSharp.Collections.SeqModule.Delay(function () {
                    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing(source.IEnumerable1_GetEnumerator())(function (ie) {
                        return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile(function () {
                            return ie.IEnumerator_MoveNext();
                        })(Pit.FSharp.Collections.SeqModule.Delay(function () {
                            zref = f(zref)(ie.IEnumerator1_get_Current());
                            return Pit.FSharp.Collections.SeqModule.Singleton(zref);
                        }));
                    });
                }));
            }));
        };
    };
};
Pit.FSharp.Collections.SeqModule.FindIndex = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var ie = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var loop = function (i) {
                    return (function (thisObject) {
                        if (ie.IEnumerator_MoveNext()) {
                            return (function (thisObject) {
                                if (f(ie.IEnumerator1_get_Current())) {
                                    return i;
                                } else {
                                    return loop((i + 1));
                                }
                            })(thisObject);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Key not found")
                        }
                    })(thisObject);
                };
                return loop(0);
            } finally {
                (function (thisObject) {
                    if (ie.containsInterface("__getIDisposable")) {
                        return ie.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.TryFindIndex = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var ie = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var loop = function (i) {
                    return (function (thisObject) {
                        if (ie.IEnumerator_MoveNext()) {
                            return (function (thisObject) {
                                if (f(ie.IEnumerator1_get_Current())) {
                                    return new Pit.FSharp.Core.FSharpOption1.Some(i);
                                } else {
                                    return loop((i + 1));
                                }
                            })(thisObject);
                        } else {
                            return new Pit.FSharp.Core.FSharpOption1.None();
                        }
                    })(thisObject);
                };
                return loop(0);
            } finally {
                (function (thisObject) {
                    if (ie.containsInterface("__getIDisposable")) {
                        return ie.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.ToList = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var res = new Pit.FSharp.Collections.FSharpList1.Empty();
            while (e.IEnumerator_MoveNext()) {
                res = new Pit.FSharp.Collections.FSharpList1.Cons(e.IEnumerator1_get_Current(), res);
            };
            return Pit.FSharp.Collections.ListModule.Reverse(res);
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.OfList = function (list) {
    return list;
};
Pit.FSharp.Collections.SeqModule.ToArray = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var res = [];
            var i = 0;
            while (e.IEnumerator_MoveNext()) {
                res[i] = e.IEnumerator1_get_Current();
                i = (i + 1);
            };
            return res;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.Sum = function (source) {
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var acc = 0;
            while (e.IEnumerator_MoveNext()) {
                acc = (acc + e.IEnumerator1_get_Current());
            };
            return acc;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.SumBy = function (f) {
    return function (source) {
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var acc = 0;
                while (e.IEnumerator_MoveNext()) {
                    acc = (acc + f(e.IEnumerator1_get_Current()));
                };
                return acc;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Average = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var acc = 0;
            var count = 0;
            while (e.IEnumerator_MoveNext()) {
                acc = (acc + e.IEnumerator1_get_Current());
                count = (count + 1);
            };
            (function (thisObject) {
                if (count == 0) {
                    throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                } else {
                    return null;
                }
            })(thisObject);
            return (acc / count);
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.AverageBy = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                var acc = 0;
                var count = 0;
                while (e.IEnumerator_MoveNext()) {
                    acc = (acc + f(e.IEnumerator1_get_Current()));
                    count = (count + 1);
                };
                (function (thisObject) {
                    if (count == 0) {
                        throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                    } else {
                        return null;
                    }
                })(thisObject);
                return (acc / count);
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Min = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            (function (thisObject) {
                if (!e.IEnumerator_MoveNext()) {
                    throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                } else {
                    return null;
                }
            })(thisObject);
            var acc = e.IEnumerator1_get_Current();
            while (e.IEnumerator_MoveNext()) {
                var curr = e.IEnumerator1_get_Current();
                (function (thisObject) {
                    if (curr < acc) {
                        return acc = curr;
                    } else {
                        return null;
                    }
                })(thisObject);
            };
            return acc;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.MinBy = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                (function (thisObject) {
                    if (!e.IEnumerator_MoveNext()) {
                        throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                    } else {
                        return null;
                    }
                })(thisObject);
                var first = e.IEnumerator1_get_Current();
                var acc = f(first);
                var accv = first;
                while (e.IEnumerator_MoveNext()) {
                    var currv = e.IEnumerator1_get_Current();
                    var curr = f(currv);
                    (function (thisObject) {
                        if (curr < acc) {
                            acc = curr;
                            return accv = currv;
                        } else {
                            return null;
                        }
                    })(thisObject);
                };
                return accv;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.Max = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            (function (thisObject) {
                if (!e.IEnumerator_MoveNext()) {
                    throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                } else {
                    return null;
                }
            })(thisObject);
            var acc = e.IEnumerator1_get_Current();
            while (e.IEnumerator_MoveNext()) {
                var curr = e.IEnumerator1_get_Current();
                (function (thisObject) {
                    if (curr > acc) {
                        return acc = curr;
                    } else {
                        return null;
                    }
                })(thisObject);
            };
            return acc;
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.SeqModule.MaxBy = function (f) {
    return function (source) {
        Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
        var e = source.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                (function (thisObject) {
                    if (!e.IEnumerator_MoveNext()) {
                        throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                    } else {
                        return null;
                    }
                })(thisObject);
                var first = e.IEnumerator1_get_Current();
                var acc = f(first);
                var accv = first;
                while (e.IEnumerator_MoveNext()) {
                    var currv = e.IEnumerator1_get_Current();
                    var curr = f(currv);
                    (function (thisObject) {
                        if (curr > acc) {
                            acc = curr;
                            return accv = currv;
                        } else {
                            return null;
                        }
                    })(thisObject);
                };
                return accv;
            } finally {
                (function (thisObject) {
                    if (e.containsInterface("__getIDisposable")) {
                        return e.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SeqModule.ForAll2 = function (p) {
    return function (source1) {
        return function (source2) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            var e1 = source1.IEnumerable1_GetEnumerator();
            return (function (thisObject) {
                try {
                    var e2 = source2.IEnumerable1_GetEnumerator();
                    return (function (thisObject) {
                        try {
                            var ok = true;
                            while ((function (thisObject) {
                                if ((function (thisObject) {
                                    if (ok) {
                                        return e1.IEnumerator_MoveNext();
                                    } else {
                                        return false;
                                    }
                                })(thisObject)) {
                                    return e2.IEnumerator_MoveNext();
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                ok = p(e1.IEnumerator1_get_Current())(e2.IEnumerator1_get_Current());
                            };
                            return ok;
                        } finally {
                            (function (thisObject) {
                                if (e2.containsInterface("__getIDisposable")) {
                                    return e2.IDisposable_Dispose();
                                } else {
                                    return null;
                                }
                            })(thisObject)
                        }
                    })(thisObject);
                } finally {
                    (function (thisObject) {
                        if (e1.containsInterface("__getIDisposable")) {
                            return e1.IDisposable_Dispose();
                        } else {
                            return null;
                        }
                    })(thisObject)
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SeqModule.Exists2 = function (p) {
    return function (source1) {
        return function (source2) {
            Pit.FSharp.Collections.SeqModule.checkNonNull("source1")(source1);
            Pit.FSharp.Collections.SeqModule.checkNonNull("source2")(source2);
            var e1 = source1.IEnumerable1_GetEnumerator();
            return (function (thisObject) {
                try {
                    var e2 = source2.IEnumerable1_GetEnumerator();
                    return (function (thisObject) {
                        try {
                            var ok = false;
                            while ((function (thisObject) {
                                if ((function (thisObject) {
                                    if (!ok) {
                                        return e1.IEnumerator_MoveNext();
                                    } else {
                                        return false;
                                    }
                                })(thisObject)) {
                                    return e2.IEnumerator_MoveNext();
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                ok = p(e1.IEnumerator1_get_Current())(e2.IEnumerator1_get_Current());
                            };
                            return ok;
                        } finally {
                            (function (thisObject) {
                                if (e2.containsInterface("__getIDisposable")) {
                                    return e2.IDisposable_Dispose();
                                } else {
                                    return null;
                                }
                            })(thisObject)
                        }
                    })(thisObject);
                } finally {
                    (function (thisObject) {
                        if (e1.containsInterface("__getIDisposable")) {
                            return e1.IDisposable_Dispose();
                        } else {
                            return null;
                        }
                    })(thisObject)
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SeqModule.Head = function (source) {
    Pit.FSharp.Collections.SeqModule.checkNonNull("source")(source);
    var e = source.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            return (function (thisObject) {
                if (e.IEnumerator_MoveNext()) {
                    return e.IEnumerator1_get_Current();
                } else {
                    throw Pit.InvalidOperationException.ctors[0]("Input Sequence is Empty")
                }
            })(thisObject);
        } finally {
            (function (thisObject) {
                if (e.containsInterface("__getIDisposable")) {
                    return e.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
registerNamespace("Pit.FSharp.Core.CompilerServices");
registerNamespace("Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1");
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1 = function () {
    this.Tag = 0;
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.prototype.__getIEnumerable = function () {
    return this.IEnumerable;
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.prototype.IEnumerable_GetEnumerator = function () {
    return this.IEnumerable.GetEnumerator();
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.prototype.__getIEnumerable1 = function () {
    return this.IEnumerable1;
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.prototype.IEnumerable1_GetEnumerator = function () {
    return this.IEnumerable1.GetEnumerator();
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.EmptyEnumerable = function () {
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.IEnumerator.Empty();
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return Pit.FSharp.Collections.IEnumerator.Empty();
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    };
    this.IEnumerable = __createIEnumerable(this);
    this.IEnumerable1 = __createIEnumerable1(this);
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.EmptyEnumerable.prototype = new Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1();
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.EmptyEnumerable.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.IFinallyEnumerator = (function () {
    function IFinallyEnumerator() {}
    IFinallyEnumerator.prototype.AppendFinallyAction = function () {};
    return IFinallyEnumerator;
})();
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.FinallyEnumerable1 = (function () {
    function FinallyEnumerable1(compensation, restf) {
        this.IEnumerable = __createIEnumerable(this);
        this.IEnumerable1 = __createIEnumerable1(this);
        this.compensation = compensation;
        this.restf = restf;
    }
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return x.IEnumerable1_GetEnumerator();
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    }
    FinallyEnumerable1.prototype.__getIEnumerable = function () {
        return this.IEnumerable;
    };
    FinallyEnumerable1.prototype.IEnumerable_GetEnumerator = function () {
        return this.IEnumerable.GetEnumerator();
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return (function (thisObject) {
                    try {
                        var ie = thisObject.x.restf().IEnumerable1_GetEnumerator();
                        return (function (thisObject) {
                            if (ie.containsInterface("__getIFinallyEnumerator")) {
                                var a = ie;
                                a.IFinallyEnumerator_AppendFinallyAction(thisObject.x.compensation);
                                return ie;
                            } else {
                                return Pit.FSharp.Collections.IEnumerator.EnumerateThenFinally(thisObject.x.compensation)(ie);
                            }
                        })(thisObject);
                    } catch(e) {
                        thisObject.x.compensation();
                        throw e;
                    }
                })(this);
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    }
    FinallyEnumerable1.prototype.__getIEnumerable1 = function () {
        return this.IEnumerable1;
    };
    FinallyEnumerable1.prototype.IEnumerable1_GetEnumerator = function () {
        return this.IEnumerable1.GetEnumerator();
    };
    return FinallyEnumerable1;
})();
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.ConcatEnumerator2 = (function () {
    function ConcatEnumerator2(sources) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.IFinallyEnumerator = __createIFinallyEnumerator(this);
        this.outerEnum = sources.IEnumerable1_GetEnumerator();
        this.currInnerEnum = Pit.FSharp.Collections.IEnumerator.Empty();
        this.started = false;
        this.finished = false;
        this.compensations = new Pit.FSharp.Collections.FSharpList1.Empty();
    }
    ConcatEnumerator2.prototype.Finish = function () {
        this.finished = true;
        return (function (thisObject) {
            try {
                var matchValue = thisObject.currInnerEnum;
                return (function (thisObject) {
                    if (matchValue == null) {
                        return null;
                    } else {
                        return (function (thisObject) {
                            try {
                                return thisObject.currInnerEnum.IDisposable_Dispose();
                            } finally {
                                thisObject.currInnerEnum = null;
                            }
                        })(thisObject);
                    }
                })(thisObject);
            } finally {
                (function (thisObject) {
                    try {
                        var matchValue = thisObject.outerEnum;
                        return (function (thisObject) {
                            if (matchValue == null) {
                                return null;
                            } else {
                                return (function (thisObject) {
                                    try {
                                        return thisObject.outerEnum.IDisposable_Dispose();
                                    } finally {
                                        thisObject.outerEnum = null;
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    } finally {
                        var iter = function (comps) {
                            return (function (thisObject) {
                                if (comps instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    var t = comps.get_Tail();
                                    var h = comps.get_Head();
                                    return (function (thisObject) {
                                        try {
                                            return h();
                                        } finally {
                                            iter(t)
                                        }
                                    })(thisObject);
                                } else {
                                    return null;
                                }
                            })(thisObject);
                        };
                        (function (thisObject) {
                            try {
                                return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(thisObject.compensations)(function (list) {
                                    return Pit.FSharp.Collections.ListModule.Reverse(list);
                                }))(iter);
                            } finally {
                                thisObject.compensations = new Pit.FSharp.Collections.FSharpList1.Empty();
                            }
                        })(thisObject);
                    }
                })(thisObject)
            }
        })(this);
    };
    ConcatEnumerator2.prototype.GetCurrent = function () {
        Pit.FSharp.Collections.IEnumerator.check(this.started);
        return (function (thisObject) {
            if (thisObject.finished) {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            } else {
                return thisObject.currElement;
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return (function (thisObject) {
                    if (!thisObject.x.finished) {
                        return thisObject.x.Finish();
                    } else {
                        return null;
                    }
                })(this);
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    ConcatEnumerator2.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    ConcatEnumerator2.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                (function (thisObject) {
                    if (!thisObject.x.started) {
                        return thisObject.x.started = true;
                    } else {
                        return null;
                    }
                })(this);
                return (function (thisObject) {
                    if (thisObject.x.finished) {
                        return false;
                    } else {
                        var takeInner = function () {
                            return (function (thisObject) {
                                if (thisObject.x.currInnerEnum.IEnumerator_MoveNext()) {
                                    thisObject.x.currElement = thisObject.x.currInnerEnum.IEnumerator1_get_Current();
                                    return true;
                                } else {
                                    var takeOuter = function () {
                                        return (function (thisObject) {
                                            if (thisObject.x.outerEnum.IEnumerator_MoveNext()) {
                                                var ie = thisObject.x.outerEnum.IEnumerator1_get_Current();
                                                var matchValue = ie;
                                                return (function (thisObject) {
                                                    if (matchValue instanceof Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EmptyEnumerable1) {
                                                        return takeOuter();
                                                    } else {
                                                        thisObject.x.currInnerEnum.IDisposable_Dispose();
                                                        thisObject.x.currInnerEnum = ie.IEnumerable1_GetEnumerator();
                                                        return takeInner();
                                                    }
                                                })(thisObject);
                                            } else {
                                                thisObject.x.Finish();
                                                return false;
                                            }
                                        })(thisObject);
                                    };
                                    return takeOuter();
                                }
                            })(thisObject);
                        };
                        return takeInner();
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    ConcatEnumerator2.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    ConcatEnumerator2.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    ConcatEnumerator2.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    ConcatEnumerator2.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    ConcatEnumerator2.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    ConcatEnumerator2.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    function __createIFinallyEnumerator(thisObject) {
        var ifinallyenumerator = (function () {
            function IFinallyEnumerator(thisObject) {
                this.x = thisObject;
            }
            IFinallyEnumerator.prototype.AppendFinallyAction = function (f) {
                return this.x.compensations = new Pit.FSharp.Collections.FSharpList1.Cons(f, this.x.compensations);
            };
            return IFinallyEnumerator;
        })();
        return new ifinallyenumerator(thisObject);
    }
    ConcatEnumerator2.prototype.__getIFinallyEnumerator = function () {
        return this.IFinallyEnumerator;
    };
    ConcatEnumerator2.prototype.IFinallyEnumerator_AppendFinallyAction = function (f) {
        return this.IFinallyEnumerator.AppendFinallyAction(f);
    };
    return ConcatEnumerator2;
})();
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhileType1 = (function () {
    function EnumerateWhileType1(g, b) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.g = g;
        this.b = b;
        this.started = false;
        this.curr = new Pit.FSharp.Core.FSharpOption1.None();
    }
    EnumerateWhileType1.prototype.getCurr = function () {
        Pit.FSharp.Collections.IEnumerator.check(this.started);
        var matchValue = this.curr;
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = matchValue.get_Value();
                return x;
            } else {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            }
        })(this);
    };
    EnumerateWhileType1.prototype.start = function () {
        return (function (thisObject) {
            if (!thisObject.started) {
                return thisObject.started = true;
            } else {
                return null;
            }
        })(this);
    };
    EnumerateWhileType1.prototype.finish = function () {
        return this.curr = new Pit.FSharp.Core.FSharpOption1.None();
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    EnumerateWhileType1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    EnumerateWhileType1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                this.x.start();
                var keepGoing = (function (thisObject) {
                    try {
                        return thisObject.x.g();
                    } catch(e) {
                        thisObject.x.finish();
                        throw e;
                    }
                })(this);
                return (function (thisObject) {
                    if (keepGoing) {
                        thisObject.x.curr = new Pit.FSharp.Core.FSharpOption1.Some(thisObject.x.b);
                        return true;
                    } else {
                        thisObject.x.finish();
                        return false;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.getCurr();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    EnumerateWhileType1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    EnumerateWhileType1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    EnumerateWhileType1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    EnumerateWhileType1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.getCurr();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    EnumerateWhileType1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    EnumerateWhileType1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return EnumerateWhileType1;
})();
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.checkNonNull = function (argName) {
    return function (arg) {
        var matchValue = arg;
        return (function (thisObject) {
            if (matchValue == null) {
                return Pit.FSharp.Core.Operators.NullArg(argName);
            } else {
                return null;
            }
        })(this);
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkSeq = function (f) {
    return new Pit.FSharp.Core.Operators.mkSeq1(f);
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.Generate = function (openf) {
    return function (compute) {
        return function (closef) {
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkSeq(function () {
                return Pit.FSharp.Collections.IEnumerator.generateWhileSome(openf)(compute)(closef);
            });
        };
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.GenerateUsing = function (openf) {
    return function (compute) {
        return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.Generate(openf)(compute)(function (s) {
            return s.IDisposable_Dispose();
        });
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateFromFunctions = function (opener) {
    return function (moveNext) {
        return function (current) {
            return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.Generate(opener)(function (x) {
                return (function (thisObject) {
                    if (moveNext(x)) {
                        return new Pit.FSharp.Core.FSharpOption1.Some(current(x));
                    } else {
                        return new Pit.FSharp.Core.FSharpOption1.None();
                    }
                })(this);
            })(function (x) {
                var matchValue = x;
                return (function (thisObject) {
                    if (matchValue.containsInterface("__getIDisposable")) {
                        var id = matchValue;
                        return id.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(this);
            });
        };
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateUsing = function (resource) {
    return function (rest) {
        return new Pit.FSharp.Core.CompilerServices.RuntimeHelpers.FinallyEnumerable1(function () {
            var matchValue = resource;
            return (function (thisObject) {
                if (matchValue == null) {
                    return null;
                } else {
                    return resource.IDisposable_Dispose();
                }
            })(this);
        },
        function () {
            return rest(resource);
        });
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkConcatSeq = function (sources) {
    return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkSeq(function () {
        return new Pit.FSharp.Core.CompilerServices.RuntimeHelpers.ConcatEnumerator2(sources);
    });
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhile = function (g) {
    return function (b) {
        return Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkConcatSeq(Pit.FSharp.Core.CompilerServices.RuntimeHelpers.mkSeq(function () {
            return new Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateWhileType1(g, b);
        }));
    };
};
Pit.FSharp.Core.CompilerServices.RuntimeHelpers.EnumerateThenFinally = function (rest) {
    return function (compensation) {
        return new Pit.FSharp.Core.CompilerServices.RuntimeHelpers.FinallyEnumerable1(compensation, function () {
            return rest;
        });
    };
};
registerNamespace("Pit.FSharp.Collections");
registerNamespace("Pit.FSharp.Collections.Generator.Step1");
Pit.FSharp.Collections.Generator.Step1 = function () {
    this.Tag = 0;
    this.IsGoto = false;
    this.IsYield = false;
    this.IsStop = false;
};
Pit.FSharp.Collections.Generator.Step1.Stop = function () {};
Pit.FSharp.Collections.Generator.Step1.Stop.prototype = new Pit.FSharp.Collections.Generator.Step1();
Pit.FSharp.Collections.Generator.Step1.Stop.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.Generator.Step1.Yield = function (item) {
    this.Item = item;
};
Pit.FSharp.Collections.Generator.Step1.Yield.prototype = new Pit.FSharp.Collections.Generator.Step1();
Pit.FSharp.Collections.Generator.Step1.Yield.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Collections.Generator.Step1.Yield.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Collections.Generator.Step1.Goto = function (item) {
    this.Item = item;
};
Pit.FSharp.Collections.Generator.Step1.Goto.prototype = new Pit.FSharp.Collections.Generator.Step1();
Pit.FSharp.Collections.Generator.Step1.Goto.prototype.equality = function (compareTo) {
    var result = true;
    result = result && this.get_Item() == compareTo.get_Item();
    return result;
};
Pit.FSharp.Collections.Generator.Step1.Goto.prototype.get_Item = function () {
    return this.Item;
};
Pit.FSharp.Collections.Generator.Step1.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Collections.Generator.Step1.prototype.get_IsGoto = function () {
    return this instanceof Pit.FSharp.Collections.Generator.Step1.Goto;
};
Pit.FSharp.Collections.Generator.Step1.prototype.get_IsYield = function () {
    return this instanceof Pit.FSharp.Collections.Generator.Step1.Yield;
};
Pit.FSharp.Collections.Generator.Step1.prototype.get_IsStop = function () {
    return this instanceof Pit.FSharp.Collections.Generator.Step1.Stop;
};
Pit.FSharp.Collections.Generator.Generator1 = (function () {
    function Generator1() {}
    Generator1.prototype.Apply = function () {};
    Generator1.prototype.get_Disposer = function () {};
    return Generator1;
})();
Pit.FSharp.Collections.Generator.BaseGenerator1 = (function () {
    function BaseGenerator1(apply, disposer) {
        this.Generator1 = __createGenerator1(this);
        this.apply = apply;
        this.disposer = disposer;
    }
    function __createGenerator1(thisObject) {
        var generator1 = (function () {
            function Generator1(thisObject) {
                this.x = thisObject;
            }
            Generator1.prototype.Apply = function () {
                return this.x.apply;
            };
            Generator1.prototype.get_Disposer = function () {
                return this.x.disposer;
            };
            return Generator1;
        })();
        return new generator1(thisObject);
    }
    BaseGenerator1.prototype.__getGenerator1 = function () {
        return this.Generator1;
    };
    BaseGenerator1.prototype.Generator1_Apply = function () {
        return this.Generator1.Apply();
    };
    BaseGenerator1.prototype.Generator1_get_Disposer = function () {
        return this.Generator1.get_Disposer();
    };
    return BaseGenerator1;
})();
Pit.FSharp.Collections.Generator.GenerateThen1 = (function () {
    function GenerateThen1(g, cont) {
        this.Generator1 = __createGenerator1(this);
        this.g = g;
        this.cont = cont;
    }
    function __createGenerator1(thisObject) {
        var generator1 = (function () {
            function Generator1(thisObject) {
                this.x = thisObject;
            }
            Generator1.prototype.Apply = function () {
                var matchValue = Pit.FSharp.Collections.Generator.appG(this.x.g);
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Collections.Generator.Step1.Yield) {
                        var res = matchValue;
                        return res;
                    } else {
                        return (function (thisObject) {
                            if (matchValue instanceof Pit.FSharp.Collections.Generator.Step1.Goto) {
                                var next = matchValue.get_Item();
                                return new Pit.FSharp.Collections.Generator.Step1.Goto(Pit.FSharp.Collections.Generator.GenerateThen1({
                                    Item1: next,
                                    Item2: thisObject.x.cont
                                }));
                            } else {
                                return new Pit.FSharp.Collections.Generator.Step1.Goto(thisObject.x.cont());
                            }
                        })(thisObject);
                    }
                })(this);
            };
            Generator1.prototype.get_Disposer = function () {
                return this.x.g.Generator1_get_Disposer();
            };
            return Generator1;
        })();
        return new generator1(thisObject);
    }
    GenerateThen1.prototype.__getGenerator1 = function () {
        return this.Generator1;
    };
    GenerateThen1.prototype.Generator1_Apply = function () {
        return this.Generator1.Apply();
    };
    GenerateThen1.prototype.Generator1_get_Disposer = function () {
        return this.Generator1.get_Disposer();
    };
    GenerateThen1.prototype.get_Generator = function () {
        return this.g;
    };
    GenerateThen1.prototype.get_Cont = function () {
        return this.cont;
    };
    return GenerateThen1;
})();
Pit.FSharp.Collections.Generator.GenerateThen1.Bind = function (tupledArg) {
    var gen = tupledArg.Item1;
    var cont = tupledArg.Item2;
    return (function (thisObject) {
        if (gen instanceof Pit.FSharp.Collections.Generator.GenerateThen1) {
            var g = gen;
            return Pit.FSharp.Collections.Generator.GenerateThen1.Bind({
                Item1: g.get_Generator(),
                Item2: function () {
                    return Pit.FSharp.Collections.Generator.GenerateThen1.Bind({
                        Item1: g.get_Cont()(),
                        Item2: cont
                    });
                }
            });
        } else {
            var g = gen;
            return new Pit.FSharp.Collections.Generator.GenerateThen1(g, cont);
        }
    })(this);
};
Pit.FSharp.Collections.Generator.EnumeratorWrappingLazyGenerator1 = (function () {
    function EnumeratorWrappingLazyGenerator1(gen) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.g = gen;
        this.curr = new Pit.FSharp.Core.FSharpOption1.None();
        this.finished = false;
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return (function (thisObject) {
                    if (!thisObject.x.finished) {
                        return Pit.FSharp.Collections.Generator.disposeG(thisObject.x.g);
                    } else {
                        return null;
                    }
                })(this);
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    EnumeratorWrappingLazyGenerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    EnumeratorWrappingLazyGenerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return (function (thisObject) {
                    if (!thisObject.x.finished) {
                        var matchValue = Pit.FSharp.Collections.Generator.appG(thisObject.x.g);
                        return (function (thisObject) {
                            if (matchValue instanceof Pit.FSharp.Collections.Generator.Step1.Yield) {
                                var v = matchValue.get_Item();
                                thisObject.x.curr = new Pit.FSharp.Core.FSharpOption1.Some(v);
                                return true;
                            } else {
                                return (function (thisObject) {
                                    if (matchValue instanceof Pit.FSharp.Collections.Generator.Step1.Goto) {
                                        var next = matchValue.get_Item();
                                        thisObject.x.g = next;
                                        return thisObject.x.IEnumerator_MoveNext();
                                    } else {
                                        thisObject.x.curr = new Pit.FSharp.Core.FSharpOption1.None();
                                        thisObject.x.finished = true;
                                        return false;
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    } else {
                        return false;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.IEnumerator1_get_Current();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    EnumeratorWrappingLazyGenerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    EnumeratorWrappingLazyGenerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    EnumeratorWrappingLazyGenerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    EnumeratorWrappingLazyGenerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                var matchValue = this.x.curr;
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                        return Pit.FSharp.Core.Operators.op_PipeLeft(function (exn) {
                            throw exn;
                        })(Pit.InvalidOperationException.ctors[0]("MoveNext called or finished"));
                    } else {
                        var v = matchValue.get_Value();
                        return v;
                    }
                })(this);
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    EnumeratorWrappingLazyGenerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    EnumeratorWrappingLazyGenerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    EnumeratorWrappingLazyGenerator1.prototype.get_Generator = function () {
        return this.g;
    };
    return EnumeratorWrappingLazyGenerator1;
})();
Pit.FSharp.Collections.Generator.LazyGeneratorWrappingEnumerator1 = (function () {
    function LazyGeneratorWrappingEnumerator1(e) {
        this.Generator1 = __createGenerator1(this);
        this.e = e;
    }
    function __createGenerator1(thisObject) {
        var generator1 = (function () {
            function Generator1(thisObject) {
                this.x = thisObject;
            }
            Generator1.prototype.Apply = function () {
                return (function (thisObject) {
                    if (thisObject.x.e.IEnumerator_MoveNext()) {
                        return new Pit.FSharp.Collections.Generator.Step1.Yield(thisObject.x.e.IEnumerator1_get_Current());
                    } else {
                        return new Pit.FSharp.Collections.Generator.Step1.Stop();
                    }
                })(this);
            };
            Generator1.prototype.get_Disposer = function () {
                var d = this.x.e;
                return new Pit.FSharp.Core.FSharpOption1.Some(function () {
                    return d.IDisposable_Dispose();
                });
            };
            return Generator1;
        })();
        return new generator1(thisObject);
    }
    LazyGeneratorWrappingEnumerator1.prototype.__getGenerator1 = function () {
        return this.Generator1;
    };
    LazyGeneratorWrappingEnumerator1.prototype.Generator1_Apply = function () {
        return this.Generator1.Apply();
    };
    LazyGeneratorWrappingEnumerator1.prototype.Generator1_get_Disposer = function () {
        return this.Generator1.get_Disposer();
    };
    LazyGeneratorWrappingEnumerator1.prototype.get_Enumerator = function () {
        return this.e;
    };
    return LazyGeneratorWrappingEnumerator1;
})();
Pit.FSharp.Collections.Generator.disposeG = function (g) {
    var matchValue = g.Generator1_get_Disposer();
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            var f = matchValue.get_Value();
            return f();
        } else {
            return null;
        }
    })(this);
};
Pit.FSharp.Collections.Generator.chainDisposeG = function (d1) {
    return function (g) {
        var app = g.Generator1_Apply();
        var matchValue = g.Generator1_get_Disposer();
        var disp = (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                return new Pit.FSharp.Core.FSharpOption1.Some(d1);
            } else {
                var f2 = matchValue.get_Value();
                return new Pit.FSharp.Core.FSharpOption1.Some(function () {
                    f2();
                    return d1();
                });
            }
        })(this);
        return new Pit.FSharp.Collections.Generator.BaseGenerator1(app, disp);
    };
};
Pit.FSharp.Collections.Generator.appG = function (g) {
    var res = g.Generator1_Apply();
    return (function (thisObject) {
        if (res instanceof Pit.FSharp.Collections.Generator.Step1.Yield) {
            return res;
        } else {
            return (function (thisObject) {
                if (res instanceof Pit.FSharp.Collections.Generator.Step1.Stop) {
                    Pit.FSharp.Collections.Generator.disposeG(g);
                    return res;
                } else {
                    var next = res.get_Item();
                    return new Pit.FSharp.Collections.Generator.Step1.Goto(next);
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.Generator.bindG = function (g) {
    return function (cont) {
        return Pit.FSharp.Collections.Generator.GenerateThen1.Bind({
            Item1: g,
            Item2: cont
        });
    };
};
Pit.FSharp.Collections.Generator.EnumerateFromGenerator = function (gen) {
    return (function (thisObject) {
        if (gen instanceof Pit.FSharp.Collections.Generator.LazyGeneratorWrappingEnumerator1) {
            var g = gen;
            return g.get_Enumerator();
        } else {
            return new Pit.FSharp.Collections.Generator.EnumeratorWrappingLazyGenerator1(gen);
        }
    })(this);
};
Pit.FSharp.Collections.Generator.GenerateFromEnumerator = function (t) {
    return (function (thisObject) {
        if (t instanceof Pit.FSharp.Collections.Generator.EnumeratorWrappingLazyGenerator1) {
            var e = t;
            return e.get_Generator();
        } else {
            return new Pit.FSharp.Collections.Generator.LazyGeneratorWrappingEnumerator1(t);
        }
    })(this);
};
Pit.FSharp.Collections.Generator.Step1.Tags = (function () {
    function Tags() {}
    return Tags;
})();
registerNamespace("Pit.FSharp.Collections");
registerNamespace("Pit.FSharp.Collections.IEnumerator.EnumeratorState");
Pit.FSharp.Collections.IEnumerator.EnumeratorState = function () {
    this.Tag = 0;
    this.IsFinished = false;
    this.IsInProcess = false;
    this.IsNotStarted = false;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.NotStarted = function () {};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.NotStarted.prototype = new Pit.FSharp.Collections.IEnumerator.EnumeratorState();
Pit.FSharp.Collections.IEnumerator.EnumeratorState.NotStarted.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess = function () {};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess.prototype = new Pit.FSharp.Collections.IEnumerator.EnumeratorState();
Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished = function () {};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished.prototype = new Pit.FSharp.Collections.IEnumerator.EnumeratorState();
Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished.prototype.equality = function (compareTo) {
    var result = true;
    return result;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.prototype.get_Tag = function () {
    return this.Tag;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.prototype.get_IsFinished = function () {
    return this instanceof Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.prototype.get_IsInProcess = function () {
    return this instanceof Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess;
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.prototype.get_IsNotStarted = function () {
    return this instanceof Pit.FSharp.Collections.IEnumerator.EnumeratorState.NotStarted;
};
Pit.FSharp.Collections.IEnumerator.SeqEnumerator1 = (function () {
    function SeqEnumerator1(m, d) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.m = m;
        this.d = d;
        this.state = new Pit.FSharp.Collections.IEnumerator.EnumeratorState.NotStarted();
    }
    SeqEnumerator1.prototype.GetCurrent = function () {
        var matchValue = this.state;
        (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished) {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            } else {
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess) {
                        return null;
                    } else {
                        return Pit.FSharp.Collections.IEnumerator.notStarted();
                    }
                })(thisObject);
            }
        })(this);
        return this.curr;
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return this.x.d();
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    SeqEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    SeqEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                this.x.state = new Pit.FSharp.Collections.IEnumerator.EnumeratorState.InProcess();
                var patternInput = this.x.m(this.x.curr);
                var r = patternInput.Item2;
                var c = patternInput.Item1;
                this.x.curr = c;
                return (function (thisObject) {
                    if (r) {
                        return true;
                    } else {
                        thisObject.x.state = new Pit.FSharp.Collections.IEnumerator.EnumeratorState.Finished();
                        return false;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    SeqEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    SeqEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    SeqEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    SeqEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.GetCurrent();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    SeqEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    SeqEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return SeqEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.ChooseEnumerator1 = (function () {
    function ChooseEnumerator1(f, e) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.f = f;
        this.e = e;
        this.started = false;
        this.curr = new Pit.FSharp.Core.FSharpOption1.None();
    }
    ChooseEnumerator1.prototype.get = function () {
        Pit.FSharp.Collections.IEnumerator.check(this.started);
        var matchValue = this.curr;
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = matchValue.get_Value();
                return x;
            } else {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return this.x.e.IDisposable_Dispose();
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    ChooseEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    ChooseEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                (function (thisObject) {
                    if (!thisObject.x.started) {
                        return thisObject.x.started = true;
                    } else {
                        return null;
                    }
                })(this);
                this.x.curr = new Pit.FSharp.Core.FSharpOption1.None();
                while ((function (thisObject) {
                    if (Pit.FSharp.Core.FSharpOption1.get_IsNone(thisObject.x.curr)) {
                        return thisObject.x.e.IEnumerator_MoveNext();
                    } else {
                        return false;
                    }
                })(this)) {
                    this.x.curr = this.x.f(this.x.e.IEnumerator1_get_Current());
                };
                return Pit.FSharp.Core.OptionModule.IsSome(this.x.curr);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.get();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    ChooseEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    ChooseEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    ChooseEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    ChooseEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.get();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    ChooseEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    ChooseEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return ChooseEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.FilterEnumerator1 = (function () {
    function FilterEnumerator1(f, e) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.f = f;
        this.e = e;
        this.started = false;
    }
    FilterEnumerator1.prototype.Next = function () {
        (function (thisObject) {
            if (!thisObject.started) {
                return thisObject.started = true;
            } else {
                return null;
            }
        })(this);
        return (function (thisObject) {
            if (thisObject.e.IEnumerator_MoveNext()) {
                return (function (thisObject) {
                    if (thisObject.f(thisObject.e.IEnumerator1_get_Current())) {
                        return true;
                    } else {
                        return thisObject.Next();
                    }
                })(thisObject);
            } else {
                return false;
            }
        })(this);
    };
    FilterEnumerator1.prototype.next = function () {
        (function (thisObject) {
            if (!thisObject.started) {
                return thisObject.started = true;
            } else {
                return null;
            }
        })(this);
        return (function (thisObject) {
            if (thisObject.e.IEnumerator_MoveNext()) {
                return (function (thisObject) {
                    if (thisObject.f(thisObject.e.IEnumerator1_get_Current())) {
                        return true;
                    } else {
                        return function (arg10) {
                            return thisObject.next();
                        } ();
                    }
                })(thisObject);
            } else {
                return false;
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return this.x.e.IDisposable_Dispose();
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    FilterEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    FilterEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return this.x.Next();
            };
            IEnumerator.prototype.get_Current = function () {
                Pit.FSharp.Collections.IEnumerator.check(this.x.started);
                return this.x.e.IEnumerator1_get_Current();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    FilterEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    FilterEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    FilterEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    FilterEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                Pit.FSharp.Collections.IEnumerator.check(this.x.started);
                return this.x.e.IEnumerator1_get_Current();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    FilterEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    FilterEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return FilterEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.ArrayEnumerator1 = (function () {
    function ArrayEnumerator1(arr) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.arr = arr;
        this.curr = -1;
        this.len = this.arr.get_Length();
    }
    ArrayEnumerator1.prototype.Get = function () {
        return (function (thisObject) {
            if (thisObject.curr >= 0) {
                return (function (thisObject) {
                    if (thisObject.curr >= thisObject.len) {
                        return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
                    } else {
                        return thisObject.arr[thisObject.curr];
                    }
                })(thisObject);
            } else {
                return Pit.FSharp.Collections.IEnumerator.notStarted();
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    ArrayEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    ArrayEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return (function (thisObject) {
                    if (thisObject.x.curr >= thisObject.x.len) {
                        return false;
                    } else {
                        thisObject.x.curr = (thisObject.x.curr + 1);
                        return thisObject.x.curr < thisObject.x.len;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.Get();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    ArrayEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    ArrayEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    ArrayEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    ArrayEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.Get();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    ArrayEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    ArrayEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return ArrayEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.EmptyEnumerator1 = (function () {
    function EmptyEnumerator1() {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    EmptyEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    EmptyEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                (function (thisObject) {
                    if (!thisObject.x.started) {
                        return thisObject.x.started = true;
                    } else {
                        return null;
                    }
                })(this);
                return false;
            };
            IEnumerator.prototype.get_Current = function () {
                Pit.FSharp.Collections.IEnumerator.check(this.x.started);
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    EmptyEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    EmptyEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    EmptyEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    EmptyEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                Pit.FSharp.Collections.IEnumerator.check(this.x.started);
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    EmptyEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    EmptyEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return EmptyEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.Singleton1 = (function () {
    function Singleton1(v) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.v = v;
        this.started = false;
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    Singleton1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    Singleton1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return (function (thisObject) {
                    if (thisObject.x.started) {
                        return false;
                    } else {
                        thisObject.x.started = true;
                        return true;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.v;
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    Singleton1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    Singleton1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    Singleton1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    Singleton1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.v;
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    Singleton1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    Singleton1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return Singleton1;
})();
Pit.FSharp.Collections.IEnumerator.EnumerateFinally1 = (function () {
    function EnumerateFinally1(f, e) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.f = f;
        this.e = e;
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return (function (thisObject) {
                    try {
                        return thisObject.x.e.IDisposable_Dispose();
                    } finally {
                        thisObject.x.f()
                    }
                })(this);
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    EnumerateFinally1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    EnumerateFinally1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return this.x.e.IEnumerator_MoveNext();
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.e.IEnumerator_get_Current();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    EnumerateFinally1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    EnumerateFinally1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    EnumerateFinally1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    EnumerateFinally1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.e.IEnumerator1_get_Current();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    EnumerateFinally1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    EnumerateFinally1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return EnumerateFinally1;
})();
Pit.FSharp.Collections.IEnumerator.UptoEnumerator1 = (function () {
    function UptoEnumerator1(lastOption, f) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.f = f;
        this.unstarted = -1;
        this.completed = -2;
        var unreachable = -3;
        this.finalIndex = (function (thisObject) {
            if (lastOption instanceof Pit.FSharp.Core.FSharpOption1.None) {
                return unreachable;
            } else {
                var b = lastOption.get_Value();
                return b;
            }
        })(this);
        this.index = this.unstarted;
        this.current = null;
    }
    UptoEnumerator1.prototype.setIndex = function (i) {
        this.index = i;
        return this.current = null;
    };
    UptoEnumerator1.prototype.getCurrent = function () {
        (function (thisObject) {
            if (thisObject.index == thisObject.unstarted) {
                return Pit.FSharp.Collections.IEnumerator.notStarted();
            } else {
                return null;
            }
        })(this);
        (function (thisObject) {
            if (thisObject.index == thisObject.completed) {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            } else {
                return null;
            }
        })(this);
        var matchValue = this.current;
        (function (thisObject) {
            if (matchValue == null) {
                return thisObject.current = Pit.FSharp.Control.LazyExtensions.Create(function () {
                    return thisObject.f(thisObject.index);
                });
            } else {
                return null;
            }
        })(this);
        return Pit.FSharp.Control.LazyExtensions.Force(this.current);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    UptoEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    UptoEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return (function (thisObject) {
                    if (thisObject.x.index == thisObject.x.completed) {
                        return false;
                    } else {
                        return (function (thisObject) {
                            if (thisObject.x.index == thisObject.x.unstarted) {
                                thisObject.x.setIndex(0);
                                return true;
                            } else {
                                (function (thisObject) {
                                    if (thisObject.x.index == 2147483647) {
                                        return Pit.FSharp.Core.Operators.op_PipeLeft(function (exn) {
                                            throw exn;
                                        })(Pit.InvalidOperationException.ctors[0]("Enumeration pass Int maximum value"));
                                    } else {
                                        return null;
                                    }
                                })(thisObject);
                                return (function (thisObject) {
                                    if (thisObject.x.index == thisObject.x.finalIndex) {
                                        return false;
                                    } else {
                                        thisObject.x.setIndex((thisObject.x.index + 1));
                                        return true;
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.getCurrent();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    UptoEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    UptoEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    UptoEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    UptoEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.getCurrent();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    UptoEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    UptoEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return UptoEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.WhileSomeEnumerator1 = (function () {
    function WhileSomeEnumerator1(openf, compute, closef) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.compute = compute;
        this.closef = closef;
        this.started = false;
        this.curr = new Pit.FSharp.Core.FSharpOption1.None();
        this.state = new Pit.FSharp.Core.FSharpOption1.Some(openf());
    }
    WhileSomeEnumerator1.prototype.getCurr = function () {
        Pit.FSharp.Collections.IEnumerator.check(this.started);
        var matchValue = this.curr;
        return (function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = matchValue.get_Value();
                return x;
            } else {
                return Pit.FSharp.Collections.IEnumerator.alreadyFinished();
            }
        })(this);
    };
    WhileSomeEnumerator1.prototype.start = function () {
        return (function (thisObject) {
            if (!thisObject.started) {
                return thisObject.started = true;
            } else {
                return null;
            }
        })(this);
    };
    WhileSomeEnumerator1.prototype.dispose = function () {
        return Pit.FSharp.Core.Operators.op_PipeRight((function (thisObject) {
            if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var res = matchValue;
                thisObject.state = new Pit.FSharp.Core.FSharpOption1.None();
                return res;
            } else {
                return new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this))(function (option) {
            return Pit.FSharp.Core.OptionModule.Iterate(this.closef)(option);
        });
    };
    WhileSomeEnumerator1.prototype.finish = function () {
        return (function (thisObject) {
            try {
                return thisObject.dispose();
            } finally {
                thisObject.curr = new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this);
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return this.x.dispose();
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    WhileSomeEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    WhileSomeEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                this.x.start();
                var matchValue = this.x.state;
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                        var s = matchValue.get_Value();
                        var matchValue1 = (function (thisObject) {
                            try {
                                return thisObject.x.compute(s);
                            } catch(e) {
                                thisObject.x.finish();
                                throw e;
                            }
                        })(thisObject);
                        return (function (thisObject) {
                            if (matchValue1 instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                                var x = matchValue1;
                                thisObject.x.curr = x;
                                return true;
                            } else {
                                thisObject.x.finish();
                                return false;
                            }
                        })(thisObject);
                    } else {
                        return false;
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.getCurr();
            };
            IEnumerator.prototype.Reset = function () {
                return Pit.FSharp.Collections.IEnumerator.noReset();
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    WhileSomeEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    WhileSomeEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    WhileSomeEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    WhileSomeEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.getCurr();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    WhileSomeEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    WhileSomeEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return WhileSomeEnumerator1;
})();
Pit.FSharp.Collections.IEnumerator.noReset = function () {
    throw Pit.NotSupportedException.ctors[0]("reset not supported");
};
Pit.FSharp.Collections.IEnumerator.notStarted = function () {
    throw Pit.InvalidOperationException.ctors[0]("enumeration not started");
};
Pit.FSharp.Collections.IEnumerator.alreadyFinished = function () {
    throw Pit.InvalidOperationException.ctors[0]("enumeration already finished");
};
Pit.FSharp.Collections.IEnumerator.check = function (started) {
    return (function (thisObject) {
        if (!started) {
            return Pit.FSharp.Collections.IEnumerator.notStarted();
        } else {
            return null;
        }
    })(this);
};
Pit.FSharp.Collections.IEnumerator.dispose = function (r) {
    return r.IDisposable_Dispose();
};
Pit.FSharp.Collections.IEnumerator.nth = function (index) {
    return function (e) {
        (function (thisObject) {
            if (!e.IEnumerator_MoveNext()) {
                throw Pit.InvalidOperationException.ctors[0]("not enough elements")
            } else {
                return null;
            }
        })(this);
        (function (thisObject) {
            if (index < 0) {
                throw Pit.InvalidOperationException.ctors[0]("input must be non-negative")
            } else {
                return null;
            }
        })(this);
        return (function (thisObject) {
            if (index == 0) {
                return e.IEnumerator1_get_Current();
            } else {
                return Pit.FSharp.Collections.IEnumerator.nth((index - 1))(e);
            }
        })(this);
    };
};
Pit.FSharp.Collections.IEnumerator.map = function (f) {
    return function (e) {
        return new Pit.FSharp.Collections.IEnumerator.SeqEnumerator1(function (_arg1) {
            return (function (thisObject) {
                if (e.IEnumerator_MoveNext()) {
                    return {
                        Item1: f(e.IEnumerator1_get_Current()),
                        Item2: true
                    };
                } else {
                    return {
                        Item1: null,
                        Item2: false
                    };
                }
            })(this);
        },
        function (_arg2) {
            return e.IDisposable_Dispose();
        });
    };
};
Pit.FSharp.Collections.IEnumerator.mapi = function (f) {
    return function (e) {
        var i = -1;
        return new Pit.FSharp.Collections.IEnumerator.SeqEnumerator1(function (_arg1) {
            i = (i + 1);
            return (function (thisObject) {
                if (e.IEnumerator_MoveNext()) {
                    return {
                        Item1: f(i)(e.IEnumerator1_get_Current()),
                        Item2: true
                    };
                } else {
                    return {
                        Item1: null,
                        Item2: false
                    };
                }
            })(this);
        },
        function (_arg2) {
            return e.IDisposable_Dispose();
        });
    };
};
Pit.FSharp.Collections.IEnumerator.map2 = function (f) {
    return function (e1) {
        return function (e2) {
            return new Pit.FSharp.Collections.IEnumerator.SeqEnumerator1(function (_arg1) {
                var n1 = e1.IEnumerator_MoveNext();
                var n2 = e2.IEnumerator_MoveNext();
                return (function (thisObject) {
                    if ((function (thisObject) {
                        if (n1) {
                            return n2;
                        } else {
                            return false;
                        }
                    })(thisObject)) {
                        var curr = f(e1.IEnumerator1_get_Current())(e2.IEnumerator1_get_Current());
                        return {
                            Item1: curr,
                            Item2: true
                        };
                    } else {
                        return {
                            Item1: null,
                            Item2: false
                        };
                    }
                })(this);
            },
            function (_arg2) {
                e1.IDisposable_Dispose();
                return e2.IDisposable_Dispose();
            });
        };
    };
};
Pit.FSharp.Collections.IEnumerator.choose = function (f) {
    return function (e) {
        return new Pit.FSharp.Collections.IEnumerator.ChooseEnumerator1(f, e);
    };
};
Pit.FSharp.Collections.IEnumerator.filter = function (f) {
    return function (e) {
        return new Pit.FSharp.Collections.IEnumerator.FilterEnumerator1(f, e);
    };
};
Pit.FSharp.Collections.IEnumerator.unfold = function (f) {
    return function (x) {
        var state = x;
        return new Pit.FSharp.Collections.IEnumerator.SeqEnumerator1(function (_arg1) {
            var matchValue = f(state);
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                    var s = matchValue.get_Value().Item2;
                    var r = matchValue.get_Value().Item1;
                    state = s;
                    return {
                        Item1: r,
                        Item2: true
                    };
                } else {
                    return {
                        Item1: null,
                        Item2: false
                    };
                }
            })(this);
        },
        function (_arg2) {
            return null;
        });
    };
};
Pit.FSharp.Collections.IEnumerator.ofArray = function (arr) {
    return new Pit.FSharp.Collections.IEnumerator.ArrayEnumerator1(arr);
};
Pit.FSharp.Collections.IEnumerator.Empty = function () {
    return new Pit.FSharp.Collections.IEnumerator.EmptyEnumerator1();
};
Pit.FSharp.Collections.IEnumerator.Singleton = function (x) {
    return new Pit.FSharp.Collections.IEnumerator.Singleton1(x);
};
Pit.FSharp.Collections.IEnumerator.EnumerateThenFinally = function (f) {
    return function (e) {
        return new Pit.FSharp.Collections.IEnumerator.EnumerateFinally1(f, e);
    };
};
Pit.FSharp.Collections.IEnumerator.upto = function (lastOption) {
    return function (f) {
        return (function (thisObject) {
            if (lastOption instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var b = lastOption.get_Value();
                return (function () {
                    return (function (thisObject) {
                        var b = lastOption.get_Value();
                        if (b < 0) {
                            return Pit.FSharp.Collections.IEnumerator.Empty();
                        } else {
                            return new Pit.FSharp.Collections.IEnumerator.UptoEnumerator1(lastOption, f);
                        };
                    })(thisObject);
                })();
            } else {
                return new Pit.FSharp.Collections.IEnumerator.UptoEnumerator1(lastOption, f);
            }
        })(this);
    };
};
Pit.FSharp.Collections.IEnumerator.generateWhileSome = function (openf) {
    return function (compute) {
        return function (closef) {
            return new Pit.FSharp.Collections.IEnumerator.WhileSomeEnumerator1(openf, compute, closef);
        };
    };
};
Pit.FSharp.Collections.IEnumerator.EnumeratorState.Tags = (function () {
    function Tags() {}
    return Tags;
})();
Pit.FSharp.Collections.ListModule.Choose = function (f) {
    return function (xs) {
        return Pit.FSharp.Collections.ListModule.chooseAllAcc(f)(xs)(new Pit.FSharp.Collections.FSharpList1.Empty());
    };
};
Pit.FSharp.Collections.ListModule.collectTo = function (f) {
    return function (list) {
        return function (cons) {
            return (function (thisObject) {
                if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = list.get_Item2();
                    var h = list.get_Item1();
                    return Pit.FSharp.Collections.ListModule.collectTo(f)(t)(Pit.FSharp.Collections.ListModule.appendTo(cons)(f(h)));
                } else {
                    return cons;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Collect = function (f) {
    return function (list) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (list1) {
            return Pit.FSharp.Collections.ListModule.ToSeq(list1);
        }))(function (source) {
            return Pit.FSharp.Collections.SeqModule.Collect(f)(source);
        }))(function (source) {
            return Pit.FSharp.Collections.SeqModule.ToList(source);
        });
    };
};
Pit.FSharp.Collections.ListModule.Filter = function (f) {
    return function (l) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(l)(function (list) {
            return Pit.FSharp.Collections.ListModule.ToSeq(list);
        }))(function (source) {
            return Pit.FSharp.Collections.SeqModule.Filter(f)(source);
        }))(function (source) {
            return Pit.FSharp.Collections.SeqModule.ToList(source);
        });
    };
};
Pit.FSharp.Collections.ListModule.concatTo = function (cons) {
    return function (h1) {
        return function (l) {
            return (function (thisObject) {
                if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = l.get_Item2();
                    var h2 = l.get_Item1();
                    return Pit.FSharp.Collections.ListModule.concatTo(Pit.FSharp.Collections.ListModule.appendTo(cons)(h1))(h2)(t);
                } else {
                    return cons;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.concatToEmpty = function (l) {
    return (function (thisObject) {
        if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
            return (function (thisObject) {
                if (l.get_Item1() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var h = l.get_Item1().get_Item1();
                    var t1 = l.get_Item1().get_Item2();
                    var tt2 = l.get_Item2();
                    var res = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                    return Pit.FSharp.Collections.ListModule.concatTo(res)(t1)(tt2);
                } else {
                    var t = l.get_Item2();
                    return Pit.FSharp.Collections.ListModule.concatToEmpty(t);
                }
            })(thisObject);
        } else {
            return new Pit.FSharp.Collections.FSharpList1.Empty();
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.seqToList = function (e) {
    var ie = e.IEnumerable1_GetEnumerator();
    return (function (thisObject) {
        try {
            var res = new Pit.FSharp.Collections.FSharpList1.Empty();
            while (ie.IEnumerator_MoveNext()) {
                res = new Pit.FSharp.Collections.FSharpList1.Cons(ie.IEnumerator1_get_Current(), res);
            };
            return res;
        } finally {
            (function (thisObject) {
                if (ie.containsInterface("__getIDisposable")) {
                    return ie.IDisposable_Dispose();
                } else {
                    return null;
                }
            })(thisObject)
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.OfSeq = function (l) {
    return Pit.FSharp.Collections.ListModule.seqToList(l);
};
Pit.FSharp.Collections.ListModule.ToSeq = function (l) {
    return l;
};
Pit.FSharp.Collections.ListModule.Concat = function (l) {
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(l)(function (sources) {
        return Pit.FSharp.Collections.SeqModule.Concat(sources);
    }))(function (source) {
        return Pit.FSharp.Collections.SeqModule.ToList(source);
    });
};
Pit.FSharp.Collections.ListModule.partitionTo = function (consL) {
    return function (consR) {
        return function (p) {
            return function (l) {
                return (function (thisObject) {
                    if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = l.get_Item2();
                        var h = l.get_Item1();
                        var cons11 = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                        return (function (thisObject) {
                            if (p(h)) {
                                var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(consL.get_Head(), cons11);
                                return Pit.FSharp.Collections.ListModule.partitionTo(cons1)(consR)(p)(t);
                            } else {
                                var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(consR.get_Head(), cons11);
                                return Pit.FSharp.Collections.ListModule.partitionTo(consL)(cons1)(p)(t);
                            }
                        })(thisObject);
                    } else {
                        return {
                            Item1: consL,
                            Item2: consR
                        };
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.partitionToTailLeft = function (consL) {
    return function (p) {
        return function (l) {
            return (function (thisObject) {
                if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = l.get_Item2();
                    var h = l.get_Item1();
                    var cons11 = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                    return (function (thisObject) {
                        if (p(h)) {
                            var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(consL.get_Head(), cons11);
                            return Pit.FSharp.Collections.ListModule.partitionToTailLeft(cons1)(p)(t);
                        } else {
                            return Pit.FSharp.Collections.ListModule.partitionTo(consL)(cons11)(p)(t);
                        }
                    })(thisObject);
                } else {
                    return {
                        Item1: consL,
                        Item2: new Pit.FSharp.Collections.FSharpList1.Empty()
                    };
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.partitionToTailRight = function (consR) {
    return function (p) {
        return function (l) {
            return (function (thisObject) {
                if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = l.get_Item2();
                    var h = l.get_Item1();
                    var cons11 = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                    return (function (thisObject) {
                        if (p(h)) {
                            var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(consR.get_Head(), cons11);
                            return Pit.FSharp.Collections.ListModule.partitionToTailRight(cons1)(p)(t);
                        } else {
                            return Pit.FSharp.Collections.ListModule.partitionTo(consR)(cons11)(p)(t);
                        }
                    })(thisObject);
                } else {
                    return {
                        Item1: consR,
                        Item2: new Pit.FSharp.Collections.FSharpList1.Empty()
                    };
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Partition = function (p) {
    return function (l) {
        return (function (thisObject) {
            if (l instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                return (function (thisObject) {
                    if (l.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                        var h = l.get_Item1();
                        return (function (thisObject) {
                            if (p(h)) {
                                return {
                                    Item1: l,
                                    Item2: new Pit.FSharp.Collections.FSharpList1.Empty()
                                };
                            } else {
                                return {
                                    Item1: new Pit.FSharp.Collections.FSharpList1.Empty(),
                                    Item2: l
                                };
                            }
                        })(thisObject);
                    } else {
                        var h = l.get_Item1();
                        var t = l.get_Item2();
                        var cons = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                        return (function (thisObject) {
                            if (p(h)) {
                                var patternInput = Pit.FSharp.Collections.ListModule.partitionToTailLeft(cons)(p)(t);
                                var consL = patternInput.Item1;
                                return {
                                    Item1: cons,
                                    Item2: consL
                                };
                            } else {
                                var patternInput = Pit.FSharp.Collections.ListModule.partitionToTailRight(cons)(p)(t);
                                var consR = patternInput.Item2;
                                return {
                                    Item1: consR,
                                    Item2: cons
                                };
                            }
                        })(thisObject);
                    }
                })(thisObject);
            } else {
                return {
                    Item1: l,
                    Item2: l
                };
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.unzipTo = function (cons1a) {
    return function (cons1b) {
        return function (x) {
            return (function (thisObject) {
                if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = x.get_Item2();
                    var h2 = x.get_Item1().Item2;
                    var h1 = x.get_Item1().Item1;
                    var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1a.get_Head(), new Pit.FSharp.Collections.FSharpList1.Cons(h1, new Pit.FSharp.Collections.FSharpList1.Empty()));
                    var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1b.get_Head(), new Pit.FSharp.Collections.FSharpList1.Cons(h2, new Pit.FSharp.Collections.FSharpList1.Empty()));
                    return Pit.FSharp.Collections.ListModule.unzipTo(cons1)(cons2)(t);
                } else {
                    var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1a.get_Head(), new Pit.FSharp.Collections.FSharpList1.Empty());
                    var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1b.get_Head(), new Pit.FSharp.Collections.FSharpList1.Empty());
                    return {
                        Item1: cons1,
                        Item2: cons2
                    };
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Unzip = function (x) {
    return (function (thisObject) {
        if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
            var t = x.get_Item2();
            var h2 = x.get_Item1().Item2;
            var h1 = x.get_Item1().Item1;
            var res1a = new Pit.FSharp.Collections.FSharpList1.Cons(h1, new Pit.FSharp.Collections.FSharpList1.Empty());
            var res1b = new Pit.FSharp.Collections.FSharpList1.Cons(h2, new Pit.FSharp.Collections.FSharpList1.Empty());
            return Pit.FSharp.Collections.ListModule.unzipTo(res1a)(res1b)(t);
        } else {
            return {
                Item1: new Pit.FSharp.Collections.FSharpList1.Empty(),
                Item2: new Pit.FSharp.Collections.FSharpList1.Empty()
            };
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.unzipTo3 = function (cons1a) {
    return function (cons1b) {
        return function (cons1c) {
            return function (x) {
                return (function (thisObject) {
                    if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = x.get_Item2();
                        var h3 = x.get_Item1().Item3;
                        var h2 = x.get_Item1().Item2;
                        var h1 = x.get_Item1().Item1;
                        var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1a.get_Head(), new Pit.FSharp.Collections.FSharpList1.Cons(h1, new Pit.FSharp.Collections.FSharpList1.Empty()));
                        var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1b.get_Head(), new Pit.FSharp.Collections.FSharpList1.Cons(h2, new Pit.FSharp.Collections.FSharpList1.Empty()));
                        var cons3 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1c.get_Head(), new Pit.FSharp.Collections.FSharpList1.Cons(h3, new Pit.FSharp.Collections.FSharpList1.Empty()));
                        return Pit.FSharp.Collections.ListModule.unzipTo3(cons1)(cons2)(cons3)(t);
                    } else {
                        var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1a.get_Head(), new Pit.FSharp.Collections.FSharpList1.Empty());
                        var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1b.get_Head(), new Pit.FSharp.Collections.FSharpList1.Empty());
                        var cons3 = new Pit.FSharp.Collections.FSharpList1.Cons(cons1c.get_Head(), new Pit.FSharp.Collections.FSharpList1.Empty());
                        return {
                            Item1: cons1,
                            Item2: cons2,
                            Item3: cons3
                        };
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.Unzip3 = function (x) {
    return (function (thisObject) {
        if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
            var t = x.get_Item2();
            var h3 = x.get_Item1().Item3;
            var h2 = x.get_Item1().Item2;
            var h1 = x.get_Item1().Item1;
            var res1a = new Pit.FSharp.Collections.FSharpList1.Cons(h1, new Pit.FSharp.Collections.FSharpList1.Empty());
            var res1b = new Pit.FSharp.Collections.FSharpList1.Cons(h2, new Pit.FSharp.Collections.FSharpList1.Empty());
            var res1c = new Pit.FSharp.Collections.FSharpList1.Cons(h3, new Pit.FSharp.Collections.FSharpList1.Empty());
            return Pit.FSharp.Collections.ListModule.unzipTo3(res1a)(res1b)(res1c)(t);
        } else {
            return {
                Item1: new Pit.FSharp.Collections.FSharpList1.Empty(),
                Item2: new Pit.FSharp.Collections.FSharpList1.Empty(),
                Item3: new Pit.FSharp.Collections.FSharpList1.Empty()
            };
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.Permute = function (f) {
    return function (list) {
        var array = Pit.FSharp.Collections.ListModule.ToArray(list);
        var res = Pit.FSharp.Collections.ArrayModule.Permute(f)(array);
        return Pit.FSharp.Collections.ListModule.OfArray(res);
    };
};
Pit.FSharp.Collections.ListModule.zipTo = function (cons) {
    return function (xs1) {
        return function (xs2) {
            var matchValue = {
                Item1: xs1,
                Item2: xs2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            var h1 = matchValue.Item1.get_Item1();
                            var h2 = matchValue.Item2.get_Item1();
                            var t1 = matchValue.Item1.get_Item2();
                            var t2 = matchValue.Item2.get_Item2();
                            var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons({
                                Item1: h1,
                                Item2: h2
                            },
                            new Pit.FSharp.Collections.FSharpList1.Empty());
                            var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                            return Pit.FSharp.Collections.ListModule.zipTo(cons1)(t1)(t2);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return cons;
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Zip = function (xs1) {
    return function (xs2) {
        var matchValue = {
            Item1: xs1,
            Item2: xs2
        };
        return (function (thisObject) {
            if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                return (function (thisObject) {
                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var h1 = matchValue.Item1.get_Item1();
                        var h2 = matchValue.Item2.get_Item1();
                        var t1 = matchValue.Item1.get_Item2();
                        var t2 = matchValue.Item2.get_Item2();
                        var res = new Pit.FSharp.Collections.FSharpList1.Cons({
                            Item1: h1,
                            Item2: h2
                        },
                        new Pit.FSharp.Collections.FSharpList1.Empty());
                        return Pit.FSharp.Collections.ListModule.zipTo(res)(t1)(t2);
                    } else {
                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                    }
                })(thisObject);
            } else {
                return (function (thisObject) {
                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                        return new Pit.FSharp.Collections.FSharpList1.Empty();
                    } else {
                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.zipTo3 = function (cons) {
    return function (xs1) {
        return function (xs2) {
            return function (xs3) {
                var matchValue = {
                    Item1: xs1,
                    Item2: xs2,
                    Item3: xs3
                };
                return (function (thisObject) {
                    if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                return (function (thisObject) {
                                    if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                        var h1 = matchValue.Item1.get_Item1();
                                        var h2 = matchValue.Item2.get_Item1();
                                        var h3 = matchValue.Item3.get_Item1();
                                        var t1 = matchValue.Item1.get_Item2();
                                        var t2 = matchValue.Item2.get_Item2();
                                        var t3 = matchValue.Item3.get_Item2();
                                        var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons({
                                            Item1: h1,
                                            Item2: h2,
                                            Item3: h3
                                        },
                                        new Pit.FSharp.Collections.FSharpList1.Empty());
                                        var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                                        return Pit.FSharp.Collections.ListModule.zipTo3(cons1)(t1)(t2)(t3);
                                    } else {
                                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                return (function (thisObject) {
                                    if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                        return cons;
                                    } else {
                                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.Zip3 = function (xs1) {
    return function (xs2) {
        return function (xs3) {
            var matchValue = {
                Item1: xs1,
                Item2: xs2,
                Item3: xs3
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    var h1 = matchValue.Item1.get_Item1();
                                    var h2 = matchValue.Item2.get_Item1();
                                    var h3 = matchValue.Item3.get_Item1();
                                    var t1 = matchValue.Item1.get_Item2();
                                    var t2 = matchValue.Item2.get_Item2();
                                    var t3 = matchValue.Item3.get_Item2();
                                    var res = new Pit.FSharp.Collections.FSharpList1.Cons({
                                        Item1: h1,
                                        Item2: h2,
                                        Item3: h3
                                    },
                                    new Pit.FSharp.Collections.FSharpList1.Empty());
                                    return Pit.FSharp.Collections.ListModule.zipTo3(res)(t1)(t2)(t3);
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return (function (thisObject) {
                                if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                    return new Pit.FSharp.Collections.FSharpList1.Empty();
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Sum = function (list) {
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (l) {
        return Pit.FSharp.Collections.ListModule.ToArray(l);
    }))(function (array) {
        return Pit.FSharp.Collections.ArrayModule.Sum(array);
    });
};
Pit.FSharp.Collections.ListModule.SumBy = function (f) {
    return function (list) {
        var s = 0;
        Pit.FSharp.Core.Operators.op_PipeRight(list)(function (x) {
            return Pit.FSharp.Collections.ListModule.Iterate(function (i) {
                var t = f(i);
                return s = (t + s);
            })(x);
        });
        return s;
    };
};
Pit.FSharp.Collections.ListModule.Max = function (list) {
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (l) {
        return Pit.FSharp.Collections.ListModule.ToArray(l);
    }))(function (array) {
        return Pit.FSharp.Collections.ArrayModule.Max(array);
    });
};
Pit.FSharp.Collections.ListModule.MaxBy = function (f) {
    return function (list) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (l) {
            return Pit.FSharp.Collections.ListModule.ToArray(l);
        }))(function (array) {
            return Pit.FSharp.Collections.ArrayModule.MaxBy(f)(array);
        });
    };
};
Pit.FSharp.Collections.ListModule.Min = function (list) {
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (l) {
        return Pit.FSharp.Collections.ListModule.ToArray(l);
    }))(function (array) {
        return Pit.FSharp.Collections.ArrayModule.Min(array);
    });
};
Pit.FSharp.Collections.ListModule.MinBy = function (f) {
    return function (list) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(list)(function (l) {
            return Pit.FSharp.Collections.ListModule.ToArray(l);
        }))(function (array) {
            return Pit.FSharp.Collections.ArrayModule.MinBy(f)(array);
        });
    };
};
Pit.FSharp.Collections.ListModule.Average = function (list) {
    var acc = Pit.FSharp.Collections.ListModule.Sum(list);
    return (acc / list.get_Length());
};
Pit.FSharp.Collections.ListModule.AverageBy = function (f) {
    return function (list) {
        var acc = Pit.FSharp.Collections.ListModule.SumBy(f)(list);
        return (acc / list.get_Length());
    };
};
Pit.FSharp.Collections.ListModule.SortWith = function (cmp) {
    return function (xs) {
        var e = Pit.FSharp.Core.Operators.op_PipeRight(xs)(function (l) {
            return Pit.FSharp.Collections.ListModule.ToArray(l);
        });
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Collections.ArrayModule.SortWith(cmp)(e))(function (arr) {
            return Pit.FSharp.Collections.ListModule.OfArray(arr);
        });
    };
};
Pit.FSharp.Collections.ListModule.SortBy = function (f) {
    return function (xs) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(xs)(function (list) {
            return Pit.FSharp.Collections.ListModule.ToArray(list);
        }))(function (array) {
            return Pit.FSharp.Collections.ArrayModule.SortBy(f)(array);
        }))(function (array) {
            return Pit.FSharp.Collections.ListModule.OfArray(array);
        });
    };
};
Pit.FSharp.Collections.ListModule.Sort = function (xs) {
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(xs)(function (list) {
        return Pit.FSharp.Collections.ListModule.ToArray(list);
    }))(function (array) {
        return Pit.FSharp.Collections.ArrayModule.Sort(array);
    }))(function (array) {
        return Pit.FSharp.Collections.ListModule.OfArray(array);
    });
};
Pit.FSharp.Collections.ListModule.Empty = function () {
    return new Pit.FSharp.Collections.FSharpList1.Empty();
};
Pit.FSharp.Collections.ListModule.Length = function (l) {
    return l.get_Length();
};
Pit.FSharp.Collections.ListModule.revAcc = function (xs) {
    return function (acc) {
        return (function (thisObject) {
            if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = xs.get_Item2();
                var h = xs.get_Item1();
                return Pit.FSharp.Collections.ListModule.revAcc(t)(new Pit.FSharp.Collections.FSharpList1.Cons(h, acc));
            } else {
                return acc;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.Reverse = function (xs) {
    return (function (thisObject) {
        if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
            return (function (thisObject) {
                if (xs.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var h1 = xs.get_Item1();
                    var h2 = xs.get_Item2().get_Item1();
                    var t = xs.get_Item2().get_Item2();
                    return Pit.FSharp.Collections.ListModule.revAcc(t)(new Pit.FSharp.Collections.FSharpList1.Cons(h2, new Pit.FSharp.Collections.FSharpList1.Cons(h1, new Pit.FSharp.Collections.FSharpList1.Empty())));
                } else {
                    return xs;
                }
            })(thisObject);
        } else {
            return xs;
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.ToArray = function (l) {
    var len = l.get_Length();
    var res = Pit.FSharp.Collections.ArrayModule.ZeroCreate(len);
    var loop = function (i) {
        return function (l1) {
            return (function (thisObject) {
                if (l1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = l1.get_Item2();
                    var h = l1.get_Item1();
                    res[i] = h;
                    return loop((i + 1))(t);
                } else {
                    return null;
                }
            })(this);
        };
    };
    loop(0)(l);
    return res;
};
Pit.FSharp.Collections.ListModule.OfArray = function (arr) {
    var len = arr.get_Length();
    var res = new Pit.FSharp.Collections.FSharpList1.Empty();
    var i = (len - 1);
    while (i >= 0) {
        res = new Pit.FSharp.Collections.FSharpList1.Cons(arr[i], res);
        i = (i - 1);
    };
    return res;
};
Pit.FSharp.Collections.ListModule.ForAll = function (f) {
    return function (xs1) {
        return (function (thisObject) {
            if (xs1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t1 = xs1.get_Item2();
                var h1 = xs1.get_Item1();
                return (function (thisObject) {
                    if (f(h1)) {
                        return Pit.FSharp.Collections.ListModule.ForAll(f)(t1);
                    } else {
                        return false;
                    }
                })(thisObject);
            } else {
                return true;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.forall2aux = function (f) {
    return function (list1) {
        return function (list2) {
            var matchValue = {
                Item1: list1,
                Item2: list2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            var h1 = matchValue.Item1.get_Item1();
                            var h2 = matchValue.Item2.get_Item1();
                            var t1 = matchValue.Item1.get_Item2();
                            var t2 = matchValue.Item2.get_Item2();
                            return (function (thisObject) {
                                if (f(h1)(h2)) {
                                    return Pit.FSharp.Collections.ListModule.forall2aux(f)(t1)(t2);
                                } else {
                                    return false;
                                }
                            })(thisObject);
                        } else {
                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return true;
                        } else {
                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.ForAll2 = function (f) {
    return function (list1) {
        return function (list2) {
            var matchValue = {
                Item1: list1,
                Item2: list2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return true;
                        } else {
                            return Pit.FSharp.Collections.ListModule.forall2aux(f)(list1)(list2);
                        }
                    })(thisObject);
                } else {
                    return Pit.FSharp.Collections.ListModule.forall2aux(f)(list1)(list2);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Exists = function (f) {
    return function (xs1) {
        return (function (thisObject) {
            if (xs1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t1 = xs1.get_Item2();
                var h1 = xs1.get_Item1();
                return (function (thisObject) {
                    if (f(h1)) {
                        return true;
                    } else {
                        return Pit.FSharp.Collections.ListModule.Exists(f)(t1);
                    }
                })(thisObject);
            } else {
                return false;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.exists2aux = function (f) {
    return function (list1) {
        return function (list2) {
            var matchValue = {
                Item1: list1,
                Item2: list2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            var h1 = matchValue.Item1.get_Item1();
                            var h2 = matchValue.Item2.get_Item1();
                            var t1 = matchValue.Item1.get_Item2();
                            var t2 = matchValue.Item2.get_Item2();
                            return (function (thisObject) {
                                if (f(h1)(h2)) {
                                    return true;
                                } else {
                                    return Pit.FSharp.Collections.ListModule.exists2aux(f)(t1)(t2);
                                }
                            })(thisObject);
                        } else {
                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return false;
                        } else {
                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Exists2 = function (f) {
    return function (list1) {
        return function (list2) {
            var matchValue = {
                Item1: list1,
                Item2: list2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return false;
                        } else {
                            return Pit.FSharp.Collections.ListModule.exists2aux(f)(list1)(list2);
                        }
                    })(thisObject);
                } else {
                    return Pit.FSharp.Collections.ListModule.exists2aux(f)(list1)(list2);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Find = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = list.get_Item2();
                var h = list.get_Item1();
                return (function (thisObject) {
                    if (f(h)) {
                        return h;
                    } else {
                        return Pit.FSharp.Collections.ListModule.Find(f)(t);
                    }
                })(thisObject);
            } else {
                throw Pit.ArgumentException.ctors[0]("Key not found")
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.TryFind = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = list.get_Item2();
                var h = list.get_Item1();
                return (function (thisObject) {
                    if (f(h)) {
                        return new Pit.FSharp.Core.FSharpOption1.Some(h);
                    } else {
                        return Pit.FSharp.Collections.ListModule.TryFind(f)(t);
                    }
                })(thisObject);
            } else {
                return new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.TryPick = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = list.get_Item2();
                var h = list.get_Item1();
                var matchValue = f(h);
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                        return Pit.FSharp.Collections.ListModule.TryPick(f)(t);
                    } else {
                        var r = matchValue;
                        return r;
                    }
                })(thisObject);
            } else {
                return new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.Pick = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = list.get_Item2();
                var h = list.get_Item1();
                var matchValue = f(h);
                return (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                        var r = matchValue.get_Value();
                        return r;
                    } else {
                        return Pit.FSharp.Collections.ListModule.Pick(f)(t);
                    }
                })(thisObject);
            } else {
                throw Pit.ArgumentException.ctors[0]("Key not found")
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.TryFindIndex = function (f) {
    return function (list) {
        var loop = function (n) {
            return function (_arg1) {
                return (function (thisObject) {
                    if (_arg1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = _arg1.get_Item2();
                        var h = _arg1.get_Item1();
                        return (function (thisObject) {
                            if (f(h)) {
                                return new Pit.FSharp.Core.FSharpOption1.Some(n);
                            } else {
                                return loop((n + 1))(t);
                            }
                        })(thisObject);
                    } else {
                        return new Pit.FSharp.Core.FSharpOption1.None();
                    }
                })(this);
            };
        };
        return loop(0)(list);
    };
};
Pit.FSharp.Collections.ListModule.FindIndex = function (f) {
    return function (list) {
        var loop = function (n) {
            return function (_arg1) {
                return (function (thisObject) {
                    if (_arg1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = _arg1.get_Item2();
                        var h = _arg1.get_Item1();
                        return (function (thisObject) {
                            if (f(h)) {
                                return n;
                            } else {
                                return loop((n + 1))(t);
                            }
                        })(thisObject);
                    } else {
                        throw Pit.ArgumentException.ctors[0]("Key not found")
                    }
                })(this);
            };
        };
        return loop(0)(list);
    };
};
Pit.FSharp.Collections.ListModule.IterateIndexed = function (f) {
    return function (x) {
        var loop = function (n) {
            return function (x1) {
                return (function (thisObject) {
                    if (x1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = x1.get_Item2();
                        var h = x1.get_Item1();
                        f(n)(h);
                        return loop((n + 1))(t);
                    } else {
                        return null;
                    }
                })(this);
            };
        };
        return loop(0)(x);
    };
};
Pit.FSharp.Collections.ListModule.Iterate = function (f) {
    return function (x) {
        var iter = function (x1) {
            return (function (thisObject) {
                if (x1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = x1.get_Item2();
                    var h = x1.get_Item1();
                    f(h);
                    return iter(t);
                } else {
                    return null;
                }
            })(this);
        };
        return iter(x);
    };
};
Pit.FSharp.Collections.ListModule.Iterate2 = function (f) {
    return function (x1) {
        return function (x2) {
            var loop = function (list1) {
                return function (list2) {
                    var matchValue = {
                        Item1: list1,
                        Item2: list2
                    };
                    return (function (thisObject) {
                        if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    var h1 = matchValue.Item1.get_Item1();
                                    var h2 = matchValue.Item2.get_Item1();
                                    var t1 = matchValue.Item1.get_Item2();
                                    var t2 = matchValue.Item2.get_Item2();
                                    f(h1)(h2);
                                    return loop(t1)(t2);
                                } else {
                                    throw Pit.ArgumentException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        } else {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                    return null;
                                } else {
                                    throw Pit.ArgumentException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        }
                    })(this);
                };
            };
            return loop(x1)(x2);
        };
    };
};
Pit.FSharp.Collections.ListModule.IterateIndexed2 = function (f) {
    return function (list1) {
        return function (list2) {
            var loop = function (n) {
                return function (list12) {
                    return function (list21) {
                        var matchValue = {
                            Item1: list12,
                            Item2: list21
                        };
                        return (function (thisObject) {
                            if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                return (function (thisObject) {
                                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                        var h1 = matchValue.Item1.get_Item1();
                                        var h2 = matchValue.Item2.get_Item1();
                                        var t1 = matchValue.Item1.get_Item2();
                                        var t2 = matchValue.Item2.get_Item2();
                                        f(n)(h1)(h2);
                                        return loop((n + 1))(t1)(t2);
                                    } else {
                                        throw Pit.ArgumentException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            } else {
                                return (function (thisObject) {
                                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                        return null;
                                    } else {
                                        throw Pit.ArgumentException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            }
                        })(this);
                    };
                };
            };
            return loop(list1)(list2);
        };
    };
};
Pit.FSharp.Collections.ListModule.Head = function (list) {
    return (function (thisObject) {
        if (list instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
            throw Pit.ArgumentException.ctors[0]("List was empty")
        } else {
            var x = list.get_Item1();
            return x;
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.Tail = function (list) {
    return (function (thisObject) {
        if (list instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
            throw Pit.ArgumentException.ctors[0]("List was empty")
        } else {
            var t = list.get_Item2();
            return t;
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.IsEmpty = function (list) {
    return (function (thisObject) {
        if (list instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
            return true;
        } else {
            return false;
        }
    })(this);
};
Pit.FSharp.Collections.ListModule.initConstAcc = function (n) {
    return function (x) {
        return function (acc) {
            return (function (thisObject) {
                if (n <= 0) {
                    return acc;
                } else {
                    return Pit.FSharp.Collections.ListModule.initConstAcc((n - 1))(x)(new Pit.FSharp.Collections.FSharpList1.Cons(x, acc));
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Replicate = function (count) {
    return function (x) {
        (function (thisObject) {
            if (count < 0) {
                throw Pit.ArgumentException.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        return Pit.FSharp.Collections.ListModule.initConstAcc(count)(x)(new Pit.FSharp.Collections.FSharpList1.Empty());
    };
};
Pit.FSharp.Collections.ListModule.initTo = function (cons) {
    return function (i) {
        return function (n) {
            return function (f) {
                return (function (thisObject) {
                    if (i < n) {
                        var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(i), new Pit.FSharp.Collections.FSharpList1.Empty());
                        var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                        return Pit.FSharp.Collections.ListModule.initTo(cons1)((i + 1))(n)(f);
                    } else {
                        return cons;
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.Initialize = function (count) {
    return function (f) {
        return (function (thisObject) {
            if (count < 0) {
                throw Pit.ArgumentException.ctors[0]("Count must be non negative string")
            } else {
                return (function (thisObject) {
                    if (count == 0) {
                        return new Pit.FSharp.Collections.FSharpList1.Empty();
                    } else {
                        var res = new Pit.FSharp.Collections.FSharpList1.Cons(f(0), new Pit.FSharp.Collections.FSharpList1.Empty());
                        return Pit.FSharp.Collections.ListModule.initTo(res)(1)(count)(f);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.mapTo = function (cons) {
    return function (f) {
        return function (x) {
            return (function (thisObject) {
                if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = x.get_Item2();
                    var h = x.get_Item1();
                    var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                    var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                    return Pit.FSharp.Collections.ListModule.mapTo(cons1)(f)(t);
                } else {
                    return cons;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Map = function (f) {
    return function (xs) {
        return (function (thisObject) {
            if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                return (function (thisObject) {
                    if (xs.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                        var h = xs.get_Item1();
                        return new Pit.FSharp.Collections.FSharpList1.Cons(f(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                    } else {
                        var h = xs.get_Item1();
                        var t = xs.get_Item2();
                        var cons = new Pit.FSharp.Collections.FSharpList1.Cons(f(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                        return Pit.FSharp.Collections.ListModule.mapTo(cons)(f)(t);
                    }
                })(thisObject);
            } else {
                return new Pit.FSharp.Collections.FSharpList1.Empty();
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.mapiTo = function (cons) {
    return function (f) {
        return function (x) {
            return function (i) {
                return (function (thisObject) {
                    if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        var t = x.get_Item2();
                        var h = x.get_Item1();
                        var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(i)(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                        var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                        return Pit.FSharp.Collections.ListModule.mapiTo(cons1)(f)(t)((i + 1));
                    } else {
                        return cons;
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.MapIndexed = function (f) {
    return function (x) {
        return (function (thisObject) {
            if (x instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                return (function (thisObject) {
                    if (x.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                        var h = x.get_Item1();
                        return new Pit.FSharp.Collections.FSharpList1.Cons(f(0)(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                    } else {
                        var h = x.get_Item1();
                        var t = x.get_Item2();
                        var cons = new Pit.FSharp.Collections.FSharpList1.Cons(f(0)(h), new Pit.FSharp.Collections.FSharpList1.Empty());
                        return Pit.FSharp.Collections.ListModule.mapiTo(cons)(f)(t)(1);
                    }
                })(thisObject);
            } else {
                return new Pit.FSharp.Collections.FSharpList1.Empty();
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.map2To = function (cons) {
    return function (f) {
        return function (xs1) {
            return function (xs2) {
                var matchValue = {
                    Item1: xs1,
                    Item2: xs2
                };
                return (function (thisObject) {
                    if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                var h1 = matchValue.Item1.get_Item1();
                                var h2 = matchValue.Item2.get_Item1();
                                var t1 = matchValue.Item1.get_Item2();
                                var t2 = matchValue.Item2.get_Item2();
                                var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(h1)(h2), new Pit.FSharp.Collections.FSharpList1.Empty());
                                var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                                return Pit.FSharp.Collections.ListModule.map2To(cons1)(f)(t1)(t2);
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                return cons;
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.Map2 = function (f) {
    return function (xs1) {
        return function (xs2) {
            var matchValue = {
                Item1: xs1,
                Item2: xs2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            var h1 = matchValue.Item1.get_Item1();
                            var h2 = matchValue.Item2.get_Item1();
                            var t1 = matchValue.Item1.get_Item2();
                            var t2 = matchValue.Item2.get_Item2();
                            var cons = new Pit.FSharp.Collections.FSharpList1.Cons(f(h1)(h2), new Pit.FSharp.Collections.FSharpList1.Empty());
                            return Pit.FSharp.Collections.ListModule.map2To(cons)(f)(t1)(t2);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return new Pit.FSharp.Collections.FSharpList1.Empty();
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.map3To = function (cons) {
    return function (f) {
        return function (xs1) {
            return function (xs2) {
                return function (xs3) {
                    var matchValue = {
                        Item1: xs1,
                        Item2: xs2,
                        Item3: xs3
                    };
                    return (function (thisObject) {
                        if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    return (function (thisObject) {
                                        if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                            var h1 = matchValue.Item1.get_Item1();
                                            var h2 = matchValue.Item2.get_Item1();
                                            var h3 = matchValue.Item3.get_Item1();
                                            var t1 = matchValue.Item1.get_Item2();
                                            var t2 = matchValue.Item2.get_Item2();
                                            var t3 = matchValue.Item3.get_Item2();
                                            var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(h1)(h2)(h3), new Pit.FSharp.Collections.FSharpList1.Empty());
                                            var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                                            return Pit.FSharp.Collections.ListModule.map3To(cons1)(f)(t1)(t2)(t3);
                                        } else {
                                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                        }
                                    })(thisObject);
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        } else {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                    return (function (thisObject) {
                                        if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                            return cons;
                                        } else {
                                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                        }
                                    })(thisObject);
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        }
                    })(this);
                };
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.Map3 = function (f) {
    return function (xs1) {
        return function (xs2) {
            return function (xs3) {
                var matchValue = {
                    Item1: xs1,
                    Item2: xs2,
                    Item3: xs3
                };
                return (function (thisObject) {
                    if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                return (function (thisObject) {
                                    if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                        var h1 = matchValue.Item1.get_Item1();
                                        var h2 = matchValue.Item2.get_Item1();
                                        var h3 = matchValue.Item3.get_Item1();
                                        var t1 = matchValue.Item1.get_Item2();
                                        var t2 = matchValue.Item2.get_Item2();
                                        var t3 = matchValue.Item3.get_Item2();
                                        var cons = new Pit.FSharp.Collections.FSharpList1.Cons(f(h1)(h2)(h3), new Pit.FSharp.Collections.FSharpList1.Empty());
                                        return Pit.FSharp.Collections.ListModule.map3To(cons)(f)(t1)(t2)(t3);
                                    } else {
                                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                return (function (thisObject) {
                                    if (matchValue.Item3 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                        return new Pit.FSharp.Collections.FSharpList1.Empty();
                                    } else {
                                        throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                    }
                                })(thisObject);
                            } else {
                                throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.mapi2To = function (cons) {
    return function (f) {
        return function (xs1) {
            return function (xs2) {
                return function (i) {
                    var matchValue = {
                        Item1: xs1,
                        Item2: xs2
                    };
                    return (function (thisObject) {
                        if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    var h1 = matchValue.Item1.get_Item1();
                                    var h2 = matchValue.Item2.get_Item1();
                                    var t1 = matchValue.Item1.get_Item2();
                                    var t2 = matchValue.Item2.get_Item2();
                                    var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(f(i)(h1)(h2), new Pit.FSharp.Collections.FSharpList1.Empty());
                                    var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                                    return Pit.FSharp.Collections.ListModule.mapi2To(cons1)(f)(t1)(t2)((i + 1));
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        } else {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                    return cons;
                                } else {
                                    throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                                }
                            })(thisObject);
                        }
                    })(this);
                };
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.MapIndexed2 = function (f) {
    return function (list1) {
        return function (list2) {
            var matchValue = {
                Item1: list1,
                Item2: list2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            var h1 = matchValue.Item1.get_Item1();
                            var h2 = matchValue.Item2.get_Item1();
                            var t1 = matchValue.Item1.get_Item2();
                            var t2 = matchValue.Item2.get_Item2();
                            var cons = new Pit.FSharp.Collections.FSharpList1.Cons(f(0)(h1)(h2), new Pit.FSharp.Collections.FSharpList1.Empty());
                            return Pit.FSharp.Collections.ListModule.mapi2To(cons)(f)(t1)(t2)(1);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            return new Pit.FSharp.Collections.FSharpList1.Empty();
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Lists have different lengths")
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Fold = function (f) {
    return function (s) {
        return function (list) {
            return (function (thisObject) {
                if (list instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                    return s;
                } else {
                    var loop = function (s1) {
                        return function (xs) {
                            return (function (thisObject) {
                                if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    var t = xs.get_Item2();
                                    var h = xs.get_Item1();
                                    return loop(f(s1)(h))(t);
                                } else {
                                    return s1;
                                }
                            })(thisObject);
                        };
                    };
                    return loop(s)(list);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.Reduce = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = list.get_Item2();
                var h = list.get_Item1();
                return Pit.FSharp.Collections.ListModule.Fold(f)(h)(t);
            } else {
                throw Pit.ArgumentException.ctors[0]("Input List is empty")
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.Scan = function (f) {
    return function (s) {
        return function (list) {
            var loop = function (s1) {
                return function (xs) {
                    return function (acc) {
                        return (function (thisObject) {
                            if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                var t = xs.get_Item2();
                                var h = xs.get_Item1();
                                var s12 = f({
                                    Item1: s1,
                                    Item2: h
                                });
                                return loop(s12)(t)(new Pit.FSharp.Collections.FSharpList1.Cons(s12, acc));
                            } else {
                                return Pit.FSharp.Collections.ListModule.Reverse(acc);
                            }
                        })(this);
                    };
                };
            };
            return loop(s)(list)(new Pit.FSharp.Collections.FSharpList1.Cons(s, new Pit.FSharp.Collections.FSharpList1.Empty()));
        };
    };
};
Pit.FSharp.Collections.ListModule.Fold2 = function (f) {
    return function (acc) {
        return function (list1) {
            return function (list2) {
                var loop = function (acc1) {
                    return function (list12) {
                        return function (list21) {
                            var matchValue = {
                                Item1: list12,
                                Item2: list21
                            };
                            return (function (thisObject) {
                                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    return (function (thisObject) {
                                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                            var h1 = matchValue.Item1.get_Item1();
                                            var h2 = matchValue.Item2.get_Item1();
                                            var t1 = matchValue.Item1.get_Item2();
                                            var t2 = matchValue.Item2.get_Item2();
                                            return loop(f(acc1)(h1)(h2))(t1)(t2);
                                        } else {
                                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                                        }
                                    })(thisObject);
                                } else {
                                    return (function (thisObject) {
                                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                            return acc1;
                                        } else {
                                            throw Pit.ArgumentException.ctors[0]("List had different lengths")
                                        }
                                    })(thisObject);
                                }
                            })(this);
                        };
                    };
                };
                return loop(acc)(list1)(list2);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.foldArraySubRight = function (f) {
    return function (arr) {
        return function (start) {
            return function (fin) {
                return function (acc) {
                    var state = acc;
                    var i = fin;
                    while (i >= start) {
                        state = f(arr[i])(state);
                        i = (i - 1);
                    };
                    return state;
                };
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.FoldBack = function (f) {
    return function (list) {
        return function (acc) {
            return (function (thisObject) {
                if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (list.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (list.get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                    return (function (thisObject) {
                                        if (list.get_Item2().get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                            return (function (thisObject) {
                                                if (list.get_Item2().get_Item2().get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                    var h1 = list.get_Item1();
                                                    var h2 = list.get_Item2().get_Item1();
                                                    var h3 = list.get_Item2().get_Item2().get_Item1();
                                                    var h4 = list.get_Item2().get_Item2().get_Item2().get_Item1();
                                                    return f(h1)(f(h2)(f(h3)(f(h4)(acc))));
                                                } else {
                                                    var arr = Pit.FSharp.Collections.ListModule.ToArray(list);
                                                    var arrn = arr.get_Length();
                                                    return Pit.FSharp.Collections.ListModule.foldArraySubRight(f)(arr)(0)((arrn - 1))(acc);
                                                }
                                            })(thisObject);
                                        } else {
                                            var h1 = list.get_Item1();
                                            var h2 = list.get_Item2().get_Item1();
                                            var h3 = list.get_Item2().get_Item2().get_Item1();
                                            return f(h1)(f(h2)(f(h3)(acc)));
                                        }
                                    })(thisObject);
                                } else {
                                    var h1 = list.get_Item1();
                                    var h2 = list.get_Item2().get_Item1();
                                    return f(h1)(f(h2)(acc));
                                }
                            })(thisObject);
                        } else {
                            var h = list.get_Item1();
                            return f(h)(acc);
                        }
                    })(thisObject);
                } else {
                    return acc;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.ReduceBack = function (f) {
    return function (list) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                throw Pit.ArgumentException.ctors[0]("List had different lengths")
            } else {
                var arr = Pit.FSharp.Collections.ListModule.ToArray(list);
                var arrn = arr.get_Length();
                return Pit.FSharp.Collections.ListModule.foldArraySubRight(f)(arr)(0)((arrn - 2))(arr[(arrn - 1)]);
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.scanArraySubRight = function (f) {
    return function (arr) {
        return function (start) {
            return function (fin) {
                return function (initState) {
                    var state = initState;
                    var res = new Pit.FSharp.Collections.FSharpList1.Cons(state, new Pit.FSharp.Collections.FSharpList1.Empty());
                    var i = fin;
                    while (i >= start) {
                        state = f(arr[i])(state);
                        res = new Pit.FSharp.Collections.FSharpList1.Cons(state, res);
                        i = (i - 1);
                    };
                    return res;
                };
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.ScanBack = function (f) {
    return function (list) {
        return function (s) {
            return (function (thisObject) {
                if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (list.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                            var h = list.get_Item1();
                            return new Pit.FSharp.Collections.FSharpList1.Cons(f(h)(s), new Pit.FSharp.Collections.FSharpList1.Cons(s, new Pit.FSharp.Collections.FSharpList1.Empty()));
                        } else {
                            var arr = Pit.FSharp.Collections.ListModule.ToArray(list);
                            var arrn = arr.get_Length();
                            return Pit.FSharp.Collections.ListModule.scanArraySubRight(f)(arr)(0)((arrn - 1))(s);
                        }
                    })(thisObject);
                } else {
                    return new Pit.FSharp.Collections.FSharpList1.Cons(s, new Pit.FSharp.Collections.FSharpList1.Empty());
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ListModule.foldBack2UsingArrays = function (f) {
    return function (list1) {
        return function (list2) {
            return function (acc) {
                var arr1 = Pit.FSharp.Collections.ListModule.ToArray(list1);
                var arr2 = Pit.FSharp.Collections.ListModule.ToArray(list2);
                var n1 = arr1.get_Length();
                var n2 = arr2.get_Length();
                (function (thisObject) {
                    if (n1 != n2) {
                        throw Pit.ArgumentException.ctors[0]("List had different lengths")
                    } else {
                        return null;
                    }
                })(this);
                var res = acc;
                var i = n1;
                while (i >= 0) {
                    res = f(arr1[i])(arr2[i])(res);
                    i = (i - 1);
                };
                return res;
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.FoldBack2 = function (f) {
    return function (list1) {
        return function (list2) {
            return function (acc) {
                var matchValue = {
                    Item1: list1,
                    Item2: list2
                };
                return (function (thisObject) {
                    if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                var h1 = matchValue.Item1.get_Item1();
                                var k1 = matchValue.Item2.get_Item1();
                                var rest1 = matchValue.Item1.get_Item2();
                                var rest2 = matchValue.Item2.get_Item2();
                                var matchValue1 = {
                                    Item1: rest1,
                                    Item2: rest2
                                };
                                return (function (thisObject) {
                                    if (matchValue1.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                        return (function (thisObject) {
                                            if (matchValue1.Item1.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                return (function (thisObject) {
                                                    if (matchValue1.Item1.get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                        return (function (thisObject) {
                                                            if (matchValue1.Item1.get_Item2().get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                                return (function (thisObject) {
                                                                    if (matchValue1.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                                        return (function (thisObject) {
                                                                            if (matchValue1.Item2.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                                                return (function (thisObject) {
                                                                                    if (matchValue1.Item2.get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                                                        return (function (thisObject) {
                                                                                            if (matchValue1.Item2.get_Item2().get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                                                                var h2 = matchValue1.Item1.get_Item1();
                                                                                                var h3 = matchValue1.Item1.get_Item2().get_Item1();
                                                                                                var h4 = matchValue1.Item1.get_Item2().get_Item2().get_Item1();
                                                                                                var k2 = matchValue1.Item2.get_Item1();
                                                                                                var k3 = matchValue1.Item2.get_Item2().get_Item1();
                                                                                                var k4 = matchValue1.Item2.get_Item2().get_Item2().get_Item1();
                                                                                                return f(h1)(k1)(f(h2)(k2)(f(h3)(k3)(f(h4)(k4)(acc))));
                                                                                            } else {
                                                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                                            }
                                                                                        })(thisObject);
                                                                                    } else {
                                                                                        return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                                    }
                                                                                })(thisObject);
                                                                            } else {
                                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                            }
                                                                        })(thisObject);
                                                                    } else {
                                                                        return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                    }
                                                                })(thisObject);
                                                            } else {
                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                            }
                                                        })(thisObject);
                                                    } else {
                                                        return (function (thisObject) {
                                                            if (matchValue1.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                                return (function (thisObject) {
                                                                    if (matchValue1.Item2.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                                        return (function (thisObject) {
                                                                            if (matchValue1.Item2.get_Item2().get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                                                var h2 = matchValue1.Item1.get_Item1();
                                                                                var h3 = matchValue1.Item1.get_Item2().get_Item1();
                                                                                var k2 = matchValue1.Item2.get_Item1();
                                                                                var k3 = matchValue1.Item2.get_Item2().get_Item1();
                                                                                return f(h1)(k1)(f(h2)(k2)(f(h3)(k3)(acc)));
                                                                            } else {
                                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                            }
                                                                        })(thisObject);
                                                                    } else {
                                                                        return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                                    }
                                                                })(thisObject);
                                                            } else {
                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                            }
                                                        })(thisObject);
                                                    }
                                                })(thisObject);
                                            } else {
                                                return (function (thisObject) {
                                                    if (matchValue1.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                                                        return (function (thisObject) {
                                                            if (matchValue1.Item2.get_Item2() instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                                var h2 = matchValue1.Item1.get_Item1();
                                                                var k2 = matchValue1.Item2.get_Item1();
                                                                return f(h1)(k1)(f(h2)(k2)(acc));
                                                            } else {
                                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                            }
                                                        })(thisObject);
                                                    } else {
                                                        return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                                    }
                                                })(thisObject);
                                            }
                                        })(thisObject);
                                    } else {
                                        return (function (thisObject) {
                                            if (matchValue1.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                                return f(h1)(k1)(acc);
                                            } else {
                                                return Pit.FSharp.Collections.ListModule.foldBack2UsingArrays(f)(list1)(list2)(acc);
                                            }
                                        })(thisObject);
                                    }
                                })(thisObject);
                            } else {
                                throw Pit.ArgumentException.ctors[0]("List had different lengths")
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                                return acc;
                            } else {
                                throw Pit.ArgumentException.ctors[0]("List had different lengths")
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ListModule.appendTo = function (cons) {
    return function (xs) {
        return (function (thisObject) {
            if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var t = xs.get_Item2();
                var h = xs.get_Item1();
                var cons2 = new Pit.FSharp.Collections.FSharpList1.Cons(h, new Pit.FSharp.Collections.FSharpList1.Empty());
                var cons1 = new Pit.FSharp.Collections.FSharpList1.Cons(cons.get_Head(), cons2);
                return Pit.FSharp.Collections.ListModule.appendTo(cons1)(t);
            } else {
                return cons;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.Append = function (list1) {
    return function (list2) {
        return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Collections.SeqModule.Append(list1)(list2))(function (source) {
            return Pit.FSharp.Collections.SeqModule.ToList(source);
        });
    };
};
Pit.FSharp.Collections.ListModule.Get = function (list) {
    return function (index) {
        return (function (thisObject) {
            if (list instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                var h = list.get_Item1();
                var t = list.get_Item2();
                return (function () {
                    return (function (thisObject) {
                        var h = list.get_Item1();
                        var t = list.get_Item2();
                        if (index >= 0) {
                            return (function (thisObject) {
                                if (index == 0) {
                                    return h;
                                } else {
                                    return Pit.FSharp.Collections.ListModule.Get(t)((index - 1));
                                }
                            })(thisObject);
                        } else {
                            throw Pit.InvalidOperationException.ctors[0]("Index Out of bounds")
                        };
                    })(thisObject);
                })();
            } else {
                throw Pit.InvalidOperationException.ctors[0]("Index Out of bounds")
            }
        })(this);
    };
};
Pit.FSharp.Collections.ListModule.chooseAllAcc = function (f) {
    return function (xs) {
        return function (acc) {
            return (function (thisObject) {
                if (xs instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    var t = xs.get_Item2();
                    var h = xs.get_Item1();
                    var matchValue = f(h);
                    return (function (thisObject) {
                        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                            var x = matchValue.get_Value();
                            return Pit.FSharp.Collections.ListModule.chooseAllAcc(f)(t)(new Pit.FSharp.Collections.FSharpList1.Cons(x, acc));
                        } else {
                            return Pit.FSharp.Collections.ListModule.chooseAllAcc(f)(t)(acc);
                        }
                    })(thisObject);
                } else {
                    return Pit.FSharp.Collections.ListModule.Reverse(acc);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.Array2DModule.checkNonNull = function (argName) {
    return function (arg) {
        var matchValue = arg;
        return (function (thisObject) {
            if (matchValue == null) {
                return Pit.FSharp.Core.Operators.NullArg(argName);
            } else {
                return null;
            }
        })(this);
    };
};
Pit.FSharp.Collections.Array2DModule.Length1 = function (arr) {
    var js = arr;
    return js.length;
};
Pit.FSharp.Collections.Array2DModule.Length2 = function (arr) {
    var js = arr;
    return js[0].length;
};
Pit.FSharp.Collections.Array2DModule.Base1 = function (arr) {
    return 0;
};
Pit.FSharp.Collections.Array2DModule.Base2 = function (arr) {
    return 0;
};
Pit.FSharp.Collections.Array2DModule.Get = function (arr) {
    return function (n) {
        return function (m) {
            var js = arr;
            return js[n][m];
        };
    };
};
Pit.FSharp.Collections.Array2DModule.Set = function (arr) {
    return function (n) {
        return function (m) {
            return function (x) {
                var js = arr;
                return js[n][m] = x;
            };
        };
    };
};
Pit.FSharp.Collections.Array2DModule.ZeroCreate = function (n) {
    return function (m) {
        (function (thisObject) {
            if (n < 0) {
                throw Pit.Exception.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        (function (thisObject) {
            if (m < 0) {
                throw Pit.Exception.ctors[0]("Input must be non-negative")
            } else {
                return null;
            }
        })(this);
        var arr = [];
        for (var i = 0; i <= (n - 1); i++) {
            (function (thisObject, i) {
                arr[i] = [];
                for (var j = 0; j <= (m - 1); j++) {
                    (function (thisObject, j) {
                        arr[i][j] = 0;
                    })(thisObject, j);
                };
            })(this, i);
        };
        return arr;
    };
};
Pit.FSharp.Collections.Array2DModule.ZeroCreateBased = function (b1) {
    return function (b2) {
        return function (n) {
            return function (m) {
                var l1 = ((b1 + n) - 1);
                var l2 = ((b2 + m) - 1);
                var arr = [];
                for (var i = b1; i <= l1; i++) {
                    (function (thisObject, i) {
                        arr[i] = [];
                        for (var j = b2; j <= l2; j++) {
                            (function (thisObject, j) {
                                arr[i][j] = 0;
                            })(thisObject, j);
                        };
                    })(this, i);
                };
                return arr;
            };
        };
    };
};
Pit.FSharp.Collections.Array2DModule.CreateBased = function (b1) {
    return function (b2) {
        return function (n) {
            return function (m) {
                return function (x) {
                    var array = Pit.FSharp.Collections.Array2DModule.ZeroCreateBased(b1)(b2)(n)(m);
                    for (var i = b1; i <= ((b1 + n) - 1); i++) {
                        (function (thisObject, i) {
                            for (var j = b2; j <= ((b2 + m) - 1); j++) {
                                (function (thisObject, j) {
                                    array[i][j] = x;
                                })(thisObject, j);
                            }
                        })(this, i);
                    };
                    return array;
                };
            };
        };
    };
};
Pit.FSharp.Collections.Array2DModule.InitializedBased = function (b1) {
    return function (b2) {
        return function (n) {
            return function (m) {
                return function (f) {
                    var array = Pit.FSharp.Collections.Array2DModule.ZeroCreateBased(b1)(b2)(n)(m);
                    var l1 = ((b1 + n) - 1);
                    var l2 = ((b2 + m) - 1);
                    for (var i = b1; i <= l1; i++) {
                        (function (thisObject, i) {
                            for (var j = b2; j <= l2; j++) {
                                (function (thisObject, j) {
                                    array[i][j] = f(i)(j);
                                })(thisObject, j);
                            }
                        })(this, i);
                    };
                    return array;
                };
            };
        };
    };
};
Pit.FSharp.Collections.Array2DModule.Create = function (n) {
    return function (m) {
        return function (x) {
            return Pit.FSharp.Collections.Array2DModule.CreateBased(0)(0)(n)(m)(x);
        };
    };
};
Pit.FSharp.Collections.Array2DModule.Initialize = function (n) {
    return function (m) {
        return function (f) {
            return Pit.FSharp.Collections.Array2DModule.InitializedBased(0)(0)(n)(m)(f);
        };
    };
};
Pit.FSharp.Collections.Array2DModule.Iterate = function (f) {
    return function (array) {
        Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
        var count1 = Pit.FSharp.Collections.Array2DModule.Length1(array);
        var count2 = Pit.FSharp.Collections.Array2DModule.Length2(array);
        var b1 = Pit.FSharp.Collections.Array2DModule.Base1(array);
        var b2 = Pit.FSharp.Collections.Array2DModule.Base2(array);
        var js = array;
        for (var i = b1; i <= ((b1 + count1) - 1); i++) {
            (function (thisObject, i) {
                for (var j = b2; j <= ((b2 + count2) - 1); j++) {
                    (function (thisObject, j) {
                        f(js[i][j])
                    })(thisObject, j);
                }
            })(this, i);
        };
    };
};
Pit.FSharp.Collections.Array2DModule.IterateIndexed = function (f) {
    return function (array) {
        Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
        var count1 = Pit.FSharp.Collections.Array2DModule.Length1(array);
        var count2 = Pit.FSharp.Collections.Array2DModule.Length2(array);
        var b1 = Pit.FSharp.Collections.Array2DModule.Base1(array);
        var b2 = Pit.FSharp.Collections.Array2DModule.Base2(array);
        var js = array;
        for (var i = b1; i <= ((b1 + count1) - 1); i++) {
            (function (thisObject, i) {
                for (var j = b2; j <= ((b2 + count2) - 1); j++) {
                    (function (thisObject, j) {
                        f(i)(j)(js[i][j])
                    })(thisObject, j);
                }
            })(this, i);
        };
    };
};
Pit.FSharp.Collections.Array2DModule.Map = function (f) {
    return function (array) {
        Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
        var js = array;
        return Pit.FSharp.Collections.Array2DModule.InitializedBased(Pit.FSharp.Collections.Array2DModule.Base1(array))(Pit.FSharp.Collections.Array2DModule.Base2(array))(Pit.FSharp.Collections.Array2DModule.Length1(array))(Pit.FSharp.Collections.Array2DModule.Length2(array))(function (i) {
            return function (j) {
                return f(js[i][j]);
            };
        });
    };
};
Pit.FSharp.Collections.Array2DModule.MapIndexed = function (f) {
    return function (array) {
        Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
        var js = array;
        return Pit.FSharp.Collections.Array2DModule.InitializedBased(Pit.FSharp.Collections.Array2DModule.Base1(array))(Pit.FSharp.Collections.Array2DModule.Base2(array))(Pit.FSharp.Collections.Array2DModule.Length1(array))(Pit.FSharp.Collections.Array2DModule.Length2(array))(function (i) {
            return function (j) {
                return f(i)(j)(js[i][j]);
            };
        });
    };
};
Pit.FSharp.Collections.Array2DModule.Copy = function (array) {
    Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
    var js = array;
    return Pit.FSharp.Collections.Array2DModule.InitializedBased(Pit.FSharp.Collections.Array2DModule.Base1(array))(Pit.FSharp.Collections.Array2DModule.Base2(array))(Pit.FSharp.Collections.Array2DModule.Length1(array))(Pit.FSharp.Collections.Array2DModule.Length2(array))(function (i) {
        return function (j) {
            return js[i][j];
        };
    });
};
Pit.FSharp.Collections.Array2DModule.Rebase = function (array) {
    Pit.FSharp.Collections.Array2DModule.checkNonNull("array")(array);
    var b1 = Pit.FSharp.Collections.Array2DModule.Base1(array);
    var b2 = Pit.FSharp.Collections.Array2DModule.Base2(array);
    var js = array;
    return Pit.FSharp.Collections.Array2DModule.Initialize(Pit.FSharp.Collections.Array2DModule.Length1(array))(Pit.FSharp.Collections.Array2DModule.Length2(array))(function (i) {
        return function (j) {
            return js[(b1 + i)][(b2 + j)];
        };
    });
};
Pit.FSharp.Collections.Array2DModule.CopyTo = function (source) {
    return function (sourceIndex1) {
        return function (sourceIndex2) {
            return function (target) {
                return function (targetIndex1) {
                    return function (targetIndex2) {
                        return function (count1) {
                            return function (count2) {
                                Pit.FSharp.Collections.Array2DModule.checkNonNull("source")(source);
                                Pit.FSharp.Collections.Array2DModule.checkNonNull("target")(target);
                                (function (thisObject) {
                                    if (sourceIndex1 < 0) {
                                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if (sourceIndex2 < 0) {
                                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if (targetIndex1 < 0) {
                                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if (targetIndex2 < 0) {
                                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if ((sourceIndex1 + count1) > Pit.FSharp.Collections.Array2DModule.Length1(source)) {
                                        throw Pit.Exception.ctors[0]("Out of range")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if ((sourceIndex2 + count2) > Pit.FSharp.Collections.Array2DModule.Length2(source)) {
                                        throw Pit.Exception.ctors[0]("Out of range")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if ((targetIndex1 + count1) > Pit.FSharp.Collections.Array2DModule.Length1(target)) {
                                        throw Pit.Exception.ctors[0]("Out of range")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                (function (thisObject) {
                                    if ((targetIndex2 + count2) > Pit.FSharp.Collections.Array2DModule.Length2(target)) {
                                        throw Pit.Exception.ctors[0]("Out of range")
                                    } else {
                                        return null;
                                    }
                                })(this);
                                var sourceJs = source;
                                var targetJs = target;
                                for (var i = 0; i <= (count1 - 1); i++) {
                                    (function (thisObject, i) {
                                        for (var j = 0; j <= (count2 - 1); j++) {
                                            (function (thisObject, j) {
                                                targetJs[(targetIndex1 + i)][(targetIndex2 + j)] = sourceJs[(sourceIndex1 + i)][(sourceIndex2 + j)];
                                            })(thisObject, j);
                                        }
                                    })(this, i);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.FindIndex = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var go = function (n) {
            return (function (thisObject) {
                if (n >= len) {
                    throw Pit.Exception.ctors[0]("Key not found")
                } else {
                    return (function (thisObject) {
                        if (f(array[n])) {
                            return n;
                        } else {
                            return go((n + 1));
                        }
                    })(thisObject);
                }
            })(this);
        };
        return go(0);
    };
};
Pit.FSharp.Collections.ArrayModule.TryFindIndex = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var go = function (n) {
            return (function (thisObject) {
                if (n >= len) {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                } else {
                    return (function (thisObject) {
                        if (f(array[n])) {
                            return new Pit.FSharp.Core.FSharpOption1.Some(n);
                        } else {
                            return go((n + 1));
                        }
                    })(thisObject);
                }
            })(this);
        };
        return go(0);
    };
};
Pit.FSharp.Collections.ArrayModule.Permute = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var arr = [];
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var idx = f(i);
                arr[idx] = array[i];
            })(this, i);
        };
        return arr;
    };
};
Pit.FSharp.Collections.ArrayModule.Sum = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
    var acc = 0;
    for (var i = 0; i <= (array.get_Length() - 1); i++) {
        (function (thisObject, i) {
            acc = (acc + array[i]);
        })(this, i);
    };
    return acc;
};
Pit.FSharp.Collections.ArrayModule.SumBy = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var acc = 0;
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                acc = (acc + f(array[i]));
            })(this, i);
        };
        return acc;
    };
};
Pit.FSharp.Collections.ArrayModule.Min = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
    (function (thisObject) {
        if (array.get_Length() == 0) {
            throw Pit.Exception.ctors[0]("Invalid array")
        } else {
            return null;
        }
    })(this);
    var acc = array[0];
    for (var i = 1; i <= (array.get_Length() - 1); i++) {
        (function (thisObject, i) {
            var curr = array[i];
            (function (thisObject) {
                if (curr < acc) {
                    return acc = curr;
                } else {
                    return null;
                }
            })(thisObject);
        })(this, i);
    };
    return acc;
};
Pit.FSharp.Collections.ArrayModule.MinBy = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        (function (thisObject) {
            if (array.get_Length() == 0) {
                throw Pit.Exception.ctors[0]("Invalid array")
            } else {
                return null;
            }
        })(this);
        var accv = array[0];
        var acc = f(accv);
        for (var i = 1; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var currv = array[i];
                var curr = f(currv);
                (function (thisObject) {
                    if (curr < acc) {
                        acc = curr;
                        return accv = currv;
                    } else {
                        return null;
                    }
                })(thisObject);
            })(this, i);
        };
        return accv;
    };
};
Pit.FSharp.Collections.ArrayModule.Max = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
    (function (thisObject) {
        if (array.get_Length() == 0) {
            throw Pit.Exception.ctors[0]("Invalid array")
        } else {
            return null;
        }
    })(this);
    var acc = array[0];
    for (var i = 1; i <= (array.get_Length() - 1); i++) {
        (function (thisObject, i) {
            var curr = array[i];
            (function (thisObject) {
                if (curr > acc) {
                    return acc = curr;
                } else {
                    return null;
                }
            })(thisObject);
        })(this, i);
    };
    return acc;
};
Pit.FSharp.Collections.ArrayModule.MaxBy = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        (function (thisObject) {
            if (array.get_Length() == 0) {
                throw Pit.Exception.ctors[0]("Invalid array")
            } else {
                return null;
            }
        })(this);
        var accv = array[0];
        var acc = f(accv);
        for (var i = 1; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var currv = array[i];
                var curr = f(currv);
                (function (thisObject) {
                    if (curr > acc) {
                        acc = curr;
                        return accv = currv;
                    } else {
                        return null;
                    }
                })(thisObject);
            })(this, i);
        };
        return accv;
    };
};
Pit.FSharp.Collections.ArrayModule.Average = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
    (function (thisObject) {
        if (array.get_Length() == 0) {
            throw Pit.Exception.ctors[0]("Invalid array")
        } else {
            return null;
        }
    })(this);
    var acc = 0;
    var count = 0;
    for (var i = 0; i <= (array.get_Length() - 1); i++) {
        (function (thisObject, i) {
            acc = (acc + array[i]);
            count = (count + 1);
        })(this, i);
    };
    return (acc / count);
};
Pit.FSharp.Collections.ArrayModule.AverageBy = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        (function (thisObject) {
            if (array.get_Length() == 0) {
                throw Pit.Exception.ctors[0]("Invalid array")
            } else {
                return null;
            }
        })(this);
        var acc = 0;
        var count = 0;
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                acc = (acc + f(array[i]));
                count = (count + 1);
            })(this, i);
        };
        return (acc / count);
    };
};
Pit.FSharp.Collections.ArrayModule.GetSubArray = function (array) {
    return function (startIndex) {
        return function (count) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
            (function (thisObject) {
                if (startIndex < 0) {
                    throw Pit.Exception.ctors[0]("Input must be non-negative")
                } else {
                    return null;
                }
            })(this);
            (function (thisObject) {
                if (count < 0) {
                    throw Pit.Exception.ctors[0]("Input must be non-negative")
                } else {
                    return null;
                }
            })(this);
            (function (thisObject) {
                if ((startIndex + count) > array.get_Length()) {
                    throw Pit.Exception.ctors[0]("Length out of range")
                } else {
                    return null;
                }
            })(this);
            var res = [];
            for (var i = 0; i <= (count - 1); i++) {
                (function (thisObject, i) {
                    res[i] = array[(startIndex + i)];
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Get = function (array) {
    return function (n) {
        return array[n];
    };
};
Pit.FSharp.Collections.ArrayModule.Set = function (array) {
    return function (n) {
        return function (v) {
            return array[n] = v;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Fill = function (target) {
    return function (targetIndex) {
        return function (count) {
            return function (x) {
                Pit.FSharp.Collections.ArrayModule.checkNonNull("target")(target);
                (function (thisObject) {
                    if (targetIndex < 0) {
                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                    } else {
                        return null;
                    }
                })(this);
                (function (thisObject) {
                    if (count < 0) {
                        throw Pit.Exception.ctors[0]("Input must be non-negative")
                    } else {
                        return null;
                    }
                })(this);
                for (var i = targetIndex; i <= ((targetIndex + count) - 1); i++) {
                    (function (thisObject, i) {
                        target[i] = x;
                    })(this, i);
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.ToList = function (array) {
    return Pit.FSharp.Collections.ListModule.OfArray(array);
};
Pit.FSharp.Collections.ArrayModule.OfList = function (list) {
    return Pit.FSharp.Collections.ListModule.ToArray(list);
};
Pit.FSharp.Collections.ArrayModule.ToSeq = function (array) {
    return Pit.FSharp.Collections.SeqModule.OfArray(array);
};
Pit.FSharp.Collections.ArrayModule.OfSeq = function (e) {
    return Pit.FSharp.Collections.SeqModule.ToArray(e);
};
Pit.FSharp.Collections.ArrayModule.checkNonNull = function (argName) {
    return function (arg) {
        return (function (thisObject) {
            if (arg == null) {
                throw Pit.Exception.ctors[0]("null")
            } else {
                return null;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ArrayModule.Length = function (array) {
    return array.get_Length();
};
Pit.FSharp.Collections.ArrayModule.Initialize = function (count) {
    return function (f) {
        var result = [];
        for (var i = 0; i <= (count - 1); i++) {
            (function (thisObject, i) {
                result[i] = f(i);
            })(this, i);
        };
        return result;
    };
};
Pit.FSharp.Collections.ArrayModule.ZeroCreate = function (count) {
    (function (thisObject) {
        if (count < 0) {
            throw Pit.Exception.ctors[0]("Input must be non-negative")
        } else {
            return null;
        }
    })(this);
    var array = [];
    for (var i = 0; i <= (count - 1); i++) {
        (function (thisObject, i) {
            array[i] = 0;
        })(this, i);
    };
    return array;
};
Pit.FSharp.Collections.ArrayModule.Create = function (count) {
    return function (x) {
        (function (thisObject) {
            if (count < 0) {
                throw Pit.Exception.ctors[0]("Invalid count")
            } else {
                return null;
            }
        })(this);
        var array = [];
        for (var i = 0; i <= (count - 1); i++) {
            (function (thisObject, i) {
                array[i] = x;
            })(this, i);
        };
        return array;
    };
};
Pit.FSharp.Collections.ArrayModule.IsEmpty = function (array) {
    return array.get_Length() == 0;
};
Pit.FSharp.Collections.ArrayModule.Empty = [];
Pit.FSharp.Collections.ArrayModule.CopyTo = function (sourceArray) {
    return function (sourceIndex) {
        return function (destinationArray) {
            return function (destinationIndex) {
                return function (length) {
                    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(sourceArray);
                    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(destinationArray);
                    var d = destinationIndex;
                    for (var i = sourceIndex; i <= (length - 1); i++) {
                        (function (thisObject, i) {
                            destinationArray[d] = sourceArray[i];
                            d = (d + 1);
                        })(this, i);
                    };
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.concatAddLengths = function (arrs) {
    return function (i) {
        return function (acc) {
            return (function (thisObject) {
                if (i >= arrs.get_Length()) {
                    return acc;
                } else {
                    return Pit.FSharp.Collections.ArrayModule.concatAddLengths(arrs)((i + 1))((acc + arrs[i].get_Length()));
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.concatBlit = function (arrs) {
    return function (i) {
        return function (j) {
            return function (tgt) {
                return (function (thisObject) {
                    if (i < arrs.get_Length()) {
                        var h = arrs[i];
                        var len = h.get_Length();
                        Pit.FSharp.Collections.ArrayModule.CopyTo(h)(0)(tgt)(j)(len);
                        return Pit.FSharp.Collections.ArrayModule.concatBlit(arrs)((i + 1))((j + len))(tgt);
                    } else {
                        return null;
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.concatArrays = function (arrs) {
    var res = Pit.FSharp.Collections.ArrayModule.ZeroCreate(Pit.FSharp.Collections.ArrayModule.concatAddLengths(arrs)(0)(0));
    Pit.FSharp.Collections.ArrayModule.concatBlit(arrs)(0)(0)(res);
    return res;
};
Pit.FSharp.Collections.ArrayModule.Concat = function (arrays) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("arrays")(arrays);
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(arrays)(function (source) {
        return Pit.FSharp.Collections.SeqModule.ToArray(source);
    }))(function (arrs) {
        return Pit.FSharp.Collections.ArrayModule.concatArrays(arrs);
    });
};
Pit.FSharp.Collections.ArrayModule.Collect = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var result = [];
        for (var i = 0; i <= (len - 1); i++) {
            (function (thisObject, i) {
                result[i] = f(array[i]);
            })(this, i);
        };
        return Pit.FSharp.Collections.ArrayModule.concatArrays(result);
    };
};
Pit.FSharp.Collections.ArrayModule.Append = function (array1) {
    return function (array2) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array1);
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array2);
        var n1 = array1.get_Length();
        var n2 = array2.get_Length();
        var res = [];
        Pit.FSharp.Collections.ArrayModule.CopyTo(array1)(0)(res)(0)(n1);
        Pit.FSharp.Collections.ArrayModule.CopyTo(array2)(0)(res)(n1)(n2);
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Copy = function (array) {
    var len = array.get_Length();
    var res = Pit.FSharp.Collections.ArrayModule.ZeroCreate(len);
    for (var i = 0; i <= (len - 1); i++) {
        (function (thisObject, i) {
            res[i] = array[i];
        })(this, i);
    };
    return res;
};
Pit.FSharp.Collections.ArrayModule.Iterate = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                f(array[i])
            })(this, i);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Map = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var res = [];
        for (var i = 0; i <= (len - 1); i++) {
            (function (thisObject, i) {
                res[i] = f(array[i]);
            })(this, i);
        };
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Iterate2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("Arrays have different length")
                } else {
                    return null;
                }
            })(this);
            for (var i = 0; i <= (len1 - 1); i++) {
                (function (thisObject, i) {
                    f(array1[i])(array2[i])
                })(this, i);
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Map2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("Arrays have different length")
                } else {
                    return null;
                }
            })(this);
            var res = [];
            for (var i = 0; i <= (len1 - 1); i++) {
                (function (thisObject, i) {
                    res[i] = f(array1[i])(array2[i]);
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.MapIndexed2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("Arrays have different length")
                } else {
                    return null;
                }
            })(this);
            var res = [];
            for (var i = 0; i <= (len1 - 1); i++) {
                (function (thisObject, i) {
                    res[i] = f(i)(array1[i])(array2[i]);
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.IterateIndexed = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        for (var i = 0; i <= (len - 1); i++) {
            (function (thisObject, i) {
                f(i)(array[i])
            })(this, i);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.IterateIndexed2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("Arrays have different length")
                } else {
                    return null;
                }
            })(this);
            var res = [];
            for (var i = 0; i <= (len1 - 1); i++) {
                (function (thisObject, i) {
                    res[i] = f(i)(array1[i])(array2[i]);
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.MapIndexed = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var res = [];
        for (var i = 0; i <= (len - 1); i++) {
            (function (thisObject, i) {
                res[i] = f(i)(array[i]);
            })(this, i);
        };
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Exists = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var loop = function (i) {
            return (function (thisObject) {
                if (i < len) {
                    return (function (thisObject) {
                        if (f(array[i])) {
                            return true;
                        } else {
                            return loop((i + 1));
                        }
                    })(thisObject);
                } else {
                    return false;
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.Exists2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("Invalid argument array2")
                } else {
                    return null;
                }
            })(this);
            var loop = function (i) {
                return (function (thisObject) {
                    if (i < len1) {
                        return (function (thisObject) {
                            if (f(array1[i])(array2[i])) {
                                return true;
                            } else {
                                return loop((i + 1));
                            }
                        })(thisObject);
                    } else {
                        return false;
                    }
                })(this);
            };
            return loop(0);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.ForAll = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        var loop = function (i) {
            return (function (thisObject) {
                if (i >= len) {
                    return true;
                } else {
                    return (function (thisObject) {
                        if (f(array[i])) {
                            return loop((i + 1));
                        } else {
                            return false;
                        }
                    })(thisObject);
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.ForAll2 = function (f) {
    return function (array1) {
        return function (array2) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("invalid argument array2")
                } else {
                    return null;
                }
            })(this);
            var loop = function (i) {
                return (function (thisObject) {
                    if (i >= len1) {
                        return true;
                    } else {
                        return (function (thisObject) {
                            if (f(array1[i])(array2[i])) {
                                return loop((i + 1));
                            } else {
                                return false;
                            }
                        })(thisObject);
                    }
                })(this);
            };
            return loop(0);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Pick = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var loop = function (i) {
            return (function (thisObject) {
                if (i >= array.get_Length()) {
                    throw Pit.Exception.ctors[0]("Key not found")
                } else {
                    var matchValue = f(array[i]);
                    return (function (thisObject) {
                        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                            var res = matchValue.get_Value();
                            return res;
                        } else {
                            return loop((i + 1));
                        }
                    })(thisObject);
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.TryPick = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var loop = function (i) {
            return (function (thisObject) {
                if (i >= array.get_Length()) {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                } else {
                    var matchValue = f(array[i]);
                    return (function (thisObject) {
                        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
                            return loop((i + 1));
                        } else {
                            var res = matchValue;
                            return res;
                        }
                    })(thisObject);
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.Choose = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var res = [];
        var j = 0;
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var matchValue = f(array[i]);
                (function (thisObject) {
                    if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                        var t = matchValue.get_Value();
                        res[j] = t;
                        return j = (j + 1);
                    } else {
                        return null;
                    }
                })(thisObject);
            })(this, i);
        };
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Filter = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var res = [];
        var j = 0;
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var x = array[i];
                (function (thisObject) {
                    if (f(x)) {
                        res[j] = x;
                        return j = (j + 1);
                    } else {
                        return null;
                    }
                })(thisObject);
            })(this, i);
        };
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Partition = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var res1 = [];
        var res2 = [];
        var j1 = 0;
        var j2 = 0;
        for (var i = 0; i <= (array.get_Length() - 1); i++) {
            (function (thisObject, i) {
                var x = array[i];
                (function (thisObject) {
                    if (f(x)) {
                        res1[j1] = x;
                        return j1 = (j1 + 1);
                    } else {
                        res2[j2] = x;
                        return j2 = (j2 + 1);
                    }
                })(thisObject);
            })(this, i);
        };
        return {
            Item1: res1,
            Item2: res2
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Find = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var loop = function (i) {
            return (function (thisObject) {
                if (i >= array.get_Length()) {
                    throw Pit.Exception.ctors[0]("Key not found")
                } else {
                    return (function (thisObject) {
                        if (f(array[i])) {
                            return array[i];
                        } else {
                            return loop((i + 1));
                        }
                    })(thisObject);
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.TryFind = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var loop = function (i) {
            return (function (thisObject) {
                if (i >= array.get_Length()) {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                } else {
                    return (function (thisObject) {
                        if (f(array[i])) {
                            return new Pit.FSharp.Core.FSharpOption1.Some(array[i]);
                        } else {
                            return loop((i + 1));
                        }
                    })(thisObject);
                }
            })(this);
        };
        return loop(0);
    };
};
Pit.FSharp.Collections.ArrayModule.Zip = function (array1) {
    return function (array2) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
        var len1 = array1.get_Length();
        (function (thisObject) {
            if (len1 != array2.get_Length()) {
                throw Pit.Exception.ctors[0]("invalid argument length array2")
            } else {
                return null;
            }
        })(this);
        var res = [];
        for (var i = 0; i <= (len1 - 1); i++) {
            (function (thisObject, i) {
                res[i] = {
                    Item1: array1[i],
                    Item2: array2[i]
                };
            })(this, i);
        };
        return res;
    };
};
Pit.FSharp.Collections.ArrayModule.Zip3 = function (array1) {
    return function (array2) {
        return function (array3) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array3")(array3);
            var len1 = array1.get_Length();
            (function (thisObject) {
                if (len1 != array2.get_Length()) {
                    throw Pit.Exception.ctors[0]("invalid argument length array2")
                } else {
                    return null;
                }
            })(this);
            (function (thisObject) {
                if (len1 != array3.get_Length()) {
                    throw Pit.Exception.ctors[0]("invalid argument length array3")
                } else {
                    return null;
                }
            })(this);
            var res = [];
            for (var i = 0; i <= (len1 - 1); i++) {
                (function (thisObject, i) {
                    res[i] = {
                        Item1: array1[i],
                        Item2: array2[i],
                        Item3: array3[i]
                    };
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Unzip = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")({
        Item1: array
    });
    var len = array.get_Length();
    var res1 = [];
    var res2 = [];
    for (var i = 0; i <= (len - 1); i++) {
        (function (thisObject, i) {
            var patternInput = array[i];
            var y = patternInput.Item2;
            var x = patternInput.Item1;
            res1[i] = x;
            res2[i] = y;
        })(this, i);
    };
    return {
        Item1: res1,
        Item2: res2
    };
};
Pit.FSharp.Collections.ArrayModule.Unzip3 = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")({
        Item1: array
    });
    var len = array.get_Length();
    var res1 = [];
    var res2 = [];
    var res3 = [];
    for (var i = 0; i <= (len - 1); i++) {
        (function (thisObject, i) {
            var patternInput = array[i];
            var z = patternInput.Item3;
            var y = patternInput.Item2;
            var x = patternInput.Item1;
            res1[i] = x;
            res2[i] = y;
            res3[i] = z;
        })(this, i);
    };
    return {
        Item1: res1,
        Item2: res2,
        Item3: res3
    };
};
Pit.FSharp.Collections.ArrayModule.Reverse = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
    var len = array.get_Length();
    var res = [];
    for (var i = 0; i <= (len - 1); i++) {
        (function (thisObject, i) {
            res[((len - i) - 1)] = array[i];
        })(this, i);
    };
    return res;
};
Pit.FSharp.Collections.ArrayModule.Fold = function (f) {
    return function (acc) {
        return function (array) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
            var state = acc;
            var len = array.get_Length();
            for (var i = 0; i <= (len - 1); i++) {
                (function (thisObject, i) {
                    state = f(state)(array[i]);
                })(this, i);
            };
            return state;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.FoldBack = function (f) {
    return function (array) {
        return function (acc) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
            var res = acc;
            var len = (array.get_Length() - 1);
            for (var i = 0; i <= len; i++) {
                (function (thisObject, i) {
                    res = f(array[(len - i)])(res);
                })(this, i);
            };
            return res;
        };
    };
};
Pit.FSharp.Collections.ArrayModule.FoldBack2 = function (f) {
    return function (array1) {
        return function (array2) {
            return function (acc) {
                Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
                Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
                var res = acc;
                var len = (array1.get_Length() - 1);
                (function (thisObject) {
                    if (len != (array2.get_Length() - 1)) {
                        throw Pit.Exception.ctors[0]("invalid argument length array2")
                    } else {
                        return null;
                    }
                })(this);
                for (var i = 0; i <= len; i++) {
                    (function (thisObject, i) {
                        res = f(array1[(len - i)])(array2[(len - i)])(res);
                    })(this, i);
                };
                return res;
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Fold2 = function (f) {
    return function (acc) {
        return function (array1) {
            return function (array2) {
                Pit.FSharp.Collections.ArrayModule.checkNonNull("array1")(array1);
                Pit.FSharp.Collections.ArrayModule.checkNonNull("array2")(array2);
                var state = acc;
                var len = array1.get_Length();
                (function (thisObject) {
                    if (len != array2.get_Length()) {
                        throw Pit.Exception.ctors[0]("invalid argument length array2")
                    } else {
                        return null;
                    }
                })(this);
                for (var i = 0; i <= (len - 1); i++) {
                    (function (thisObject, i) {
                        state = f(state)(array1[i])(array2[i]);
                    })(this, i);
                };
                return state;
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.FoldSubRight = function (f) {
    return function (array) {
        return function (start) {
            return function (fin) {
                return function (acc) {
                    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
                    var res = acc;
                    var i = fin;
                    while (i >= start) {
                        res = f(array[i])(res);
                        i = (i - 1);
                    };
                    return res;
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.ScanSubRight = function (f) {
    return function (array) {
        return function (start) {
            return function (fin) {
                return function (initState) {
                    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
                    var state = initState;
                    var res = Pit.FSharp.Collections.ArrayModule.Create(((2 + fin) - start))(initState);
                    var i = fin;
                    while (i >= start) {
                        state = f(array[i])(state);
                        res[(i - start)] = state;
                        i = (i - 1);
                    };
                    return res;
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.ScanSubLeft = function (f) {
    return function (initState) {
        return function (array) {
            return function (start) {
                return function (fin) {
                    Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
                    var state = initState;
                    var res = Pit.FSharp.Collections.ArrayModule.Create(((2 + fin) - start))(initState);
                    for (var i = start; i <= fin; i++) {
                        (function (thisObject, i) {
                            state = f(state)(array[i]);
                            res[((i - start) + 1)] = state;
                        })(this, i);
                    };
                    return res;
                };
            };
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Scan = function (f) {
    return function (acc) {
        return function (array) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
            var len = array.get_Length();
            return Pit.FSharp.Collections.ArrayModule.ScanSubLeft(f)(acc)(array)(0)((len - 1));
        };
    };
};
Pit.FSharp.Collections.ArrayModule.ScanBack = function (f) {
    return function (array) {
        return function (acc) {
            Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
            var len = array.get_Length();
            return Pit.FSharp.Collections.ArrayModule.ScanSubRight(f)(array)(0)((len - 1))(acc);
        };
    };
};
Pit.FSharp.Collections.ArrayModule.Reduce = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        return (function (thisObject) {
            if (len == 0) {
                throw Pit.Exception.ctors[0]("input array empty")
            } else {
                var res = array[0];
                for (var i = 1; i <= (len - 1); i++) {
                    (function (thisObject, i) {
                        res = f(res)(array[i]);
                    })(thisObject, i);
                };
                return res;
            }
        })(this);
    };
};
Pit.FSharp.Collections.ArrayModule.ReduceBack = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("array")(array);
        var len = array.get_Length();
        return (function (thisObject) {
            if (len == 0) {
                throw Pit.Exception.ctors[0]("input array empty")
            } else {
                return Pit.FSharp.Collections.ArrayModule.FoldSubRight(f)(array)(0)((len - 2))(array[(len - 1)]);
            }
        })(this);
    };
};
Pit.FSharp.Collections.ArrayModule.SortInPlace = function (source) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(source);
    var source1 = source;
    return source1.sort(function (a, b) {
        return (function (thisObject) {
            if (a < b) {
                return -1;
            } else {
                return (function (thisObject) {
                    if (a == b) {
                        return 0;
                    } else {
                        return 1;
                    }
                })(thisObject);
            }
        })(this);
    });
};
Pit.FSharp.Collections.ArrayModule.SortInPlaceBy = function (f) {
    return function (source) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(source);
        var source1 = source;
        return source1.sort(function (a, b) {
            var item1 = f(a);
            var item2 = f(b);
            return (item1 - item2);
        });
    };
};
Pit.FSharp.Collections.ArrayModule.SortInPlaceWith = function (f) {
    return function (source) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(source);
        var source1 = source;
        return source1.sort(function (a, b) {
            return f(a)(b);
        });
    };
};
Pit.FSharp.Collections.ArrayModule.SortWith = function (f) {
    return function (source) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(source);
        var result = Pit.FSharp.Collections.ArrayModule.Copy(source);
        Pit.FSharp.Collections.ArrayModule.SortInPlaceWith(f)(result);
        return result;
    };
};
Pit.FSharp.Collections.ArrayModule.SortBy = function (f) {
    return function (array) {
        Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(array);
        var result = Pit.FSharp.Collections.ArrayModule.Copy(array);
        Pit.FSharp.Collections.ArrayModule.SortInPlaceBy(f)(result);
        return result;
    };
};
Pit.FSharp.Collections.ArrayModule.Sort = function (array) {
    Pit.FSharp.Collections.ArrayModule.checkNonNull("source")(array);
    var result = Pit.FSharp.Collections.ArrayModule.Copy(array);
    Pit.FSharp.Collections.ArrayModule.SortInPlace(result);
    return result;
};
Pit.FSharp.Collections.SetModule.IsEmpty = function (s) {
    return s.get_IsEmpty();
};
Pit.FSharp.Collections.SetModule.Contains = function (x) {
    return function (s) {
        return s.Contains(x);
    };
};
Pit.FSharp.Collections.SetModule.Add = function (x) {
    return function (s) {
        return s.Add(x);
    };
};
Pit.FSharp.Collections.SetModule.Singleton = function (x) {
    return Pit.FSharp.Collections.FSharpSet1.Singleton(x);
};
Pit.FSharp.Collections.SetModule.Remove = function (x) {
    return function (s) {
        return s.Remove(x);
    };
};
Pit.FSharp.Collections.SetModule.Union = function (s1) {
    return function (s2) {
        return Pit.FSharp.Collections.FSharpSet1.op_Addition(s1, s2);
    };
};
Pit.FSharp.Collections.SetModule.UnionMany = function (sets) {
    return Pit.FSharp.Collections.FSharpSet1.Union(sets);
};
Pit.FSharp.Collections.SetModule.Intersect = function (s1) {
    return function (s2) {
        return Pit.FSharp.Collections.FSharpSet1.Intersection1({
            Item1: s1,
            Item2: s2
        });
    };
};
Pit.FSharp.Collections.SetModule.IntersectMany = function (sets) {
    return Pit.FSharp.Collections.FSharpSet1.Intersection2(sets);
};
Pit.FSharp.Collections.SetModule.Iterate = function (f) {
    return function (s) {
        return s.Iterate(f);
    };
};
Pit.FSharp.Collections.SetModule.Empty = function () {
    return Pit.FSharp.Collections.FSharpSet1.get_Empty();
};
Pit.FSharp.Collections.SetModule.ForAll = function (f) {
    return function (s) {
        return s.ForAll(f);
    };
};
Pit.FSharp.Collections.SetModule.Exists = function (f) {
    return function (s) {
        return s.Exists(f);
    };
};
Pit.FSharp.Collections.SetModule.Filter = function (f) {
    return function (s) {
        return s.Filter(f);
    };
};
Pit.FSharp.Collections.SetModule.Partition = function (f) {
    return function (s) {
        return s.Partition(f);
    };
};
Pit.FSharp.Collections.SetModule.Fold = function (f) {
    return function (z) {
        return function (s) {
            return Pit.FSharp.Collections.SetTreeModule.fold(f)(z)(s.get_Tree());
        };
    };
};
Pit.FSharp.Collections.SetModule.FoldBack = function (f) {
    return function (s) {
        return function (z) {
            return Pit.FSharp.Collections.SetTreeModule.foldBack(f)(s.get_Tree())(z);
        };
    };
};
Pit.FSharp.Collections.SetModule.Map = function (f) {
    return function (s) {
        return s.Map(f);
    };
};
Pit.FSharp.Collections.SetModule.Count = function (s) {
    return s.get_Count();
};
Pit.FSharp.Collections.SetModule.MinumumElement = function (s) {
    return s.get_MinimumElement();
};
Pit.FSharp.Collections.SetModule.MaximumElement = function (s) {
    return s.get_MaximumElement();
};
Pit.FSharp.Collections.SetModule.OfList = function (l) {
    return Pit.FSharp.Collections.FSharpSet1.ctors[0](Pit.FSharp.Collections.ListModule.ToSeq(l));
};
Pit.FSharp.Collections.SetModule.OfArray = function (l) {
    return Pit.FSharp.Collections.FSharpSet1.FromArray(l);
};
Pit.FSharp.Collections.SetModule.ToList = function (s) {
    return s.ToList();
};
Pit.FSharp.Collections.SetModule.ToArray = function (s) {
    return s.ToArray();
};
Pit.FSharp.Collections.SetModule.ToSeq = function (s) {
    return s;
};
Pit.FSharp.Collections.SetModule.OfSeq = function (c) {
    return Pit.FSharp.Collections.FSharpSet1.ctors[0](c);
};
Pit.FSharp.Collections.SetModule.Difference = function (s1) {
    return function (s2) {
        return Pit.FSharp.Collections.FSharpSet1.op_Subtraction(s1, s2);
    };
};
Pit.FSharp.Collections.SetModule.IsSubset = function (x) {
    return function (y) {
        return Pit.FSharp.Collections.SetTreeModule.subset(x.get_Comparer())(x.get_Tree())(y.get_Tree());
    };
};
Pit.FSharp.Collections.SetModule.IsSuperset = function (x) {
    return function (y) {
        return Pit.FSharp.Collections.SetTreeModule.subset(x.get_Comparer())(y.get_Tree())(x.get_Tree());
    };
};
Pit.FSharp.Collections.SetModule.IsProperSubset = function (x) {
    return function (y) {
        return Pit.FSharp.Collections.SetTreeModule.psubset(x.get_Comparer())(x.get_Tree())(y.get_Tree());
    };
};
Pit.FSharp.Collections.SetModule.IsProperSuperset = function (x) {
    return function (y) {
        return Pit.FSharp.Collections.SetTreeModule.psubset(x.get_Comparer())(y.get_Tree())(x.get_Tree());
    };
};
Pit.FSharp.Collections.SetModule.MinElement = function (s) {
    return s.get_MinimumElement();
};
Pit.FSharp.Collections.SetModule.MaxElement = function (s) {
    return s.get_MaximumElement();
};
registerNamespace("Pit.FSharp.Collections");
Pit.FSharp.Collections.SetTreeModule.SetIterator1 = (function () {
    function SetIterator1(stack, started) {
        this.stack = stack;
        this.started = started;
    }
    SetIterator1.prototype.set_stack = function (x) {
        this.stack = x;
    };
    SetIterator1.prototype.set_started = function (x) {
        this.started = x;
    };
    SetIterator1.prototype.get_stack = function () {
        return this.stack;
    };
    SetIterator1.prototype.get_started = function () {
        return this.started;
    };
    return SetIterator1;
})();
Pit.FSharp.Collections.SetTreeModule.SetTreeEnumerator1 = (function () {
    function SetTreeEnumerator1(s) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.s = s;
        this.i = Pit.FSharp.Collections.SetTreeModule.mkIterator(this.s);
    }
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    SetTreeEnumerator1.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    SetTreeEnumerator1.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                return Pit.FSharp.Collections.SetTreeModule.moveNext(this.x.i);
            };
            IEnumerator.prototype.get_Current = function () {
                return Pit.FSharp.Collections.SetTreeModule.current(this.x.i);
            };
            IEnumerator.prototype.Reset = function () {
                return this.x.i = Pit.FSharp.Collections.SetTreeModule.mkIterator(this.x.s);
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    SetTreeEnumerator1.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    SetTreeEnumerator1.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    SetTreeEnumerator1.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    SetTreeEnumerator1.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return Pit.FSharp.Collections.SetTreeModule.current(this.x.i);
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    SetTreeEnumerator1.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    SetTreeEnumerator1.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return SetTreeEnumerator1;
})();
Pit.FSharp.Collections.SetTreeModule.height = function (t) {
    return (function (thisObject) {
        if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
            return 1;
        } else {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                    var h = t.get_Item4();
                    return h;
                } else {
                    return 0;
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.get_tolerance = 2;
Pit.FSharp.Collections.SetTreeModule.mk = function (l) {
    return function (k) {
        return function (r) {
            var matchValue = {
                Item1: l,
                Item2: r
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return new Pit.FSharp.Collections.SetTree1.SetOne(k);
                        } else {
                            var hl = Pit.FSharp.Collections.SetTreeModule.height(l);
                            var hr = Pit.FSharp.Collections.SetTreeModule.height(r);
                            var m = (function (thisObject) {
                                if (hl < hr) {
                                    return hr;
                                } else {
                                    return hl;
                                }
                            })(thisObject);
                            return new Pit.FSharp.Collections.SetTree1.SetNode(k, l, r, (m + 1));
                        }
                    })(thisObject);
                } else {
                    var hl = Pit.FSharp.Collections.SetTreeModule.height(l);
                    var hr = Pit.FSharp.Collections.SetTreeModule.height(r);
                    var m = (function (thisObject) {
                        if (hl < hr) {
                            return hr;
                        } else {
                            return hl;
                        }
                    })(thisObject);
                    return new Pit.FSharp.Collections.SetTree1.SetNode(k, l, r, (m + 1));
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.rebalance = function (t1) {
    return function (k) {
        return function (t2) {
            var t1h = Pit.FSharp.Collections.SetTreeModule.height(t1);
            var t2h = Pit.FSharp.Collections.SetTreeModule.height(t2);
            return (function (thisObject) {
                if (t2h > (t1h + Pit.FSharp.Collections.SetTreeModule.get_tolerance)) {
                    return (function (thisObject) {
                        if (t2 instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                            var t2r = t2.get_Item3();
                            var t2l = t2.get_Item2();
                            var t2k = t2.get_Item1();
                            return (function (thisObject) {
                                if (Pit.FSharp.Collections.SetTreeModule.height(t2l) > (t1h + 1)) {
                                    return (function (thisObject) {
                                        if (t2l instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                            var t2lr = t2l.get_Item3();
                                            var t2ll = t2l.get_Item2();
                                            var t2lk = t2l.get_Item1();
                                            return Pit.FSharp.Collections.SetTreeModule.mk(Pit.FSharp.Collections.SetTreeModule.mk(t1)(k)(t2ll))(t2lk)(Pit.FSharp.Collections.SetTreeModule.mk(t2lr)(t2k)(t2r));
                                        } else {
                                            throw "rebalance"
                                        }
                                    })(thisObject);
                                } else {
                                    return Pit.FSharp.Collections.SetTreeModule.mk(Pit.FSharp.Collections.SetTreeModule.mk(t1)(k)(t2l))(t2k)(t2r);
                                }
                            })(thisObject);
                        } else {
                            throw "rebalance"
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (t1h > (t2h + Pit.FSharp.Collections.SetTreeModule.get_tolerance)) {
                            return (function (thisObject) {
                                if (t1 instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                    var t1r = t1.get_Item3();
                                    var t1l = t1.get_Item2();
                                    var t1k = t1.get_Item1();
                                    return (function (thisObject) {
                                        if (Pit.FSharp.Collections.SetTreeModule.height(t1r) > (t2h + 1)) {
                                            return (function (thisObject) {
                                                if (t1r instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                    var t1rr = t1r.get_Item3();
                                                    var t1rl = t1r.get_Item2();
                                                    var t1rk = t1r.get_Item1();
                                                    return Pit.FSharp.Collections.SetTreeModule.mk(Pit.FSharp.Collections.SetTreeModule.mk(t1l)(t1k)(t1rl))(t1rk)(Pit.FSharp.Collections.SetTreeModule.mk(t1rr)(k)(t2));
                                                } else {
                                                    throw "rebalance"
                                                }
                                            })(thisObject);
                                        } else {
                                            return Pit.FSharp.Collections.SetTreeModule.mk(t1l)(t1k)(Pit.FSharp.Collections.SetTreeModule.mk(t1r)(k)(t2));
                                        }
                                    })(thisObject);
                                } else {
                                    throw "rebalance"
                                }
                            })(thisObject);
                        } else {
                            return Pit.FSharp.Collections.SetTreeModule.mk(t1)(k)(t2);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.add = function (comparer) {
    return function (k) {
        return function (t) {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k2 = t.get_Item();
                    var c = comparer.IComparer1_Compare(k, k2);
                    return (function (thisObject) {
                        if (c < 0) {
                            return new Pit.FSharp.Collections.SetTree1.SetNode(k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), t, 2);
                        } else {
                            return (function (thisObject) {
                                if (c == 0) {
                                    return t;
                                } else {
                                    return new Pit.FSharp.Collections.SetTree1.SetNode(k, t, new Pit.FSharp.Collections.SetTree1.SetEmpty(), 2);
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (t instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return new Pit.FSharp.Collections.SetTree1.SetOne(k);
                        } else {
                            var r = t.get_Item3();
                            var l = t.get_Item2();
                            var k2 = t.get_Item1();
                            var c = comparer.IComparer1_Compare(k, k2);
                            return (function (thisObject) {
                                if (c < 0) {
                                    return Pit.FSharp.Collections.SetTreeModule.rebalance(Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(l))(k2)(r);
                                } else {
                                    return (function (thisObject) {
                                        if (c == 0) {
                                            return t;
                                        } else {
                                            return Pit.FSharp.Collections.SetTreeModule.rebalance(l)(k2)(Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(r));
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.balance = function (comparer) {
    return function (t1) {
        return function (k) {
            return function (t2) {
                var matchValue = {
                    Item1: t1,
                    Item2: t2
                };
                return (function (thisObject) {
                    if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                        return (function (thisObject) {
                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                var t12 = matchValue.Item1;
                                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(t12);
                            } else {
                                return (function (thisObject) {
                                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                        var k1 = matchValue.Item1.get_Item();
                                        var t21 = matchValue.Item2;
                                        return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(Pit.FSharp.Collections.SetTreeModule.add(comparer)(k1)(t21));
                                    } else {
                                        var k1 = matchValue.Item1.get_Item();
                                        var t21 = matchValue.Item2;
                                        return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(Pit.FSharp.Collections.SetTreeModule.add(comparer)(k1)(t21));
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                return (function (thisObject) {
                                    if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                        var k2 = matchValue.Item2.get_Item();
                                        var t12 = matchValue.Item1;
                                        return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(Pit.FSharp.Collections.SetTreeModule.add(comparer)(k2)(t12));
                                    } else {
                                        return (function (thisObject) {
                                            if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                var h1 = matchValue.Item1.get_Item4();
                                                var h2 = matchValue.Item2.get_Item4();
                                                var k1 = matchValue.Item1.get_Item1();
                                                var k2 = matchValue.Item2.get_Item1();
                                                var t11 = matchValue.Item1.get_Item2();
                                                var t12 = matchValue.Item1.get_Item3();
                                                var t21 = matchValue.Item2.get_Item2();
                                                var t22 = matchValue.Item2.get_Item3();
                                                return (function (thisObject) {
                                                    if ((h1 + Pit.FSharp.Collections.SetTreeModule.get_tolerance) < h2) {
                                                        return Pit.FSharp.Collections.SetTreeModule.rebalance(Pit.FSharp.Collections.SetTreeModule.balance(comparer)(t1)(k)(t21))(k2)(t22);
                                                    } else {
                                                        return (function (thisObject) {
                                                            if ((h2 + Pit.FSharp.Collections.SetTreeModule.get_tolerance) < h1) {
                                                                return Pit.FSharp.Collections.SetTreeModule.rebalance(t11)(k1)(Pit.FSharp.Collections.SetTreeModule.balance(comparer)(t12)(k)(t2));
                                                            } else {
                                                                return Pit.FSharp.Collections.SetTreeModule.mk(t1)(k)(t2);
                                                            }
                                                        })(thisObject);
                                                    }
                                                })(thisObject);
                                            } else {
                                                var t12 = matchValue.Item1;
                                                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(t12);
                                            }
                                        })(thisObject);
                                    }
                                })(thisObject);
                            } else {
                                var t21 = matchValue.Item2;
                                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(t21);
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.split = function (comparer) {
    return function (pivot) {
        return function (t) {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k1 = t.get_Item();
                    var c = comparer.IComparer1_Compare(k1, pivot);
                    return (function (thisObject) {
                        if (c < 0) {
                            return {
                                Item1: t,
                                Item2: false,
                                Item3: new Pit.FSharp.Collections.SetTree1.SetEmpty()
                            };
                        } else {
                            return (function (thisObject) {
                                if (c == 0) {
                                    return {
                                        Item1: new Pit.FSharp.Collections.SetTree1.SetEmpty(),
                                        Item2: true,
                                        Item3: new Pit.FSharp.Collections.SetTree1.SetEmpty()
                                    };
                                } else {
                                    return {
                                        Item1: new Pit.FSharp.Collections.SetTree1.SetEmpty(),
                                        Item2: false,
                                        Item3: t
                                    };
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (t instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return {
                                Item1: new Pit.FSharp.Collections.SetTree1.SetEmpty(),
                                Item2: false,
                                Item3: new Pit.FSharp.Collections.SetTree1.SetEmpty()
                            };
                        } else {
                            var t12 = t.get_Item3();
                            var t11 = t.get_Item2();
                            var k1 = t.get_Item1();
                            var c = comparer.IComparer1_Compare(pivot, k1);
                            return (function (thisObject) {
                                if (c < 0) {
                                    var patternInput = Pit.FSharp.Collections.SetTreeModule.split(comparer)(pivot)(t11);
                                    var t11Lo = patternInput.Item1;
                                    var t11Hi = patternInput.Item3;
                                    var havePivot = patternInput.Item2;
                                    return {
                                        Item1: t11Lo,
                                        Item2: havePivot,
                                        Item3: Pit.FSharp.Collections.SetTreeModule.balance(comparer)(t11Hi)(k1)(t12)
                                    };
                                } else {
                                    return (function (thisObject) {
                                        if (c == 0) {
                                            return {
                                                Item1: t11,
                                                Item2: true,
                                                Item3: t12
                                            };
                                        } else {
                                            var patternInput = Pit.FSharp.Collections.SetTreeModule.split(comparer)(pivot)(t12);
                                            var t12Lo = patternInput.Item1;
                                            var t12Hi = patternInput.Item3;
                                            var havePivot = patternInput.Item2;
                                            return {
                                                Item1: Pit.FSharp.Collections.SetTreeModule.balance(comparer)(t11)(k1)(t12Lo),
                                                Item2: havePivot,
                                                Item3: t12Hi
                                            };
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.spliceOutSuccessor = function (t) {
    return (function (thisObject) {
        if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
            var k2 = t.get_Item();
            return {
                Item1: k2,
                Item2: new Pit.FSharp.Collections.SetTree1.SetEmpty()
            };
        } else {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                    var r = t.get_Item3();
                    var l = t.get_Item2();
                    var k2 = t.get_Item1();
                    return (function (thisObject) {
                        if (l instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return {
                                Item1: k2,
                                Item2: r
                            };
                        } else {
                            var patternInput = Pit.FSharp.Collections.SetTreeModule.spliceOutSuccessor(l);
                            var l1 = patternInput.Item2;
                            var k3 = patternInput.Item1;
                            return {
                                Item1: k3,
                                Item2: Pit.FSharp.Collections.SetTreeModule.mk(l1)(k2)(r)
                            };
                        }
                    })(thisObject);
                } else {
                    throw "internal error: Map.spliceOutSuccessor"
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.remove = function (comparer) {
    return function (k) {
        return function (t) {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k2 = t.get_Item();
                    var c = comparer.IComparer1_Compare(k, k2);
                    return (function (thisObject) {
                        if (c == 0) {
                            return new Pit.FSharp.Collections.SetTree1.SetEmpty();
                        } else {
                            return t;
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (t instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                            var r = t.get_Item3();
                            var l = t.get_Item2();
                            var k2 = t.get_Item1();
                            var c = comparer.IComparer1_Compare(k, k2);
                            return (function (thisObject) {
                                if (c < 0) {
                                    return Pit.FSharp.Collections.SetTreeModule.rebalance(Pit.FSharp.Collections.SetTreeModule.remove(comparer)(k)(l))(k2)(r);
                                } else {
                                    return (function (thisObject) {
                                        if (c == 0) {
                                            var matchValue = {
                                                Item1: l,
                                                Item2: r
                                            };
                                            return (function (thisObject) {
                                                if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                                    return r;
                                                } else {
                                                    return (function (thisObject) {
                                                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                                            return l;
                                                        } else {
                                                            var patternInput = Pit.FSharp.Collections.SetTreeModule.spliceOutSuccessor(r);
                                                            var sk = patternInput.Item1;
                                                            var r1 = patternInput.Item2;
                                                            return Pit.FSharp.Collections.SetTreeModule.mk(l)(sk)(r1);
                                                        }
                                                    })(thisObject);
                                                }
                                            })(thisObject);
                                        } else {
                                            return Pit.FSharp.Collections.SetTreeModule.rebalance(l)(k2)(Pit.FSharp.Collections.SetTreeModule.remove(comparer)(k)(r));
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        } else {
                            return t;
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.mem = function (comparer) {
    return function (k) {
        return function (t) {
            return (function (thisObject) {
                if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k2 = t.get_Item();
                    return comparer.IComparer1_Compare(k, k2) == 0;
                } else {
                    return (function (thisObject) {
                        if (t instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return false;
                        } else {
                            var r = t.get_Item3();
                            var l = t.get_Item2();
                            var k2 = t.get_Item1();
                            var c = comparer.IComparer1_Compare(k, k2);
                            return (function (thisObject) {
                                if (c < 0) {
                                    return Pit.FSharp.Collections.SetTreeModule.mem(comparer)(k)(l);
                                } else {
                                    return (function (thisObject) {
                                        if (c == 0) {
                                            return true;
                                        } else {
                                            return Pit.FSharp.Collections.SetTreeModule.mem(comparer)(k)(r);
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.iter = function (f) {
    return function (t) {
        return (function (thisObject) {
            if (t instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k2 = t.get_Item();
                return f(k2);
            } else {
                return (function (thisObject) {
                    if (t instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return null;
                    } else {
                        var r = t.get_Item3();
                        var l = t.get_Item2();
                        var k2 = t.get_Item1();
                        Pit.FSharp.Collections.SetTreeModule.iter(f)(l);
                        f(k2);
                        return Pit.FSharp.Collections.SetTreeModule.iter(f)(r);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.foldBack = function (f) {
    return function (m) {
        return function (x) {
            return (function (thisObject) {
                if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k = m.get_Item();
                    return f(k)(x);
                } else {
                    return (function (thisObject) {
                        if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return x;
                        } else {
                            var r = m.get_Item3();
                            var l = m.get_Item2();
                            var k = m.get_Item1();
                            return Pit.FSharp.Collections.SetTreeModule.foldBack(f)(l)(f(k)(Pit.FSharp.Collections.SetTreeModule.foldBack(f)(r)(x)));
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.fold = function (f) {
    return function (x) {
        return function (m) {
            return (function (thisObject) {
                if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k = m.get_Item();
                    return f(x)(k);
                } else {
                    return (function (thisObject) {
                        if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return x;
                        } else {
                            var r = m.get_Item3();
                            var l = m.get_Item2();
                            var k = m.get_Item1();
                            var x1 = Pit.FSharp.Collections.SetTreeModule.fold(f)(x)(l);
                            var x12 = f(x1)(k);
                            return Pit.FSharp.Collections.SetTreeModule.fold(f)(x12)(r);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.forall = function (f) {
    return function (m) {
        return (function (thisObject) {
            if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k2 = m.get_Item();
                return f(k2);
            } else {
                return (function (thisObject) {
                    if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return true;
                    } else {
                        var r = m.get_Item3();
                        var l = m.get_Item2();
                        var k2 = m.get_Item1();
                        return (function (thisObject) {
                            if ((function (thisObject) {
                                if (f(k2)) {
                                    return Pit.FSharp.Collections.SetTreeModule.forall(f)(l);
                                } else {
                                    return false;
                                }
                            })(thisObject)) {
                                return Pit.FSharp.Collections.SetTreeModule.forall(f)(r);
                            } else {
                                return false;
                            }
                        })(thisObject);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.exists = function (f) {
    return function (m) {
        return (function (thisObject) {
            if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k2 = m.get_Item();
                return f(k2);
            } else {
                return (function (thisObject) {
                    if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return false;
                    } else {
                        var r = m.get_Item3();
                        var l = m.get_Item2();
                        var k2 = m.get_Item1();
                        return (function (thisObject) {
                            if ((function (thisObject) {
                                if (f(k2)) {
                                    return true;
                                } else {
                                    return Pit.FSharp.Collections.SetTreeModule.exists(f)(l);
                                }
                            })(thisObject)) {
                                return true;
                            } else {
                                return Pit.FSharp.Collections.SetTreeModule.exists(f)(r);
                            }
                        })(thisObject);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.isEmpty = function (m) {
    return (function (thisObject) {
        if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
            return true;
        } else {
            return false;
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.subset = function (comparer) {
    return function (a) {
        return function (b) {
            return Pit.FSharp.Collections.SetTreeModule.forall(function (x) {
                return Pit.FSharp.Collections.SetTreeModule.mem(comparer)(x)(b);
            })(a);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.psubset = function (comparer) {
    return function (a) {
        return function (b) {
            return (function (thisObject) {
                if (Pit.FSharp.Collections.SetTreeModule.forall(function (x) {
                    return Pit.FSharp.Collections.SetTreeModule.mem(comparer)(x)(b);
                })(a)) {
                    return Pit.FSharp.Collections.SetTreeModule.exists(function (x) {
                        return !Pit.FSharp.Collections.SetTreeModule.mem(comparer)(x)(a);
                    })(b);
                } else {
                    return false;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.filterAux = function (comparer) {
    return function (f) {
        return function (s) {
            return function (acc) {
                return (function (thisObject) {
                    if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                        var k = s.get_Item();
                        return (function (thisObject) {
                            if (f(k)) {
                                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc);
                            } else {
                                return acc;
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                return acc;
                            } else {
                                var r = s.get_Item3();
                                var l = s.get_Item2();
                                var k = s.get_Item1();
                                var acc1 = (function (thisObject) {
                                    if (f(k)) {
                                        return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc);
                                    } else {
                                        return acc;
                                    }
                                })(thisObject);
                                return Pit.FSharp.Collections.SetTreeModule.filterAux(comparer)(f)(l)(Pit.FSharp.Collections.SetTreeModule.filterAux(comparer)(f)(r)(acc1));
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.filter = function (comparer) {
    return function (f) {
        return function (s) {
            return Pit.FSharp.Collections.SetTreeModule.filterAux(comparer)(f)(s)(new Pit.FSharp.Collections.SetTree1.SetEmpty());
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.diffAux = function (comparer) {
    return function (m) {
        return function (acc) {
            return (function (thisObject) {
                if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    var k = m.get_Item();
                    return Pit.FSharp.Collections.SetTreeModule.remove(comparer)(k)(acc);
                } else {
                    return (function (thisObject) {
                        if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return acc;
                        } else {
                            var r = m.get_Item3();
                            var l = m.get_Item2();
                            var k = m.get_Item1();
                            return Pit.FSharp.Collections.SetTreeModule.diffAux(comparer)(l)(Pit.FSharp.Collections.SetTreeModule.diffAux(comparer)(r)(Pit.FSharp.Collections.SetTreeModule.remove(comparer)(k)(acc)));
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.diff = function (comparer) {
    return function (a) {
        return function (b) {
            return Pit.FSharp.Collections.SetTreeModule.diffAux(comparer)(b)(a);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.countAux = function (s) {
    return function (acc) {
        return (function (thisObject) {
            if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                return (acc + 1);
            } else {
                return (function (thisObject) {
                    if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return acc;
                    } else {
                        var r = s.get_Item3();
                        var l = s.get_Item2();
                        return Pit.FSharp.Collections.SetTreeModule.countAux(l)(Pit.FSharp.Collections.SetTreeModule.countAux(r)((acc + 1)));
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.count = function (s) {
    return Pit.FSharp.Collections.SetTreeModule.countAux(s)(0);
};
Pit.FSharp.Collections.SetTreeModule.union = function (comparer) {
    return function (t1) {
        return function (t2) {
            var matchValue = {
                Item1: t1,
                Item2: t2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    var t = matchValue.Item2;
                    return t;
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                    var t = matchValue.Item1;
                                    return t;
                                } else {
                                    return (function (thisObject) {
                                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                            var k1 = matchValue.Item1.get_Item();
                                            var t21 = matchValue.Item2;
                                            return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k1)(t21);
                                        } else {
                                            var k1 = matchValue.Item1.get_Item();
                                            var t21 = matchValue.Item2;
                                            return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k1)(t21);
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        } else {
                            return (function (thisObject) {
                                if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                    var t = matchValue.Item1;
                                    return t;
                                } else {
                                    return (function (thisObject) {
                                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                            var k2 = matchValue.Item2.get_Item();
                                            var t12 = matchValue.Item1;
                                            return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k2)(t12);
                                        } else {
                                            var h1 = matchValue.Item1.get_Item4();
                                            var h2 = matchValue.Item2.get_Item4();
                                            var k1 = matchValue.Item1.get_Item1();
                                            var k2 = matchValue.Item2.get_Item1();
                                            var t11 = matchValue.Item1.get_Item2();
                                            var t12 = matchValue.Item1.get_Item3();
                                            var t21 = matchValue.Item2.get_Item2();
                                            var t22 = matchValue.Item2.get_Item3();
                                            return (function (thisObject) {
                                                if (h1 > h2) {
                                                    var patternInput = Pit.FSharp.Collections.SetTreeModule.split(comparer)(k1)(t2);
                                                    var lo = patternInput.Item1;
                                                    var hi = patternInput.Item3;
                                                    return Pit.FSharp.Collections.SetTreeModule.balance(comparer)(Pit.FSharp.Collections.SetTreeModule.union(comparer)(t11)(lo))(k1)(Pit.FSharp.Collections.SetTreeModule.union(comparer)(t12)(hi));
                                                } else {
                                                    var patternInput = Pit.FSharp.Collections.SetTreeModule.split(comparer)(k2)(t1);
                                                    var lo = patternInput.Item1;
                                                    var hi = patternInput.Item3;
                                                    return Pit.FSharp.Collections.SetTreeModule.balance(comparer)(Pit.FSharp.Collections.SetTreeModule.union(comparer)(t21)(lo))(k2)(Pit.FSharp.Collections.SetTreeModule.union(comparer)(t22)(hi));
                                                }
                                            })(thisObject);
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.intersectionAux = function (comparer) {
    return function (b) {
        return function (m) {
            return function (acc) {
                return (function (thisObject) {
                    if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                        var k = m.get_Item();
                        return (function (thisObject) {
                            if (Pit.FSharp.Collections.SetTreeModule.mem(comparer)(k)(b)) {
                                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc);
                            } else {
                                return acc;
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                return acc;
                            } else {
                                var r = m.get_Item3();
                                var l = m.get_Item2();
                                var k = m.get_Item1();
                                var acc1 = Pit.FSharp.Collections.SetTreeModule.intersectionAux(comparer)(b)(r)(acc);
                                var acc12 = (function (thisObject) {
                                    if (Pit.FSharp.Collections.SetTreeModule.mem(comparer)(k)(b)) {
                                        return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc1);
                                    } else {
                                        return acc1;
                                    }
                                })(thisObject);
                                return Pit.FSharp.Collections.SetTreeModule.intersectionAux(comparer)(b)(l)(acc12);
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.intersection = function (comparer) {
    return function (a) {
        return function (b) {
            return Pit.FSharp.Collections.SetTreeModule.intersectionAux(comparer)(b)(a)(new Pit.FSharp.Collections.SetTree1.SetEmpty());
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.partition1 = function (comparer) {
    return function (f) {
        return function (k) {
            return function (tupledArg) {
                var acc1 = tupledArg.Item1;
                var acc2 = tupledArg.Item2;
                return (function (thisObject) {
                    if (f(k)) {
                        return {
                            Item1: Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc1),
                            Item2: acc2
                        };
                    } else {
                        return {
                            Item1: acc1,
                            Item2: Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc2)
                        };
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.partitionAux = function (comparer) {
    return function (f) {
        return function (s) {
            return function (acc) {
                return (function (thisObject) {
                    if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                        var k = s.get_Item();
                        var acc1 = acc.Item1;
                        var acc2 = acc.Item2;
                        return Pit.FSharp.Collections.SetTreeModule.partition1(comparer)(f)(k)({
                            Item1: acc1,
                            Item2: acc2
                        });
                    } else {
                        return (function (thisObject) {
                            if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                return acc;
                            } else {
                                var r = s.get_Item3();
                                var l = s.get_Item2();
                                var k = s.get_Item1();
                                var pacc = Pit.FSharp.Collections.SetTreeModule.partitionAux(comparer)(f)(r)({
                                    Item1: acc.Item1,
                                    Item2: acc.Item2
                                });
                                var lacc = Pit.FSharp.Collections.SetTreeModule.partition1(comparer)(f)(k)({
                                    Item1: pacc.Item1,
                                    Item2: pacc.Item2
                                });
                                return Pit.FSharp.Collections.SetTreeModule.partitionAux(comparer)(f)(l)({
                                    Item1: lacc.Item1,
                                    Item2: lacc.Item2
                                });
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.partition = function (comparer) {
    return function (f) {
        return function (s) {
            return Pit.FSharp.Collections.SetTreeModule.partitionAux(comparer)(f)(s)({
                Item1: new Pit.FSharp.Collections.SetTree1.SetEmpty(),
                Item2: new Pit.FSharp.Collections.SetTree1.SetEmpty()
            });
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.MatchSetNodeMatchSetEmpty = function (s) {
    return (function (thisObject) {
        if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
            var k2 = s.get_Item();
            return new Pit.FSharp.Core.FSharpChoice2.Choice1Of2({
                Item1: k2,
                Item2: new Pit.FSharp.Collections.SetTree1.SetEmpty(),
                Item3: new Pit.FSharp.Collections.SetTree1.SetEmpty()
            });
        } else {
            return (function (thisObject) {
                if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return new Pit.FSharp.Core.FSharpChoice2.Choice2Of2(null);
                } else {
                    var r = s.get_Item3();
                    var l = s.get_Item2();
                    var k2 = s.get_Item1();
                    return new Pit.FSharp.Core.FSharpChoice2.Choice1Of2({
                        Item1: k2,
                        Item2: l,
                        Item3: r
                    });
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.nextElemCont = function (comparer) {
    return function (k) {
        return function (s) {
            return function (cont) {
                var activePatternResult = Pit.FSharp.Collections.SetTreeModule.MatchSetNodeMatchSetEmpty(s);
                return (function (thisObject) {
                    if (activePatternResult instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2) {
                        return cont(new Pit.FSharp.Core.FSharpOption1.None());
                    } else {
                        var k2 = activePatternResult.get_Item().Item1;
                        var l = activePatternResult.get_Item().Item2;
                        var r = activePatternResult.get_Item().Item3;
                        var c = comparer.IComparer1_Compare(k, k2);
                        return (function (thisObject) {
                            if (c < 0) {
                                return Pit.FSharp.Collections.SetTreeModule.nextElemCont(comparer)(k)(l)(function (_arg1) {
                                    return (function (thisObject) {
                                        if (_arg1 instanceof Pit.FSharp.Core.FSharpOption1.None) {
                                            return cont(new Pit.FSharp.Core.FSharpOption1.Some(k2));
                                        } else {
                                            var res = _arg1;
                                            return res;
                                        }
                                    })(thisObject);
                                });
                            } else {
                                return (function (thisObject) {
                                    if (c == 0) {
                                        return cont(Pit.FSharp.Collections.SetTreeModule.minimumElementOpt(r));
                                    } else {
                                        return Pit.FSharp.Collections.SetTreeModule.nextElemCont(comparer)(k)(r)(cont);
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.nextElem = function (comparer) {
    return function (k) {
        return function (s) {
            return Pit.FSharp.Collections.SetTreeModule.nextElemCont(comparer)(k)(s)(function (res) {
                return res;
            });
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.prevElemCont = function (comparer) {
    return function (k) {
        return function (s) {
            return function (cont) {
                var activePatternResult = Pit.FSharp.Collections.SetTreeModule.MatchSetNodeMatchSetEmpty(s);
                return (function (thisObject) {
                    if (activePatternResult instanceof Pit.FSharp.Core.FSharpChoice2.Choice2Of2) {
                        return cont(new Pit.FSharp.Core.FSharpOption1.None());
                    } else {
                        var k2 = activePatternResult.get_Item().Item1;
                        var l = activePatternResult.get_Item().Item2;
                        var r = activePatternResult.get_Item().Item3;
                        var c = comparer.IComparer1_Compare(k, k2);
                        return (function (thisObject) {
                            if (c > 0) {
                                return Pit.FSharp.Collections.SetTreeModule.prevElemCont(comparer)(k)(r)(function (_arg2) {
                                    return (function (thisObject) {
                                        if (_arg2 instanceof Pit.FSharp.Core.FSharpOption1.None) {
                                            return cont(new Pit.FSharp.Core.FSharpOption1.Some(k2));
                                        } else {
                                            var res = _arg2;
                                            return res;
                                        }
                                    })(thisObject);
                                });
                            } else {
                                return (function (thisObject) {
                                    if (c == 0) {
                                        return cont(Pit.FSharp.Collections.SetTreeModule.maximumElementOpt(r));
                                    } else {
                                        return Pit.FSharp.Collections.SetTreeModule.prevElemCont(comparer)(k)(l)(cont);
                                    }
                                })(thisObject);
                            }
                        })(thisObject);
                    }
                })(this);
            };
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.prevElem = function (comparer) {
    return function (k) {
        return function (s) {
            return Pit.FSharp.Collections.SetTreeModule.prevElemCont(comparer)(k)(s)(function (res) {
                return res;
            });
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.minimumElementAux = function (s) {
    return function (n) {
        return (function (thisObject) {
            if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k = s.get_Item();
                return k;
            } else {
                return (function (thisObject) {
                    if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return n;
                    } else {
                        var l = s.get_Item2();
                        var k = s.get_Item1();
                        return Pit.FSharp.Collections.SetTreeModule.minimumElementAux(l)(k);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.minimumElementOpt = function (s) {
    return (function (thisObject) {
        if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
            var k = s.get_Item();
            return new Pit.FSharp.Core.FSharpOption1.Some(k);
        } else {
            return (function (thisObject) {
                if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                } else {
                    var l = s.get_Item2();
                    var k = s.get_Item1();
                    return new Pit.FSharp.Core.FSharpOption1.Some(Pit.FSharp.Collections.SetTreeModule.minimumElementAux(l)(k));
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.maximumElementAux = function (s) {
    return function (n) {
        return (function (thisObject) {
            if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k = s.get_Item();
                return k;
            } else {
                return (function (thisObject) {
                    if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return n;
                    } else {
                        var r = s.get_Item3();
                        var k = s.get_Item1();
                        return Pit.FSharp.Collections.SetTreeModule.maximumElementAux(r)(k);
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.maximumElementOpt = function (s) {
    return (function (thisObject) {
        if (s instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
            var k = s.get_Item();
            return new Pit.FSharp.Core.FSharpOption1.Some(k);
        } else {
            return (function (thisObject) {
                if (s instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return new Pit.FSharp.Core.FSharpOption1.None();
                } else {
                    var r = s.get_Item3();
                    var k = s.get_Item1();
                    return new Pit.FSharp.Core.FSharpOption1.Some(Pit.FSharp.Collections.SetTreeModule.maximumElementAux(r)(k));
                }
            })(thisObject);
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.minimumElement = function (s) {
    var matchValue = Pit.FSharp.Collections.SetTreeModule.minimumElementOpt(s);
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
            throw "Set contains no element"
        } else {
            var k = matchValue.get_Value();
            return k;
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.maximumElement = function (s) {
    var matchValue = Pit.FSharp.Collections.SetTreeModule.maximumElementOpt(s);
    return (function (thisObject) {
        if (matchValue instanceof Pit.FSharp.Core.FSharpOption1.None) {
            throw "Set contains no element"
        } else {
            var k = matchValue.get_Value();
            return k;
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.collapseLHS = function (stack) {
    return (function (thisObject) {
        if (stack instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
            return (function (thisObject) {
                if (stack.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                    return stack;
                } else {
                    return (function (thisObject) {
                        if (stack.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                            var k = stack.get_Head().get_Item1();
                            var l = stack.get_Head().get_Item2();
                            var r = stack.get_Head().get_Item3();
                            var rest = stack.get_Tail();
                            return Pit.FSharp.Collections.SetTreeModule.collapseLHS(new Pit.FSharp.Collections.FSharpList1.Cons(l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetOne(k), new Pit.FSharp.Collections.FSharpList1.Cons(r, rest))));
                        } else {
                            var rest = stack.get_Tail();
                            return Pit.FSharp.Collections.SetTreeModule.collapseLHS(rest);
                        }
                    })(thisObject);
                }
            })(thisObject);
        } else {
            return new Pit.FSharp.Collections.FSharpList1.Empty();
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.mkIterator = function (s) {
    return new Pit.FSharp.Collections.SetTreeModule.SetIterator1(Pit.FSharp.Collections.SetTreeModule.collapseLHS(new Pit.FSharp.Collections.FSharpList1.Cons(s, new Pit.FSharp.Collections.FSharpList1.Empty())), false);
};
Pit.FSharp.Collections.SetTreeModule.notStarted = function () {
    throw Pit.InvalidOperationException.ctors[0]("Enumeration Not Started");
};
Pit.FSharp.Collections.SetTreeModule.alreadyFinished = function () {
    throw Pit.InvalidOperationException.ctors[0]("Enumeration Already Finished");
};
Pit.FSharp.Collections.SetTreeModule.current = function (i) {
    return (function (thisObject) {
        if (i.get_started()) {
            var matchValue = i.get_stack();
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                    return Pit.FSharp.Collections.SetTreeModule.alreadyFinished();
                } else {
                    return (function (thisObject) {
                        if (matchValue.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                            var k = matchValue.get_Head().get_Item();
                            return k;
                        } else {
                            throw "Please report error: Set iterator, unexpected stack for current"
                        }
                    })(thisObject);
                }
            })(thisObject);
        } else {
            return Pit.FSharp.Collections.SetTreeModule.notStarted();
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.moveNext = function (i) {
    return (function (thisObject) {
        if (i.get_started()) {
            var matchValue = i.get_stack();
            return (function (thisObject) {
                if (matchValue instanceof Pit.FSharp.Collections.FSharpList1.Empty) {
                    return false;
                } else {
                    return (function (thisObject) {
                        if (matchValue.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                            var rest = matchValue.get_Tail();
                            i.set_stack(Pit.FSharp.Collections.SetTreeModule.collapseLHS(rest));
                            return !i.get_stack().get_IsEmpty();
                        } else {
                            throw "Please report error: Set iterator, unexpected stack for moveNext"
                        }
                    })(thisObject);
                }
            })(thisObject);
        } else {
            i.set_started(true);
            return !i.get_stack().get_IsEmpty();
        }
    })(this);
};
Pit.FSharp.Collections.SetTreeModule.mkIEnumerator = function (s) {
    return new Pit.FSharp.Collections.SetTreeModule.SetTreeEnumerator1(s);
};
Pit.FSharp.Collections.SetTreeModule.compareStacks = function (comparer) {
    return function (l1) {
        return function (l2) {
            var matchValue = {
                Item1: l1,
                Item2: l2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return (function (thisObject) {
                                if (matchValue.Item2.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                    return (function (thisObject) {
                                        if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                            var n1k = matchValue.Item1.get_Head().get_Item();
                                            var n2k = matchValue.Item2.get_Head().get_Item();
                                            var t1 = matchValue.Item1.get_Tail();
                                            var t2 = matchValue.Item2.get_Tail();
                                            var c = comparer.IComparer1_Compare(n1k, n2k);
                                            return (function (thisObject) {
                                                if (c != 0) {
                                                    return c;
                                                } else {
                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(t1)(t2);
                                                }
                                            })(thisObject);
                                        } else {
                                            return (function (thisObject) {
                                                if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                    return (function (thisObject) {
                                                        if (matchValue.Item1.get_Head().get_Item2() instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                                            var emp = matchValue.Item1.get_Head().get_Item2();
                                                            var n1k = matchValue.Item1.get_Head().get_Item1();
                                                            var n1r = matchValue.Item1.get_Head().get_Item3();
                                                            var n2k = matchValue.Item2.get_Head().get_Item();
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            var t2 = matchValue.Item2.get_Tail();
                                                            var c = comparer.IComparer1_Compare(n1k, n2k);
                                                            return (function (thisObject) {
                                                                if (c != 0) {
                                                                    return c;
                                                                } else {
                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1r, t1))(new Pit.FSharp.Collections.FSharpList1.Cons(emp, t2));
                                                                }
                                                            })(thisObject);
                                                        } else {
                                                            var n1k = matchValue.Item1.get_Head().get_Item1();
                                                            var n1l = matchValue.Item1.get_Head().get_Item2();
                                                            var n1r = matchValue.Item1.get_Head().get_Item3();
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n1k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n1r, 0), t1)))(l2);
                                                        }
                                                    })(thisObject);
                                                } else {
                                                    var n2k = matchValue.Item2.get_Head().get_Item();
                                                    var t2 = matchValue.Item2.get_Tail();
                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(l1)(new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetEmpty(), new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetOne(n2k), t2)));
                                                }
                                            })(thisObject);
                                        }
                                    })(thisObject);
                                } else {
                                    return (function (thisObject) {
                                        if (matchValue.Item2.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                            return (function (thisObject) {
                                                if (matchValue.Item2.get_Head().get_Item2() instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                                    return (function (thisObject) {
                                                        if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                                            var n1k = matchValue.Item1.get_Head().get_Item();
                                                            var n2k = matchValue.Item2.get_Head().get_Item1();
                                                            var n2r = matchValue.Item2.get_Head().get_Item3();
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            var t2 = matchValue.Item2.get_Tail();
                                                            var c = comparer.IComparer1_Compare(n1k, n2k);
                                                            return (function (thisObject) {
                                                                if (c != 0) {
                                                                    return c;
                                                                } else {
                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetEmpty(), t1))(new Pit.FSharp.Collections.FSharpList1.Cons(n2r, t2));
                                                                }
                                                            })(thisObject);
                                                        } else {
                                                            return (function (thisObject) {
                                                                if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                                    return (function (thisObject) {
                                                                        if (matchValue.Item1.get_Head().get_Item2() instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                                                                            var n1k = matchValue.Item1.get_Head().get_Item1();
                                                                            var n1r = matchValue.Item1.get_Head().get_Item3();
                                                                            var n2k = matchValue.Item2.get_Head().get_Item1();
                                                                            var n2r = matchValue.Item2.get_Head().get_Item3();
                                                                            var t1 = matchValue.Item1.get_Tail();
                                                                            var t2 = matchValue.Item2.get_Tail();
                                                                            var c = comparer.IComparer1_Compare(n1k, n2k);
                                                                            return (function (thisObject) {
                                                                                if (c != 0) {
                                                                                    return c;
                                                                                } else {
                                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1r, t1))(new Pit.FSharp.Collections.FSharpList1.Cons(n2r, t2));
                                                                                }
                                                                            })(thisObject);
                                                                        } else {
                                                                            var n1k = matchValue.Item1.get_Head().get_Item1();
                                                                            var n1l = matchValue.Item1.get_Head().get_Item2();
                                                                            var n1r = matchValue.Item1.get_Head().get_Item3();
                                                                            var t1 = matchValue.Item1.get_Tail();
                                                                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n1k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n1r, 0), t1)))(l2);
                                                                        }
                                                                    })(thisObject);
                                                                } else {
                                                                    var n2k = matchValue.Item2.get_Head().get_Item1();
                                                                    var n2l = matchValue.Item2.get_Head().get_Item2();
                                                                    var n2r = matchValue.Item2.get_Head().get_Item3();
                                                                    var t2 = matchValue.Item2.get_Tail();
                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(l1)(new Pit.FSharp.Collections.FSharpList1.Cons(n2l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n2k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n2r, 0), t2)));
                                                                }
                                                            })(thisObject);
                                                        }
                                                    })(thisObject);
                                                } else {
                                                    return (function (thisObject) {
                                                        if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                                            var n1k = matchValue.Item1.get_Head().get_Item();
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetEmpty(), new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetOne(n1k), t1)))(l2);
                                                        } else {
                                                            return (function (thisObject) {
                                                                if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                                    var n1k = matchValue.Item1.get_Head().get_Item1();
                                                                    var n1l = matchValue.Item1.get_Head().get_Item2();
                                                                    var n1r = matchValue.Item1.get_Head().get_Item3();
                                                                    var t1 = matchValue.Item1.get_Tail();
                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n1k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n1r, 0), t1)))(l2);
                                                                } else {
                                                                    var n2k = matchValue.Item2.get_Head().get_Item1();
                                                                    var n2l = matchValue.Item2.get_Head().get_Item2();
                                                                    var n2r = matchValue.Item2.get_Head().get_Item3();
                                                                    var t2 = matchValue.Item2.get_Tail();
                                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(l1)(new Pit.FSharp.Collections.FSharpList1.Cons(n2l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n2k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n2r, 0), t2)));
                                                                }
                                                            })(thisObject);
                                                        }
                                                    })(thisObject);
                                                }
                                            })(thisObject);
                                        } else {
                                            return (function (thisObject) {
                                                if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                                                    var n1k = matchValue.Item1.get_Head().get_Item();
                                                    var t1 = matchValue.Item1.get_Tail();
                                                    return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetEmpty(), new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetOne(n1k), t1)))(l2);
                                                } else {
                                                    return (function (thisObject) {
                                                        if (matchValue.Item1.get_Head() instanceof Pit.FSharp.Collections.SetTree1.SetNode) {
                                                            var n1k = matchValue.Item1.get_Head().get_Item1();
                                                            var n1l = matchValue.Item1.get_Head().get_Item2();
                                                            var n1r = matchValue.Item1.get_Head().get_Item3();
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(n1l, new Pit.FSharp.Collections.FSharpList1.Cons(new Pit.FSharp.Collections.SetTree1.SetNode(n1k, new Pit.FSharp.Collections.SetTree1.SetEmpty(), n1r, 0), t1)))(l2);
                                                        } else {
                                                            var t1 = matchValue.Item1.get_Tail();
                                                            var t2 = matchValue.Item2.get_Tail();
                                                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(t1)(t2);
                                                        }
                                                    })(thisObject);
                                                }
                                            })(thisObject);
                                        }
                                    })(thisObject);
                                }
                            })(thisObject);
                        } else {
                            return 1;
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.FSharpList1.Cons) {
                            return -1;
                        } else {
                            return 0;
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.compare = function (comparer) {
    return function (s1) {
        return function (s2) {
            var matchValue = {
                Item1: s1,
                Item2: s2
            };
            return (function (thisObject) {
                if (matchValue.Item1 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return 0;
                        } else {
                            return -1;
                        }
                    })(thisObject);
                } else {
                    return (function (thisObject) {
                        if (matchValue.Item2 instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                            return 1;
                        } else {
                            return Pit.FSharp.Collections.SetTreeModule.compareStacks(comparer)(new Pit.FSharp.Collections.FSharpList1.Cons(s1, new Pit.FSharp.Collections.FSharpList1.Empty()))(new Pit.FSharp.Collections.FSharpList1.Cons(s2, new Pit.FSharp.Collections.FSharpList1.Empty()));
                        }
                    })(thisObject);
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.choose = function (s) {
    return Pit.FSharp.Collections.SetTreeModule.minimumElement(s);
};
Pit.FSharp.Collections.SetTreeModule.toListLoop = function (m) {
    return function (acc) {
        return (function (thisObject) {
            if (m instanceof Pit.FSharp.Collections.SetTree1.SetOne) {
                var k = m.get_Item();
                return new Pit.FSharp.Collections.FSharpList1.Cons(k, acc);
            } else {
                return (function (thisObject) {
                    if (m instanceof Pit.FSharp.Collections.SetTree1.SetEmpty) {
                        return acc;
                    } else {
                        var r = m.get_Item3();
                        var l = m.get_Item2();
                        var k = m.get_Item1();
                        return Pit.FSharp.Collections.SetTreeModule.toListLoop(l)(new Pit.FSharp.Collections.FSharpList1.Cons(k, Pit.FSharp.Collections.SetTreeModule.toListLoop(r)(acc)));
                    }
                })(thisObject);
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.toList = function (s) {
    return Pit.FSharp.Collections.SetTreeModule.toListLoop(s)(new Pit.FSharp.Collections.FSharpList1.Empty());
};
Pit.FSharp.Collections.SetTreeModule.copyToArray = function (s) {
    return function (arr) {
        return function (i) {
            var j = i;
            return Pit.FSharp.Collections.SetTreeModule.iter(function (x) {
                arr[j] = x;
                return j = (j + 1);
            })(s);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.toArray = function (s) {
    var n = Pit.FSharp.Collections.SetTreeModule.count(s);
    var res = Pit.FSharp.Collections.ArrayModule.ZeroCreate(n);
    Pit.FSharp.Collections.SetTreeModule.copyToArray(s)(res)(0);
    return res;
};
Pit.FSharp.Collections.SetTreeModule.mkFromEnumerator = function (comparer) {
    return function (acc) {
        return function (e) {
            return (function (thisObject) {
                if (e.IEnumerator_MoveNext()) {
                    return Pit.FSharp.Collections.SetTreeModule.mkFromEnumerator(comparer)(Pit.FSharp.Collections.SetTreeModule.add(comparer)(e.IEnumerator1_get_Current())(acc))(e);
                } else {
                    return acc;
                }
            })(this);
        };
    };
};
Pit.FSharp.Collections.SetTreeModule.ofSeq = function (comparer) {
    return function (c) {
        var ie = c.IEnumerable1_GetEnumerator();
        return (function (thisObject) {
            try {
                return Pit.FSharp.Collections.SetTreeModule.mkFromEnumerator(comparer)(new Pit.FSharp.Collections.SetTree1.SetEmpty())(ie);
            } finally {
                (function (thisObject) {
                    if (ie.containsInterface("__getIDisposable")) {
                        return ie.IDisposable_Dispose();
                    } else {
                        return null;
                    }
                })(thisObject)
            }
        })(this);
    };
};
Pit.FSharp.Collections.SetTreeModule.ofArray = function (comparer) {
    return function (l) {
        return Pit.FSharp.Collections.ArrayModule.Fold(function (acc) {
            return function (k) {
                return Pit.FSharp.Collections.SetTreeModule.add(comparer)(k)(acc);
            };
        })(new Pit.FSharp.Collections.SetTree1.SetEmpty())(l);
    };
};
registerNamespace("Pit.FSharp.Control");
Pit.FSharp.Control.LazyExtensions.Lazy1 = (function () {
    function Lazy1(f) {
        this.f = f;
        this.isValueCreated = false;
        this.value = null;
    }
    Lazy1.prototype.Force = function () {
        (function (thisObject) {
            if (!thisObject.isValueCreated) {
                thisObject.isValueCreated = true;
                return thisObject.value = thisObject.f();
            } else {
                return null;
            }
        })(this);
        return this.value;
    };
    Lazy1.prototype.set_IsValueCreated = function (v) {
        return this.isValueCreated = v;
    };
    Lazy1.prototype.get_IsValueCreated = function () {
        return this.isValueCreated;
    };
    Lazy1.prototype.get_Value = function () {
        (function (thisObject) {
            if (!thisObject.isValueCreated) {
                throw Pit.InvalidOperationException.ctors[0]("Value not created")
            } else {
                return null;
            }
        })(this);
        return this.value;
    };
    Lazy1.prototype.get_IsDelayed = function () {
        return !x.get_IsValueCreated();
    };
    Lazy1.prototype.get_IsForced = function () {
        return x.get_IsValueCreated();
    };
    return Lazy1;
})();
Pit.FSharp.Control.LazyExtensions.Lazy1.Create = function (f) {
    return new Pit.FSharp.Control.LazyExtensions.Lazy1(f);
};
Pit.FSharp.Control.LazyExtensions.Lazy1.CreateFromValue = function (value) {
    return Pit.FSharp.Control.LazyExtensions.Lazy1.Create(function () {
        return value;
    });
};
Pit.FSharp.Control.LazyExtensions.Create = function (f) {
    return Pit.FSharp.Control.LazyExtensions.Lazy1.Create(f);
};
Pit.FSharp.Control.LazyExtensions.CreateFromValue = function (v) {
    return Pit.FSharp.Control.LazyExtensions.Lazy1.CreateFromValue(v);
};
Pit.FSharp.Control.LazyExtensions.Force = function (v) {
    return v.Force();
};
registerNamespace("Pit.FSharp.Core");
registerNamespace("Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions");
Pit.FSharp.Core.LanguagePrimitives.GenericComparer1 = (function () {
    function GenericComparer1() {
        this.IComparer1 = __createIComparer1(this);
    }
    function __createIComparer1(thisObject) {
        var icomparer1 = (function () {
            function IComparer1(thisObject) {
                this.x = thisObject;
            }
            IComparer1.prototype.Compare = function (x, y) {
                return (function (thisObject) {
                    if (x < y) {
                        return -1;
                    } else {
                        return (function (thisObject) {
                            if (x == y) {
                                return 0;
                            } else {
                                return 1;
                            }
                        })(thisObject);
                    }
                })(this);
            };
            return IComparer1;
        })();
        return new icomparer1(thisObject);
    }
    GenericComparer1.prototype.__getIComparer1 = function () {
        return this.IComparer1;
    };
    GenericComparer1.prototype.IComparer1_Compare = function (x, y) {
        return this.IComparer1.Compare(x, y);
    };
    return GenericComparer1;
})();
Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetArray = function (arr) {
    return function (n) {
        return arr[n];
    };
};
Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.SetArray = function (arr) {
    return function (n) {
        return function (x) {
            return arr[n] = x;
        };
    };
};
Pit.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.GetString = function (s) {
    return function (i) {
        var js = s;
        return js.charAt(i);
    };
};
Pit.FSharp.Core.LanguagePrimitives.FastGenericComparer = function () {
    return new Pit.FSharp.Core.LanguagePrimitives.GenericComparer1();
};
Pit.FSharp.Core.OptionModule.IsSome = function (option) {
    return (function (thisObject) {
        if (option instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            return true;
        } else {
            return false;
        }
    })(this);
};
Pit.FSharp.Core.OptionModule.IsNone = function (option) {
    return (function (thisObject) {
        if (option instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            return false;
        } else {
            return true;
        }
    })(this);
};
Pit.FSharp.Core.OptionModule.Count = function (option) {
    return (function (thisObject) {
        if (option instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            return 1;
        } else {
            return 0;
        }
    })(this);
};
Pit.FSharp.Core.OptionModule.Fold = function (f) {
    return function (s) {
        return function (inp) {
            return (function (thisObject) {
                if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                    var x = inp.get_Value();
                    return f(s)(x);
                } else {
                    return s;
                }
            })(this);
        };
    };
};
Pit.FSharp.Core.OptionModule.FoldBack = function (f) {
    return function (inp) {
        return function (s) {
            return (function (thisObject) {
                if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                    var x = inp.get_Value();
                    return f(x)(s);
                } else {
                    return s;
                }
            })(this);
        };
    };
};
Pit.FSharp.Core.OptionModule.Exists = function (p) {
    return function (inp) {
        return (function (thisObject) {
            if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = inp.get_Value();
                return p(x);
            } else {
                return false;
            }
        })(this);
    };
};
Pit.FSharp.Core.OptionModule.ForAll = function (p) {
    return function (inp) {
        return (function (thisObject) {
            if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = inp.get_Value();
                return p(x);
            } else {
                return true;
            }
        })(this);
    };
};
Pit.FSharp.Core.OptionModule.Iterate = function (f) {
    return function (inp) {
        return (function (thisObject) {
            if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = inp.get_Value();
                return f(x);
            } else {
                return null;
            }
        })(this);
    };
};
Pit.FSharp.Core.OptionModule.Map = function (f) {
    return function (inp) {
        return (function (thisObject) {
            if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = inp.get_Value();
                return new Pit.FSharp.Core.FSharpOption1.Some(f(x));
            } else {
                return new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this);
    };
};
Pit.FSharp.Core.OptionModule.Bind = function (f) {
    return function (inp) {
        return (function (thisObject) {
            if (inp instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var x = inp.get_Value();
                return f(x);
            } else {
                return new Pit.FSharp.Core.FSharpOption1.None();
            }
        })(this);
    };
};
Pit.FSharp.Core.OptionModule.ToArray = function (option) {
    return (function (thisObject) {
        if (option instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            var x = option.get_Value();
            return [x];
        } else {
            return [];
        }
    })(this);
};
Pit.FSharp.Core.OptionModule.ToList = function (option) {
    return (function (thisObject) {
        if (option instanceof Pit.FSharp.Core.FSharpOption1.Some) {
            var x = option.get_Value();
            return new Pit.FSharp.Collections.FSharpList1.Cons(x, new Pit.FSharp.Collections.FSharpList1.Empty());
        } else {
            return new Pit.FSharp.Collections.FSharpList1.Empty();
        }
    })(this);
};
registerNamespace("Pit.FSharp.Core");
Pit.FSharp.Core.Operators.mkSeq1 = (function () {
    function mkSeq1(f) {
        this.IEnumerable = __createIEnumerable(this);
        this.IEnumerable1 = __createIEnumerable1(this);
        this.f = f;
    }
    function __createIEnumerable(thisObject) {
        var ienumerable = (function () {
            function IEnumerable(thisObject) {
                this.x = thisObject;
            }
            IEnumerable.prototype.GetEnumerator = function () {
                return this.x.f();
            };
            return IEnumerable;
        })();
        return new ienumerable(thisObject);
    }
    mkSeq1.prototype.__getIEnumerable = function () {
        return this.IEnumerable;
    };
    mkSeq1.prototype.IEnumerable_GetEnumerator = function () {
        return this.IEnumerable.GetEnumerator();
    };
    function __createIEnumerable1(thisObject) {
        var ienumerable1 = (function () {
            function IEnumerable1(thisObject) {
                this.x = thisObject;
            }
            IEnumerable1.prototype.GetEnumerator = function () {
                return this.x.f();
            };
            return IEnumerable1;
        })();
        return new ienumerable1(thisObject);
    }
    mkSeq1.prototype.__getIEnumerable1 = function () {
        return this.IEnumerable1;
    };
    mkSeq1.prototype.IEnumerable1_GetEnumerator = function () {
        return this.IEnumerable1.GetEnumerator();
    };
    return mkSeq1;
})();
Pit.FSharp.Core.Operators.RangeEnumerator = (function () {
    function RangeEnumerator(start, step, endto) {
        this.IDisposable = __createIDisposable(this);
        this.IEnumerator = __createIEnumerator(this);
        this.IEnumerator1 = __createIEnumerator1(this);
        this.start = start;
        this.step = step;
        this.endto = endto;
        this.curr = (this.start - this.step);
    }
    RangeEnumerator.prototype.Get = function () {
        return this.curr;
    };
    function __createIDisposable(thisObject) {
        var idisposable = (function () {
            function IDisposable(thisObject) {
                this.x = thisObject;
            }
            IDisposable.prototype.Dispose = function () {
                return null;
            };
            return IDisposable;
        })();
        return new idisposable(thisObject);
    }
    RangeEnumerator.prototype.__getIDisposable = function () {
        return this.IDisposable;
    };
    RangeEnumerator.prototype.IDisposable_Dispose = function () {
        return this.IDisposable.Dispose();
    };
    function __createIEnumerator(thisObject) {
        var ienumerator = (function () {
            function IEnumerator(thisObject) {
                this.x = thisObject;
            }
            IEnumerator.prototype.MoveNext = function () {
                this.x.curr = (this.x.curr + this.x.step);
                return (function (thisObject) {
                    if (thisObject.x.start <= thisObject.x.endto) {
                        return (function (thisObject) {
                            if (thisObject.x.curr <= thisObject.x.endto) {
                                return true;
                            } else {
                                return false;
                            }
                        })(thisObject);
                    } else {
                        return (function (thisObject) {
                            if (thisObject.x.curr >= thisObject.x.endto) {
                                return true;
                            } else {
                                return false;
                            }
                        })(thisObject);
                    }
                })(this);
            };
            IEnumerator.prototype.get_Current = function () {
                return this.x.Get();
            };
            IEnumerator.prototype.Reset = function () {
                return this.x.curr = (this.x.start - this.x.step);
            };
            return IEnumerator;
        })();
        return new ienumerator(thisObject);
    }
    RangeEnumerator.prototype.__getIEnumerator = function () {
        return this.IEnumerator;
    };
    RangeEnumerator.prototype.IEnumerator_MoveNext = function () {
        return this.IEnumerator.MoveNext();
    };
    RangeEnumerator.prototype.IEnumerator_get_Current = function () {
        return this.IEnumerator.get_Current();
    };
    RangeEnumerator.prototype.IEnumerator_Reset = function () {
        return this.IEnumerator.Reset();
    };
    function __createIEnumerator1(thisObject) {
        var ienumerator1 = (function () {
            function IEnumerator1(thisObject) {
                this.x = thisObject;
            }
            IEnumerator1.prototype.get_Current = function () {
                return this.x.Get();
            };
            return IEnumerator1;
        })();
        return new ienumerator1(thisObject);
    }
    RangeEnumerator.prototype.__getIEnumerator1 = function () {
        return this.IEnumerator1;
    };
    RangeEnumerator.prototype.IEnumerator1_get_Current = function () {
        return this.IEnumerator1.get_Current();
    };
    return RangeEnumerator;
})();
Pit.FSharp.Core.Operators.op_PipeRight = function (x) {
    return function (f) {
        return f(x);
    };
};
Pit.FSharp.Core.Operators.op_PipeRight2 = function (tupledArg) {
    var x1 = tupledArg.Item1;
    var x2 = tupledArg.Item2;
    return function (f) {
        return f(x1)(x2);
    };
};
Pit.FSharp.Core.Operators.op_PipeRight3 = function (tupledArg) {
    var x1 = tupledArg.Item1;
    var x2 = tupledArg.Item2;
    var x3 = tupledArg.Item3;
    return function (f) {
        return f(x1)(x2)(x3);
    };
};
Pit.FSharp.Core.Operators.op_PipeLeft = function (f) {
    return function (x) {
        return f(x);
    };
};
Pit.FSharp.Core.Operators.op_PipeLeft2 = function (f) {
    return function (tupledArg) {
        var x1 = tupledArg.Item1;
        var x2 = tupledArg.Item2;
        return f(x1)(x2);
    };
};
Pit.FSharp.Core.Operators.op_PipeLeft3 = function (f) {
    return function (tupledArg) {
        var x1 = tupledArg.Item1;
        var x2 = tupledArg.Item2;
        var x3 = tupledArg.Item3;
        return f(x1)(x2)(x3);
    };
};
Pit.FSharp.Core.Operators.op_ComposeRight = function (f) {
    return function (g) {
        return function (x) {
            return g(f(x));
        };
    };
};
Pit.FSharp.Core.Operators.op_ComposeLeft = function (f) {
    return function (g) {
        return function (x) {
            return f(g(x));
        };
    };
};
Pit.FSharp.Core.Operators.op_Concatenate = function (x) {
    return function (y) {
        return (x + y);
    };
};
Pit.FSharp.Core.Operators.op_Append = function (list1) {
    return function (list2) {
        return Pit.FSharp.Collections.ListModule.Append(list1)(list2);
    };
};
Pit.FSharp.Core.Operators.Fst = function (tupledArg) {
    var a = tupledArg.Item1;
    var _arg1 = tupledArg.Item2;
    return a;
};
Pit.FSharp.Core.Operators.Snd = function (tupledArg) {
    var _arg2 = tupledArg.Item1;
    var b = tupledArg.Item2;
    return b;
};
Pit.FSharp.Core.Operators.Ignore = function (_arg3) {
    return null;
};
Pit.FSharp.Core.Operators.defaultArg = function (x) {
    return function (y) {
        return (function (thisObject) {
            if (x instanceof Pit.FSharp.Core.FSharpOption1.Some) {
                var v = x.get_Value();
                return v;
            } else {
                return y;
            }
        })(this);
    };
};
Pit.FSharp.Core.Operators.Raise = function (e) {
    return e;
};
Pit.FSharp.Core.Operators.NullArg = function (argName) {
    throw argName;
};
Pit.FSharp.Core.Operators.InvalidOp = function (opName) {
    throw opName;
};
Pit.FSharp.Core.Operators.CreateSequence = function (x) {
    return x;
};
Pit.FSharp.Core.Operators.ToDouble = function (x) {
    return parseFloat(x);
};
Pit.FSharp.Core.Operators.ToInt = function (x) {
    return parseInt(x);
};
Pit.FSharp.Core.Operators.ToChar = function (x) {
    return (function (thisObject) {
        if (typeof x == "number") {
            var i = x;
            return String.fromCharCode(i);
        } else {
            return x.ToString();
        }
    })(this);
};
Pit.FSharp.Core.Operators.ToString = function (x) {
    return x;
};
Pit.FSharp.Core.Operators.Max = function (x) {
    return function (y) {
        return (function (thisObject) {
            if (x < y) {
                return y;
            } else {
                return x;
            }
        })(this);
    };
};
Pit.FSharp.Core.Operators.Min = function (x) {
    return function (y) {
        return (function (thisObject) {
            if (x < y) {
                return x;
            } else {
                return y;
            }
        })(this);
    };
};
Pit.FSharp.Core.Operators.Abs = function (f) {
    return Math.abs(f);
};
Pit.FSharp.Core.Operators.Acos = function (f) {
    return Math.acos(f);
};
Pit.FSharp.Core.Operators.Asin = function (f) {
    return Math.asin(f);
};
Pit.FSharp.Core.Operators.Atan = function (f) {
    return Math.atan(f);
};
Pit.FSharp.Core.Operators.Atan2 = function (f) {
    return Math.atan2(f);
};
Pit.FSharp.Core.Operators.Ceiling = function (f) {
    return Math.ceil(f);
};
Pit.FSharp.Core.Operators.Exp = function (f) {
    return Math.exp(f);
};
Pit.FSharp.Core.Operators.Floor = function (f) {
    return Math.floor(f);
};
Pit.FSharp.Core.Operators.Round = function (f) {
    return Math.round(f);
};
Pit.FSharp.Core.Operators.Sin = function (f) {
    return function (x) {
        return Math.sin(x);
    };
};
Pit.FSharp.Core.Operators.Log = function (f) {
    return Math.log(f);
};
Pit.FSharp.Core.Operators.Sqrt = function (f) {
    return Math.sqrt(f);
};
Pit.FSharp.Core.Operators.Cos = function (f) {
    return Math.cos(f);
};
Pit.FSharp.Core.Operators.Tan = function (f) {
    return Math.tan(f);
};
Pit.FSharp.Core.Operators.Pow = function (x) {
    return function (y) {
        return Math.pow(x, y);
    };
};
Pit.FSharp.Core.Operators.op_Range = function (s) {
    return function (e) {
        return new Pit.FSharp.Core.Operators.mkSeq1(function () {
            return new Pit.FSharp.Core.Operators.RangeEnumerator(s, 1, e);
        });
    };
};
Pit.FSharp.Core.Operators.op_RangeStep = function (s) {
    return function (sp) {
        return function (e) {
            return new Pit.FSharp.Core.Operators.mkSeq1(function () {
                return new Pit.FSharp.Core.Operators.RangeEnumerator(s, sp, e);
            });
        };
    };
};
Pit.FSharp.Core.Operators.op_Exponentiation = function (x) {
    return function (y) {
        return Math.pow(x, y);
    };
};