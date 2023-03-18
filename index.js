/**********************************************
                PRELOADER
 **********************************************/
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('invisible')
    }, 3000)
})

/**********************************************
                NAV MENU
 **********************************************/

const menu = document.querySelector('.fa'),
      linkList = document.querySelector('.link-list')

const onToggleMenu = () => {
    linkList.classList.toggle('close')
    menu.classList.toggle('fa-bars')  
    menu.classList.toggle('fa-times')    
}

/**********************************************
                CAROUSEL SLIDE
 **********************************************/



/**********************************************
                INITIALIZE WOW JS
 **********************************************/

  new WOW().init()

