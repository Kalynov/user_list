import "./styles/main.css"
import { Button } from './Button/Button.coffee'

#presets

#render
main = document.createElement('div')
main.className = "main"
document.body.appendChild(main)
buttonSave = new Button {
    class: 'button_save'
    parent: main
    content: "Save"
}
buttonSave.render()

