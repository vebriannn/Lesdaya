const idHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 1) {
        idHeader.classList.add("scrol-actived");
    }
    else {
        idHeader.classList.remove("scrol-actived");
    }
})

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:300,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
            }
        }
    })
});