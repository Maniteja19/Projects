let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    document.body.style.transition = "all 0.3s 0.3s ease-in"
})