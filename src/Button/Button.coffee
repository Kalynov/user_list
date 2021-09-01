export class Button
    constructor: (settings) ->
        element = document.createElement("input")
        element.setAttribute 'type', 'button'
        element.setAttribute 'value', settings.content
        element.className = "button"
        element.classList.add settings.class
        @parent = if settings.parent then settings.parent
        else document.body
        @element = element
    
    render: (parent = @parent) ->
        parent.appendChild(@element)
    
    addEvent: (type, handler) ->
        @element.addEventListener(type, handler)

    hide: () ->
        @element.classList.add "hiden"

    show: () ->
        @element.classList.remove "hiden"
