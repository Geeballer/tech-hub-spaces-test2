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
                CAROUSEL SLIDE
 **********************************************/
const slider = document.querySelector('.slider'),
      slideList = document.querySelector('slide-wrapper'),
      slideItems = document.querySelectorAll('.slide-list'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      sliderWidth = slider.offsetWidth,
      count = 1;

const responsiveSlider = () => {
    
    window.addEventListener('resize', () => {
        sliderWidth = slider.offsetWidth
    })

    const prevSlide = () => {
        if (count > 1){
            count = count - 2
            slideList.style.left = '_' + count * sliderWidth + 'px'
            count++
        }
        else if (count == 1){
            count = slideItems - 1
            slideList.style.left = '_' + count * sliderWidth + 'px'
            count++
        }
    }

    const nextSlide = () => {
        if (count < slideItems){
            slideList.style.left = '_' + count * sliderWidth + 'px'
            count++
        }
        else if (count == slideItems){
            slideList.style.left = '0px'
            count = 1
        }
    }

    next.addEventListener('click', () => {
        nextSlide()
    })

    prev.addEventListener('click', () => {
        prevSlide()
    })

    setInterval(() => {
        nextSlide()
    }, 5000)
}

window.onload = () => {
    responsiveSlider()
}

  /********************** Initialize WOW ********************/

  new WOW().init();

  const menu = document.querySelector('.menu'),
        linkList = document.querySelector('.link-list')

  
menu.addEventListener('click', () => {
    linkList.classList.toggle('close')
})