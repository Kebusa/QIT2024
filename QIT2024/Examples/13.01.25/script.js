// setTimeout(() => {
//     console.log('0.5 seconds spend!')
// }, 500);


// let count = 0;
// const interval = setInterval(() => {
//     count++ 
//     console.log(`sanau: ${count}`);
//     if (count === 5) {
//         clearInterval(interval)
//     }
    
// }, 1000)


// function fatchData() {
//     console.log("Собирание информаций...");
//     setTimeout(() => {
//         console.log("собирание информаций завершена");
        
//     }, 2000)
// }

// fatchData()

const users = [
    {id: 1, name: "Alihan", age: 20},
    {id: 2, name: "Alimjan", age: 22},
    {id: 3, name: "Maks", age: 18},
]

// setTimeout(() =>{
//     console.log(users);
// }, 2000)


// setTimeout(() => {
//     console.log(users[0]);
// }, 2000);
// setTimeout(() => {
//     console.log(users[1]);
// }, 3000);
// setTimeout(() => {
//     console.log(users[2]);
// }, 4000);


let count = 5
let time = document.getElementById('time')
const head = document.getElementById('head')

// head.textContent = "Секунд"
// const interval = setInterval(() => {
//        time.textContent = count
//        count--;
//        if (count == -1) {
//         clearInterval(interval)
//         head.textContent = "счет закончился!!!"
//        }
// }, 1000)


head.textContent = "Бұл бастапқы текст"


let text = time = ["Сәлем, бұл секунд сайын шығатын сөздер"]
text.join("")
setInterval(() => {
   text.forEach(time => {
    time.textContent = text.length
   });
}, 100);



