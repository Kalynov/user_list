import { TableItem } from './TableItem.coffee'

export class Table
    constructor: (settings, items) ->
        table = document.createElement("table")
        table.setAttribute("border", "1")
        headRow = document.createElement("tr")
        headColumnTelephone = document.createElement("th")
        headColumnTelephone.append("Telephon number")
        headColumnName = document.createElement("th")
        headColumnName.append("Name")
        headColumnActions = document.createElement("th")
        headColumnActions.append("Actions")
        headRow.appendChild(headColumnName)
        headRow.appendChild(headColumnTelephone)
        headRow.appendChild(headColumnActions)
        table.appendChild(headRow)
        @items = []
        for item in items
            tableItem = new TableItem({}, item)
            tableItem.render(table)
            @items.push(tableItem)
        @parent = if settings?.parent then settings.parent
        else document.body
        @element = table

    render: (parent = @parent) ->
        parent.appendChild(@element)
    
    update: (items) ->
        for item in @items
            item.element.remove()
        @items = []
        for item in items
            tableItem = new TableItem({}, item)
            tableItem.render(@element)
            @items.push(tableItem)
