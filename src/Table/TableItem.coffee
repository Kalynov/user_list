import { Button } from "../Button/Button.coffee"
import { Input } from  "../Input/Input.coffee"
import { Text } from  "../Text/Text.coffee"
import { validate } from "../helpers.coffee"

export class TableItem
    constructor: (settings, item) ->
        row = document.createElement("tr")
        @id = item.id
        @state = {
            editing: false
            name: item.name
            number: item.number
            isValid: false
        }
        @validation
        # number
        columnTelephone = document.createElement("th")
        @textTelephone = new Text {
            content: @state.number
        }
        @telephoneInput = new Input {
            type: "tel"
            value: @state.number
            error: 'the number can consist of digits (0-9) and a dash "-"'
        }
        @textTelephone.render(columnTelephone)
        @telephoneInput.hide()
        @telephoneInput.render(columnTelephone)
        # name
        columnName = document.createElement("th")
        @textName = new Text {
            content: @state.name
        }
        @textName.render(columnName)
        @nameInput = new Input {
            type: "text"
            value: @state.name
            minlength: 1
            error: "Name must not be empty"
        }
        @nameInput.hide()
        @nameInput.render(columnName)
        # actions
        columnActions = document.createElement("th")
        @editButton = new Button {
            class: 'button_edit'
            parent: columnActions
            content: "Edit"
        }
        @editButton.render()

        @saveButton = new Button {
            class: 'button_save'
            parent: columnActions
            content: "Save"
        }
        @saveButton.render()
        @saveButton.hide()

        @deleteButton = new Button {
            class: 'button_delete'
            parent: columnActions
            content: "Delete"
        }
        @deleteButton.render()

        row.appendChild(columnName)
        row.appendChild(columnTelephone)
        row.appendChild(columnActions)
        @element = row

    editHandler = () ->
        @saveButton.show()
        @editButton.hide()
        @textTelephone.hide()
        @telephoneInput.show()
        @textName.hide()
        @nameInput.show()
        @state.editing = true
    
    saveHandler = () ->
        @validateForm()
        if @state.isValid
            newData = {
                name: @nameInput.getValue()
                number: @telephoneInput.getValue()
                id: @id
            }
            @update(newData)
            @editButton.show()
            @saveButton.hide()
            @textTelephone.show()
            @telephoneInput.hide()
            @textName.show()
            @nameInput.hide()
            @state.editing = false
            
            # response = await response = await fetch('https://hots.ru/user_list', {
            #     method: 'PUT'
            #     headers: {
            #         'Content-Type': 'application/json'
            #     }
            #     body: JSON.stringify(newData)
            # })
        
            

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

    
    deleteHandler = () ->
        @element.remove()

    render: (parent) ->
        parent.appendChild(@element)
        @editButton.addEvent("click", () => editHandler.call(@))
        @saveButton.addEvent("click", () => saveHandler.call(@))
        @deleteButton.addEvent("click", () => deleteHandler.call(@))
    
    append: (element) ->
        return @element

    update: (newData) ->
        @state.name = newData.name
        @state.number = newData.number
        @textName.update(@state.name)
        @textTelephone.update(@state.number)
