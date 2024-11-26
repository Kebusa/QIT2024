
// let num = [1, 2, 6, 8, 12, 67];

// console.log(num[2]);



// let fruits = ["Apple", "Pinapple", "Cherry","Banana"]
// let fruits1 = fruits

// fruits[3] = "Mango"

// console.log(fruits);
// console.log(fruits1);

// fruits[1] = "Mango" //auystyrady
// fruits[0] = "Durian"

// console.log(fruits);
// console.log(fruits[0]);//Apple
// console.log(fruits[1]);//Pineapple
// console.log(fruits);//all fruits
// console.log(fruits[fruits.length - 1]); //banana


// let fruits = ["Алма", "Банан ", "Шие" , "Апельсин"]
// fruits[1]= "Mango"
// fruits.push("Watermelon" ,"Melon","Pineapple")// Соңына қосады

// fruits.pop()//соңындағысын өшіреді

// console.log(fruits);




// for(let i = 0; i < fruits.length; i++ ){
//     console.log(fruits[i])
// }


// fruits.shift()// Басындағы элемент жою
// fruits.unshift("Cherry")// Басына элемент қосады

// console.log(fruits);





// let num = [23, 44, 35, 26, 96, 56]
// let maxnum = 0
// let takSan = []
// let jupSan =[]

// for(let i = 0; i < num.length; i++){
    
//     if(num[i] % 2 == 0){
//     jupSan.push(num[i])

//     }else{
//     takSan.push(num[i])
//     }
// }
// console.log(jupSan)
// console.log(takSan)


// for(let i = 0; i < num.length; i++){
//     if(num[i] > maxnum){
//     maxnum = num[i]
//     }
// }
// console.log(maxnum);





// let number = 0
// let result = []

// while(true){
//     number = +prompt(" Enter number:")
//     if(number == 0 || result[result.length - 1] > number ){
//         alert(result)
//     break;
//     }

//     if(number != 0){
//         result.push(number)
//     }

// }



let fruit = [ "Watermelon", "Apple", "Peach", "Orange", "Pinapple", "Cherry"]

let page1 = fruit.slice(0,2)
let page2 = fruit.slice(2,4)
let page3 = fruit.slice(4,6)

console.log(`${page1}\n\n${page2} \n\n${page3}`)
