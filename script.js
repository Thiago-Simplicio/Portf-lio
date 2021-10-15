const menu = document.querySelectorAll('.menu li a[href^="#"]')

menu.forEach(item => {
    item.addEventListener('click',scroll)
})

function scroll(event){
    const element = event.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop
    
    window.scroll(0, section)
    return event.preventDefault()
}

const menumobile = () => {
    const openmenu = document.querySelector('.menu')
    if(openmenu.className === 'menu'){
        openmenu.className += " menu-open"
    }else{
        openmenu.className = 'menu'
    }
}