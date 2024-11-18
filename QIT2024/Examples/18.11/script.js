// function calc(x, y){
//     return x + y;
// }
// console.log(calc(4, 7));
// console.log(calc(3, 19));
// console.log(calc(5, 24));
// console.log(calc(6, 4));



// function esep(a, b, c){
//     return a+b+c;

// }
// console.log(esep(4, 7, 4));
// console.log(esep(3, 19, 7));
// console.log(esep(5, 24, 7));
// console.log(esep(6, 4, 10));



// function calculator(a,b,c){
//     switch(c){
//         case "+":
//             return a + b
//             break;
//         case "*":
//             return a * b
//             break;

//     }
// }

// console.log(calculator(4,5,"+"));
// console.log(calculator(4,5,"*"));



// var name = prompt("enter name")

// const salemBer = function(aty){  
//     return "Salem " + aty +" !"
// }
// console.log(salemBer(name)); // name aty ның орнына тұрады



// var name = prompt("Enter name:")
// var age = +prompt("Enter youre age:")

// const adamAty = function(aty){              //const Salemdesu = function(aty, jas){
//     return "Senin atyn " + aty +" !"        //return "Salem " + name + "\n" +"senin jas "+jas
// }
// const adamJasy = function(jas){
//     return "Senin jasyn " + jas + " !"
// }
// console.log(adamAty(name));
// console.log(adamJasy(age))



// var san1 = prompt("Birinshi san:")
// var san2 = prompt("Ekinshi san:")
// var san3 = prompt("Ushinshi san:")

// function calc(a, b, c){
//     return a * b * c 
// }
// console.log(calc(san1, san2, san3));



// function welcome(){
//     alert("welcome to my site "+"\n" + Date())
// }



// let number = +prompt("Enter any number")
// let darege = +prompt("Enter darege")

// // function sum(num){
// //     let result = 0
// //     for(let i = 1; i <= num ; i++){
// //         result = i + result
// //     }
// //     return result
 
// // }
// // console.log(sum(number));

// function findDegree(a, b){
//     let result = 1 
//     for(let i = 1; i <= b; i++){
//         result = result * a
//     }
//     return result
// }
// console.log((findDegree(number, darege)));




// let number = +prompt("Enter youre number:")

// function findFactorial(a){
//     let result = 1
//     for(let i = 1; i <= a; i++ ){
//         result *= i 
//     }
//     return result
// }
// console.log(findFactorial(number));



let num1 = +prompt("Enter 1st number:")
let num2 = +prompt("Enter 2nd number:")


function findmax(a, b){
    if(a < b){
      return a + " kishi " + "\n" + b + " Ulken "
    }
    else if(b < a){
        return b + " kishi " + "\n" + a + " Ulken "
    }
    else if (a == b){
        return a + " ten " +  + b  
    }
    else{
        console.log("write only number")
    }
}


console.log(findmax(num1,num2))