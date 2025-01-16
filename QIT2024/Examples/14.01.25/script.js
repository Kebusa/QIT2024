// fetch('https://api.example.com/data')
//     .then(response => response.json())// Жауап json форматы

//     .then(data => console.log(data)) //Нәтиже шығару
//     .catch(error => console.error(error))  //Қателерді өңдеу

// function fetchData() {
//     fetch('https://api.example.com/data')
//     .then(response => response.json())// Жауап json форматы

//     .then(data => console.log(data)) //Нәтиже шығару
//     .catch(error => console.error(error))  //Қателерді өңдеу
// }
// fetchData()



// function fetchData(params) {
//     fetch('https://jsonplaceholder.typicode.com/posts/5')
//     .then(response => response.json())
//     .then(data =>{
//         const postTitle = data.title
//         const postBody = data.body 
        
//         document.body.innerHTML  =` 
//         <h1>Загаловок поста: ${postTitle}</h1>
//         <p>Содержание: ${postBody}</p>`})
    
// }
// fetchData()


const key = 'https://dog.ceo/api/breeds/image/random'
const button = document.getElementById('button')
const image = document.getElementById('image') 

button.addEventListener('click', () => {
        fetchData()
})

function fetchData() {
   fetch(key)
    .then(response => response.json())
    .then(data => {
       image.src = data.message

    })
    .catch(error => "404" + error)
};



