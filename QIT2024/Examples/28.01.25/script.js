// localStorage.setItem('name', 'Aijan')

// const name = localStorage.getItem('name')
// console.log(name);

// localStorage.removeItem('name')

// localStorage.clear()


const firstName = document.getElementById('firstName')
const age = document.getElementById('age')
const save = document.getElementById('save')
const chose = document.getElementById('chose')
const clear = document.getElementById('clear')

save.addEventListener('click', () => {
    localStorage.setItem('name', firstName.value)
    localStorage.setItem('age', age.value)
    alert('added storage ')
})

chose.addEventListener('click', () => {
   const name = localStorage.getItem('name')
   const age = localStorage.getItem('age')
    alert(name + ": " + age)
} )


clear.addEventListener('click', () =>{
    localStorage.clear()
    alert('absolutly clered')
})
