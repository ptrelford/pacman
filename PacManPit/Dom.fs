namespace PacMan

module Dom =

    open Pit
    open Pit.Dom

    type DomAttribute = { Name:string; Value:obj }
    let [<Js>] (@=) name (value:'a) =
        { Name=name; Value=box value }
    let [<Js>] tag name (attributes:DomAttribute list) =
        let el = document.CreateElement(name)
        for a in attributes do el.SetAttribute(a.Name,a.Value.ToString())
        el









