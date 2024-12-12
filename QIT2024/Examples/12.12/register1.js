
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const errorMessage = document.getElementById("errorMessage")
const registerForm = document.getElementById("registerForm")



registerForm.addEventListener('submit',(event) =>{
    event.preventDefault()

    let nameValue = document.getElementById('name').value
    let emailValue = document.getElementById("email").value;
    if(nameValue === ''){
        errorMessage.textContent = 'Атыңыз бс болмау керек'
        errorMessage.style.color = 'red'
    }
    else if (!emailValue.includes('@')) {
        errorMessage.style.color = "red"
        errorMessage.textContent = 'Электронды почта қате енгізілді'    
    }
    else if(password.value.length < 6){
        errorMessage.textContent = 'Құпия сөз 6 символдан кем!'
        errorMessage.style.color = "red"
    }
    else if(password.value !== confirmPassword.value){
        errorMessage.textContent = "Құпия сөз бірдей емес"
        errorMessage.style.color = "red"
    }
    else{
        alert("Bari durys")
}
})
