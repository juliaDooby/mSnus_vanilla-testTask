const observers = []

function register(observer) {
    observers.push(observer)
}

function notify() {
    for (let observer of observers) {
        observer.update()
    }
}

export default {
    register,
    notify
}