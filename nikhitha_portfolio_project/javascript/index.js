let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let open = document.querySelector('.open-btn')
let close = document.querySelector('.close-btn')
let links = document.querySelector('.links')

open.addEventListener('click', function () {
    links.classList.add('open-nav')
})

close.addEventListener('click', function () {
    links.style.display = "none"
})