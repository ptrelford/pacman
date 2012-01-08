registerNamespace("PacMan.App");
registerNamespace("PacMan.Maze");
registerNamespace("PacMan.Dom");
DOM.domReady(function () {
    var x = 105;
    var y = 181;
    var div = document.getElementById("maindiv");
    var ppos = document.getElementById("ppos");
    var pimg = Pit.FSharp.Core.Operators.op_PipeRight(document.getElementById("pimg"))(function (arg00) {
        return arg00;
    });
    PacMan.Maze.drawMaze(div);
    return Pit.FSharp.Core.Operators.op_PipeRight(Pit.FSharp.Core.Operators.op_PipeRight(div)(function (el) {
        return Pit.Dom.Event.keydown(el);
    }))(function (sourceEvent) {
        return Pit.FSharp.Control.EventModule.Add(function (e) {
            var s = String.fromCharCode(e.keyCode);
            var c = s.get_Chars(0);
            var turn = function (d) {
                return PacMan.Dom.op_DynamicAssignment(pimg)("src")((("Images/p" + d) + ".png"));
            };
            (function (thisObject) {
                if (c == "Z") {
                    turn("l");
                    x = (x - 1);
                    return ppos.style.left = (x.ToString() + "px");
                } else {
                    return null;
                }
            })(this);
            (function (thisObject) {
                if (c == "X") {
                    turn("r");
                    x = (x + 1);
                    return ppos.style.left = (x.ToString() + "px");
                } else {
                    return null;
                }
            })(this);
            (function (thisObject) {
                if (c == "Q") {
                    turn("u");
                    y = (y - 1);
                    return ppos.style.top = (y.ToString() + "px");
                } else {
                    return null;
                }
            })(this);
            return (function (thisObject) {
                if (c == "A") {
                    turn("d");
                    y = (y + 1);
                    return ppos.style.top = (y.ToString() + "px");
                } else {
                    return null;
                }
            })(this);
        })(sourceEvent);
    });
});
PacMan.Maze.get_maze = "/------------7/------------7,|............|!............|,|./__7./___7.|!./___7./__7.|,|o|  !.|   !.|!.|   !.|  !o|,|.L--J.L---J.LJ.L---J.L--J.|,|..........................|,|./__7./7./______7./7./__7.|,|.L--J.|!.L--7/--J.|!.L--J.|,|......|!....|!....|!......|,L____7.|L__7 |! /__J!./____J,#####!.|/--J LJ L--7!.|#####,#####!.|!          |!.|#####,#####!.|! /__==__7 |!.|#####,-----J.LJ |      ! LJ.L-----,##### .   |      !   . #####,_____7./7 |      ! /7./_____,#####!.|! L______J |!.|#####,#####!.|!          |!.|#####,#####!.|! /______7 |!.|#####,/----J.LJ L--7/--J LJ.L----7,|............|!............|,|./__7./___7.|!./___7./__7.|,|.L-7!.L---J.LJ.L---J.|/-J.|,|o..|!.......<>.......|!..o|,L_7.|!./7./______7./7.|!./_J,/-J.LJ.|!.L--7/--J.|!.LJ.L-7,|......|!....|!....|!......|,|./____JL__7.|!./__JL____7.|,|.L--------J.LJ.L--------J.|,|..........................|,L==========================J";
PacMan.Maze.toTile = function (c) {
    return (function (thisObject) {
        if (c == "!") {
            return "right";
        } else {
            return (function (thisObject) {
                if (c == "-") {
                    return "bottom";
                } else {
                    return (function (thisObject) {
                        if (c == ".") {
                            return "dot";
                        } else {
                            return (function (thisObject) {
                                if (c == "/") {
                                    return "tl";
                                } else {
                                    return (function (thisObject) {
                                        if (c == "7") {
                                            return "tr";
                                        } else {
                                            return (function (thisObject) {
                                                if (c == "=") {
                                                    return "top";
                                                } else {
                                                    return (function (thisObject) {
                                                        if (c == "J") {
                                                            return "br";
                                                        } else {
                                                            return (function (thisObject) {
                                                                if (c == "L") {
                                                                    return "bl";
                                                                } else {
                                                                    return (function (thisObject) {
                                                                        if (c == "_") {
                                                                            return "top";
                                                                        } else {
                                                                            return (function (thisObject) {
                                                                                if (c == "o") {
                                                                                    return "pill";
                                                                                } else {
                                                                                    return (function (thisObject) {
                                                                                        if (c == "|") {
                                                                                            return "left";
                                                                                        } else {
                                                                                            return "blank";
                                                                                        }
                                                                                    })(thisObject);
                                                                                }
                                                                            })(thisObject);
                                                                        }
                                                                    })(thisObject);
                                                                }
                                                            })(thisObject);
                                                        }
                                                    })(thisObject);
                                                }
                                            })(thisObject);
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
PacMan.Maze.drawMaze = function (div) {
    var lines = PacMan.Maze.get_maze;
    var lines1 = lines.Split([","]);
    for (var y = 0; y <= (lines1.get_Length() - 1); y++) {
        (function (thisObject, y) {
            var line = lines1[y];
            for (var x = 0; x <= (line.get_Length() - 1); x++) {
                (function (thisObject, x) {
                    var c = line.get_Chars(x);
                    var tile = PacMan.Maze.toTile(c);
                    var style = (((("position:absolute;left:" + (x * 8).ToString()) + "px;top:") + (y * 8).ToString()) + "px");
                    var path = (("Images/" + tile) + ".png");
                    var img = Pit.FSharp.Core.Operators.op_PipeRight(PacMan.Dom.tag("img")(new Pit.FSharp.Collections.FSharpList1.Cons(PacMan.Dom.op_AtEquals("src")(path), new Pit.FSharp.Collections.FSharpList1.Cons(PacMan.Dom.op_AtEquals("style")(style), new Pit.FSharp.Collections.FSharpList1.Empty()))))(function (arg00) {
                        return arg00;
                    });
                    div.appendChild(img);
                })(thisObject, x);
            };
        })(this, y);
    };
};
registerNamespace("PacMan");
PacMan.Dom.DomAttribute = (function () {
    function DomAttribute(name, value) {
        this.Name = name;
        this.Value = value;
    }
    DomAttribute.prototype.get_Name = function () {
        return this.Name;
    };
    DomAttribute.prototype.get_Value = function () {
        return this.Value;
    };
    return DomAttribute;
})();
PacMan.Dom.op_AtEquals = function (name) {
    return function (value) {
        return new PacMan.Dom.DomAttribute(name, value);
    };
};
PacMan.Dom.tag = function (name) {
    return function (attributes) {
        var el = document.createElement(name);
        var enumerator = attributes.IEnumerable1_GetEnumerator();
        (function (thisObject) {
            try {
                while (enumerator.IEnumerator_MoveNext()) {
                    var a = enumerator.IEnumerator1_get_Current();
                    el.setAttribute(a.get_Name(), a.get_Value().ToString());
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
        return el;
    };
};
PacMan.Dom.op_Dynamic = function (el) {
    return function (name) {
        return el.getAttribute(name);
    };
};
PacMan.Dom.op_DynamicAssignment = function (el) {
    return function (name) {
        return function (value) {
            return el.setAttribute(name, value);
        };
    };
};