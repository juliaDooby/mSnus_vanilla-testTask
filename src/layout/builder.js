require('./style.scss')

const menu = document.querySelector('menu')
const main = document.querySelector('main')
const burger = document.getElementById('burger')

import svgBurger from './burger.html'

burger.innerHTML = svgBurger

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden')
})

main.addEventListener('click', () => {
    menu.classList.add('menu-hidden')
})