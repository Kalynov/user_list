import { Button } from "../Button/Button.coffee"
import { Input } from  "../Input/Input.coffee"
import { validate } from "../helpers.coffee"

export class Form
    constructor: (callBack) ->
        form = document.createElement("div")
        form.className = "form"
        @callBack = callBack
        @state = {
            name: ""
            number: ""
            isValid: false
        }
        @validation

        # name
        nameLabel = document.createElement("label")
        nameLabel.textContent = "Name"
        form.append(nameLabel)
        @nameInput = new Input {
            type: "text"
            value: @state.name
            minlength: 1
            error: "Name must not be empty"
        }
        @nameInput.render(form)

        # number
        telephoneLabel = document.createElement("label")
        telephoneLabel.textContent = "Number"
        @telephoneInput = new Input {
            type: "tel"
            value: @state.number
            error: 'the number can consist of digits (0-9) and a dash "-"'
        }

        form.append(telephoneLabel)
        @telephoneInput.render(form)
        
        @saveButton = new Button {
            class: 'button_save'
            parent: form
            content: "Save"
        }
        @saveButton.render()
        @element = form

    validateForm: () ->
        @validation = validate({
            name: @nameInput.getValue()
            number: @telephoneInput.getValue()
        })
        @state.isValid = @validation.isValid
        @state.errors = @validation.errors
        if !@state.isValid
            for err in @state.errors
                if err == "name"
                    @nameInput.isError()
                if err == "number"
                    @telephoneInput.isError()

    
    saveHandler = () ->
        @validateForm()
        if @state.isValid
            @update()

    

    render: (parent) ->
        parent.appendChild(@element)
        @saveButton.addEvent("click", () => saveHandler.call(@))
    

    update: () ->
        if @callBack then @callBack {
            name: @nameInput.getValue()
            number: @telephoneInput.getValue()
        }
        @nameInput.element.value = ""
        @telephoneInput.element.value = ""
            