const idHeader = document.querySelector('header');


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
