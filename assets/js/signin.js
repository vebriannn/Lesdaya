const showIcon = document.getElementById('show')
const btnShow = document.getElementById('btnShow')
const pwne = document.getElementById('pwne')


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