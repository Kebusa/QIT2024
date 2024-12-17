const errorMessage = document.getElementById('errorMessage')
const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nameValue = document.getElementById('name').value;
    const surNameValue = document.getElementById("surName").value;
    const timeValue = document.getElementById('time').value;

    if(nameValue === "") {
        errorMessage.style.transform = 'translateY(-40vh)'
        errorMessage.textContent = 'Все поля должны быть заполнены'
    }else if(surNameValue === ""){
        errorMessage.style.transform = 'translateY(-40vh)'
        errorMessage.textContent = 'Все поля должны быть заполнены'
    }

})