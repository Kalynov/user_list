import { Text } from '../Text/Text.coffee'

export class Input
    constructor: (settings) ->
        @wrapper = document.createElement('div')
        @wrapper.className = "inputWrapper"
        @error = new Text ({ content: settings.error })
        @error.render(@wrapper)
        @error.hide()
        input = document.createElement('input')
        input.setAttribute('type', settings.type)
        input.setAttribute('minlength', settings.minlength || 0)
        @pattern = settings.pattern
        @state = {
            value: if settings.value then settings.value else ""
            isValid: true
        }
        input.value = @state.value
        @wrapper.appendChild(input)
        @error.render(@wrapper)
        @element = input

    update: () ->
        @error.hide()
        @element.classList.remove "error"
        @element.value = @state.value

    render: (parent) ->
        @element.onchange = (e) =>
            @state.value = e.target.value
            @update()
        parent.appendChild(@wrapper)

    getValue: () ->
        @state.value
        

    hide: () ->
        @element.classList.add "hiden"

    show: () ->
        @element.classList.remove "hiden"

    isError: () ->
        @error.show()
        @element.classList.add "error"

