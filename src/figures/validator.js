const rules = {
    form: ['circle', 'square'],
    color: ['red', 'green', 'blue', 'yellow'],
    dark: [true, false]
}

function validate(item) {
    for (let rule in rules) {
        if (!item.hasOwnProperty(rule)) return false
        if (!rules[rule].includes(item[rule])) return false
    }
    return true
}

export default {
    validate
}