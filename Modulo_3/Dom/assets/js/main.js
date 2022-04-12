const btn = document.getElementById('mode-selector')
const title = document.getElementById('page-title')
const footer = document.querySelector('.footer')
const body = document.querySelector('.body')

btn.addEventListener('click', () => {
    if(!body.classList.contains('dark-mode')){
        body.classList.add('dark-mode')
        title.classList.add('dark-mode')
        footer.classList.add('dark-mode')
        btn.classList.add('dark-mode')
    }else{
        body.classList.remove('dark-mode')
        title.classList.remove('dark-mode')
        footer.classList.remove('dark-mode')
        btn.classList.remove('dark-mode')
    }
})