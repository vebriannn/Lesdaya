const showIcon = document.getElementById('show')
const btnShow = document.getElementById('btnShow')
const pwne = document.getElementById('pwne')
const columnImages = document.querySelector('.images')  
const widthForm = document.querySelector('.form-control-auth')



btnShow.addEventListener('click', () => {
    if(showIcon.classList.contains('bi-eye-slash-fill')) {
        showIcon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
        pwne.type = "text"
    }
    else {
        showIcon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
        pwne.type = "password"
    }
})


if(window.innerWidth < 576) {
    widthForm.style.width = "300px"
}
else {
    widthForm.style.width = "400px"
}