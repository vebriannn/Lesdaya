const idHeader = document.querySelector('header');
const btnDownload = document.querySelector('.btn-dd')
const btnView = document.querySelector('.btn-view')

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

btnView.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1xhvw0moef_95ndcI4Mj3z4qnzIBIu5xY/view','_blank');
})

btnDownload.addEventListener('click', () => {
    window.open('https://drive.google.com/u/0/uc?id=1xhvw0moef_95ndcI4Mj3z4qnzIBIu5xY&export=download', '_blank')
})