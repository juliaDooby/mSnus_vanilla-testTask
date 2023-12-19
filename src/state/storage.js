import notifier from './notifier'

const state = {}

function set(key, value) {
    state[key] = value
    notifier.notify()
}

function toggle(key) {
    if (!typeof (state[key]) === 'boolean') return
    state[key] = !state[key]
    notifier.notify()
}

function get(key) {
    return state[key]
}

function all() {
    return state 
}

export default {
    notifier,
    
    set,
    toggle,
    get,
    all
}