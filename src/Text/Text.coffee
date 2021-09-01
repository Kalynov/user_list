export class Text
    constructor: (settings) ->
        text = document.createElement('span')
        text.textContent = settings.content
        @element = text

    render: (parent) ->
        parent.appendChild(@element)

    update: (text) ->
        @element.textContent = text

    hide: () ->
        @element.classList.add "hiden"

    show: () ->
        @element.classList.remove "hiden"
