const showIcon = document.getElementById('show')
const btnShow = document.querySelectorAll('.btnShow')
const pwne = document.getElementById('pwne')


btnShow.forEach(element => {
    element.addEventListener('click', () => {
        if(element.querySelector('.bi').classList.contains('bi-eye-slash-fill')) {
            element.querySelector('.bi').classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
            
            var parent = element.parentElement
            parent.parentElement.querySelector('.form-control').type = "text"
        }
        else {
            element.querySelector('.bi').classList.replace('bi-eye-fill', 'bi-eye-slash-fill')

            var parent = element.parentElement
            parent.parentElement.querySelector('.form-control').type = "password"
            
        }
    })
})
