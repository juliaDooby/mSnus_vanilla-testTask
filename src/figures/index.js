require('./style.scss')

import factory from './factory'
import validator from './validator'

fetch('data/test.json')
    .then(result => result.json())
    .then(result => render(result))

function render(data) {
    data.forEach(item => {
        if (!validator.validate(item)) return
        globalThis.state.notifier.register(

            factory.create(item)
            )
    })
}