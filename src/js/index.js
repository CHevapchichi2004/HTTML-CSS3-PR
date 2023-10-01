// document.addEventListener('DOMContentLoaded', () => {

//     function slider() {
//         const slides = document.querySelectorAll('.slider__item')
//         const arrows = document.querySelectorAll('.slider__arrow')
//         let iter = 0;
        
//         arrows.forEach((item) => {
//             item.addEventListener('click', (e) => {
//                 if (e.target.classList.contains('right')) {
//                     iter += 1
//                 } else {
//                     iter -= 1
//                 }
//                 changeSlide()
//             })
//         })

//         const changeSlide = () => {
//             if (iter >= slides.length) {
//                 iter = 0
//             } else if (iter < 0) {
//                 iter = slides.length - 1
//                 console.log(iter)
//             }

//             slides.forEach((item, i) => {
//                 item.classList.remove('slider__item_active')
//                 if (iter == i) {
//                     item.classList.add('slider__item_active')
//                 } 
//             })
//         }


//     }
//     slider()

// })
$(document).ready(function(){
    $('.slider__wrapper').slick({
        infinite: true,
        prevArrow: '<button class=prev><img src="./images/chevron left solid.png" alt="left arrow" class="slider__arrow"></button>',
        nextArrow: '<button class=next><img src="./images/chevron right solid.png" alt="left arrow" class="slider__arrow"></button>',
        slidesToShow: 1,
        dots: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
    });



    const linksToDope = document.querySelectorAll('.catalogue-item__link')
    const linksToContent = document.querySelectorAll('.catalogue-item__back')
    linksToDope.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentElement.classList.toggle('catalogue-item__content_active')
            e.target.parentElement.nextElementSibling.classList.toggle('catalogue-item__dope_active')
        })
    })

    linksToContent.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentElement.classList.toggle('catalogue-item__dope_active')
            e.target.parentElement.previousElementSibling.classList.toggle('catalogue-item__content_active')
        })
    })

    const filters = document.querySelectorAll('.catalogue__filter')
    const contents = document.querySelectorAll('.catalogue__content')
    let ident = 'f';
    function toggleActivityClass(elements, activeClass) {
        elements.forEach(item => {
            if (ident == item.id) {
                item.classList.add(activeClass)
            } else {
                item.classList.remove(activeClass) 
            }
        })
    }

    filters.forEach((item) => {
        item.addEventListener('click', (e) => {
            if ((ident == e.target.parentElement.id) || (ident == e.target.id)) {
                return;
            } else {
                ident = (e.target.parentElement.id || e.target.id)
            }
            toggleActivityClass(filters, 'catalogue__filter_active')
            toggleActivityClass(contents, 'catalogue__content_active')

        })
    })

    // Modal
    const layer = document.querySelector('.layer')
    document.querySelectorAll("[data-modal='consult']").forEach(item => {
    item.addEventListener('click', () => {
        layer.style.display = 'block'
        document.querySelector(`#consult`).style.display = 'block'
        })
    })

    document.querySelectorAll("[data-modal='order']").forEach((item, i) => {
        item.addEventListener('click', e => {
            layer.style.display = 'block'
            document.querySelector(`#order .modal__descr`).textContent = document.querySelectorAll('.catalogue-item__subtitle')[i].textContent
            document.querySelector(`#order`).style.display = 'block'
        })
    })


    document.querySelectorAll('.modal__close').forEach(item => {
        item.addEventListener('click', () => {
            layer.style.display = 'none'
            document.querySelector(`#consult`).style.display = 'none'
            document.querySelector(`#order`).style.display = 'none'
            document.querySelector(`#thanks`).style.display = 'none'
        })
    })


    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 1600) {
            document.querySelector("a[href^='#up']").style.display = 'block'
        } else {
            document.querySelector("a[href^='#up']").style.display = 'none'
        }
    })
    document.querySelector("a[href^='#up']").addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollBy({
            top: document.getElementById(document.querySelector("a[href^='#up']").getAttribute("href").substring(1)).getBoundingClientRect().top,
            behavior: 'smooth'
        })
        
    })
    new WOW().init();
})
    // const forms = document.querySelector('form')
    // forms.addEventListener('submit', async (e) => {
    //     e.preventDefault()
    //     const data = JSON.stringify(Object.fromEntries(new FormData(forms)))

    //     const res = await fetch('http://localhost:25000/client_actions', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: data
    //     })
    //     console.log(res)
    // })
    
// 
        

    
//     filters.addEventListener('click', (e) => {
//         let ident;
//         if (e.target.nodeName =='SPAN') {
//             e.target.parentElement.classList.toggle('catalogue__filter_active')
//             ident = e.target.parentElement.id
//         } else if(e.target.classList.contains('catalogue__filter')) {
//             e.target.classList.toggle('catalogue__filter_active')
//             ident = e.target.id
//         }

//         contents.forEach(item => {
//             if (item.id == ident) {
//                 item.classList.toggle('catalogue__content_active')
//             } else {
//                 item.classList.remove('catalogue__content_active')
//             }
//         })
//     })    
