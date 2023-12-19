const root = document.getElementById('figures')

const hidden = 'figure-hidden'

const innerWidth = window.innerWidth

let rootPaddingLeft = 50
if (innerWidth < window.innerHeight) rootPaddingLeft = 20

root.style.paddingLeft = rootPaddingLeft + 'px'

const width = window.innerWidth - 2 * rootPaddingLeft

let sizeTotal
let margin
let size

function create(params) {
    const figure = document.createElement('div')
    root.appendChild(figure)
    
    figure.classList.add('figure')
    figure.classList.add(`figure-${params.form}`)
    
    const darkness = ['all']
    if (params.dark) darkness.unshift('dark')
    else darkness.unshift('light')
    figure.classList.add(
        `figure-${darkness[0]}-${params.color}`
    )

    let numCols
    resize()

    function update() {
        resize()
        if (isHidden()) return figure.classList.add(hidden)
        figure.classList.remove(hidden)
    }

    function isHidden() {
        if (!globalThis.state.get(params.form)) return true
        if (!globalThis.state.get(params.color)) return true
        if (!darkness.includes(
            globalThis.state.get('darkness')
        )) return true
        return false
    }

    function resize() {
        if (numCols === globalThis.state.get('num-cols')) return

        numCols = globalThis.state.get('num-cols')
        if (figure === root.firstChild) setDimensions()
        figure.style.margin = margin + 'px'
        figure.style.width = size + 'px'
        figure.style.height = size + 'px'
    }

    function setDimensions() {
        sizeTotal = Math.floor(width / numCols)
        margin = Math.floor(sizeTotal / 20)
        size = sizeTotal - 2 * margin
    }

    return { update }
}

export default {
    create
}