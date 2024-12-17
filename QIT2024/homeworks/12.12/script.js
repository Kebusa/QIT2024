const liveInput = document.getElementById("liveInput")
const liveOutput = document.getElementById("liveOutput")


liveInput.addEventListener('input', () => {
    liveOutput.textContent = liveInput.value
});

const checking = document.getElementById('checking')
const button = document.getElementById('froma')

button.addEventListener('submit',(event) => {
    event.preventDefault()
    if (liveInput.value !== "") {
        checking.textContent ="Сіз жаздыңыз: " + liveInput.value
        liveOutput.textContent = ""
    }
    
})