const idHeader = document.querySelector('header');
const titleHero = document.querySelector('.title-hero')
const subtitleHero = document.querySelector('.subtitle-hero')
const imgClass = document.querySelector('.img-fluid')
const artikelUpdate = document.getElementById('artikel-update')
const artikelLatest = document.getElementById('artikel-latest')


// navbar sticky
window.addEventListener('scroll', () => {
    
    // navbar sticky
    if(window.scrollY > 1) {
        idHeader.classList.add("scrol-actived");
    }
    else {
        idHeader.classList.remove("scrol-actived");
    }

    // parallax hero section
    titleHero.style.marginTop = window.scrollY * 2.5 + 'px'

})

window.addEventListener('resize', () => {
    if(window.innerWidth < 768) {
        artikelUpdate.querySelector('.container').classList.replace('container', 'container-fluid')
        artikelLatest.querySelector('.container').classList.replace('container', 'container-fluid')
    }
    else {
        artikelUpdate.querySelector('.container-fluid').classList.replace('container-fluid', 'container')
        artikelLatest.querySelector('.container-fluid').classList.replace('container-fluid', 'container')
    }
    
})






