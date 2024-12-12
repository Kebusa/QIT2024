
const loginForm = document.getElementById("loginForm")
const errorMessage = document.getElementById("errorMessage")

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    let emailValue = document.getElementById("email").value
    let passwordValue = document.getElementById("password").value

    console.log({emailValue,passwordValue});

    if(!emailValue.includes('@')){
        errorMessage.style.color = "red"
        errorMessage.textContent = 'Электронды почта қате енгізілді'
        
    }
    else if (passwordValue.length < 6) {
        errorMessage.textContent = 'Құпия сөз 6 символдан кем!'
        errorMessage.style.color = "red"


    }else{
        errorMessage.style.color = 'green'
        errorMessage.textContent = 'Форма сәтті түрде орыналды!'
        window.location.href = "home.html"
    }
    
})