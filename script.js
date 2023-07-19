const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.getElementById('error');
const successMessage = document.getElementById('success')

submitButton.addEventListener('click', () => {
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorMessage.classList.add('active')
        errorIcon.classList.add('active')
        successMessage.classList.remove('active')
    } else {
        validationSuccess()
    }
})

function validationSuccess() {
    successMessage.classList.add('active')
    errorMessage.classList.remove('active')
    errorIcon.classList.remove('active')
}