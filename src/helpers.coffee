
# readonly data: {
#     name: string
#     number: string
# }
# return {
#     isValid: boolean,
#     errors: ["name", "number"]
# }

export validate = (data) ->
    result = {
        isValid: true
        errors: []
    }
    regTelephone =  /(^\d[\d\(\)\ -]{4,14}\d$)|(^\+\d[\d\(\)\ -]{4,14}\d$)/
    telephonIsValid = regTelephone.test(data.number)
    nameIsValid = data.name.length != 0
    if !telephonIsValid
        result.isValid = false
        result.errors.push("number")
    if !nameIsValid
        result.isValid = false
        result.errors.push("name")

    return result


