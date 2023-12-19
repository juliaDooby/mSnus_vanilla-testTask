import svg from './checkbox.html'

const checkboxes = document.getElementsByClassName('checkbox')

for (let checkbox of checkboxes) {
    checkbox.innerHTML = svg + checkbox.innerHTML
    globalThis.state.set(checkbox.id, true)

    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checkbox-empty')
        globalThis.state.toggle(checkbox.id)
    })
}