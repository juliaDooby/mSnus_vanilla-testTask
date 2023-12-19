import svg from './radio.html'

const groupName = 'darkness'

const darknessGroup = document.getElementsByClassName(groupName)

function select(option, group = darknessGroup) {
    for (let item of group) {
        item.classList.add('radio-empty')
    }
    option.classList.remove('radio-empty')

    globalThis.state.set(groupName, option.id)
}

select(darknessGroup[0])

for (let option of darknessGroup) {
    option.innerHTML = svg + option.innerHTML
    option.classList.add('radio')

    option.addEventListener('click', () => {
        select(option)
    })
}