

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()
//         if (!response.ok) {
//             throw new Error('Posttardy alu mumkin bolmady')
//         }
//         console.log(data);

//     } catch (error) {
//         console.error("kate: " + error);
        
//     }
// }
// fetchData()

const key = 'https://dog.ceo/api/breeds/image/random'
const button = document.getElementById('button')
const image = document.getElementById('image') 

button.addEventListener('click', () => {
        fetchData()
})

async function fetchData() {
    try {
        const response = await fetch(key)
        const data = await response.json()
        if (!response.ok) {
            throw new Error('Posttardy alu mumkin bolmady')
        }
        image.src = data.message

        
    } catch (error) {
        console.error("kate paida boldy: " + error);
        
    }

};