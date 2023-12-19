const numCols = document.getElementById('num-cols')

const min = numCols.getAttribute('min')
const max = numCols.getAttribute('max')

globalThis.state.set(numCols.id, parseInt(numCols.value))

numCols.addEventListener('change', () => {
    if (parseInt(numCols.value) < min) numCols.value = min
    if (parseInt(numCols.value) > max) numCols.value = max
    globalThis.state.set(numCols.id, parseInt(numCols.value))
})