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

if(window.innerWidth < 992) {
    idHeader.classList.add("actived-mobile");
}
else {
    idHeader.classList.remove("actived-mobile");
}


// navbar sticky
window.addEventListener('scroll', () => {
    

    // navbar sticky
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
                margin:0,
                nav:true
            },
            576:{
                items:3,
                margin:200,
                nav:true
            },
            768:{
                items:3,
                nav:false
            },
            992:{
                items:4,
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