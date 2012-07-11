open PacMan

let input = { new IInput with
        member input.IsUp = true
        member input.IsDown = true
        member input.IsLeft = true
        member input.IsRight = true
    }

let content = { new IContent with
        member content.Move(x,y) = ()
        member content.SetOpacity(v) = ()
        member content.Control = null
    }

let bitmap = { new IBitmap with
        member bitmap.CreateContent() = content
    }

let contents = { new IContents with
        member contents.Contains(value) = false 
        member contents.Add(value) = ()
        member contents.Remove(value) = ()
    }

let layer = { new ILayer with
        member layer.Contents = contents
        member content.Move(x,y) = ()
        member content.SetOpacity(v) = ()
        member content.Control = null
    }

let scene = { new IScene with
        member scene.AddLayer() = layer
        member scene.CreateBitmap(paint,lines) = bitmap
        member scene.LoadBitmap(path) = bitmap
        member scene.Contents = contents
    }

let p  = PacMan.Game(scene, input)
do  for i = 1 to 1000 do p.Update()
