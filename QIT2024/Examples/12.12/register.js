const nameField = document.getElementById('name')
const helperText = document.getElementById("helperText")
const statusText = document.getElementById('status')

nameField.addEventListener('focus', () => {
    if (nameField.value === "") {
        helperText.textContent = 'Атыңызды толық жазыңыз'

    }
})
nameField.addEventListener('blur', () => {
    if (nameField.value !== "") {
    helperText.textContent = ''
    statusText.style.color = "green"
    statusText.textContent = "✓"
        
    }
})

const liveInput = document.getElementById('liveInput')
const liveOutput = document.getElementById('liveOutput')

liveInput.addEventListener('input', () => {
    liveOutput.textContent = liveInput.value
})