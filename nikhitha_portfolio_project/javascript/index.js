let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let open = document.querySelector('.open-btn')
let close = document.querySelector('.close-btn')
let links = document.querySelector('.links')
let link = document.querySelector('.link')


open.addEventListener('click', function () {
    links.style.display = "flex"
})

close.addEventListener('click', function () {
    links.style.display = "none"
})

link.addEventListener('click', function () {
    links.style.display = "none"
})
