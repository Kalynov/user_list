import "./styles/main.css"
import { Button } from './Button/Button.coffee'
import { Table } from './Table/Table.coffee'
import { Form } from './Form/Form.coffee'


#init
info = [
    {
        name: "Alexey"
        number: "+89993247575"
        id: 0
    },
    {
        name: "Elena"
        number: "+79993247575"
        id: 1
    },
    {
        name: "Ivan"
        number: "+89993247575"
        id: 2
    },
    {
        name: "Maksim"
        number: "+79993247575"
        id: 3
    }
]

# функция для получения данных
# getData = () ->
#     response = await fetch('https://hots.ru/user_list')
#     return response.json()
# info = await getData()


#render
main = document.createElement('div')
main.className = "main"
document.body.appendChild(main)

table = new Table({}, info)
table.render(main)

addHandler = (data) ->
    # request
    # response = await fetch('https://hots.ru/user_list', {
    #     method: 'POST'
    #     headers: {
    #         'Content-Type': 'application/json'
    #     }
    #     body: JSON.stringify(data)
    # })
    info.push(data)
    table.update(info)

form = new Form(addHandler)
form.render(main)

