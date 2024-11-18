
// for (let i = 0; i <= 50 ; i+=2){
//     if (i > 20 && i < 40){
//         continue;
//     }
//     console.log(i)
// }



// for(let i = 1; i <= 50; i++){
//     if(i % 3 ==0 && i % 5 == 0){
//         console.log(`${i} :3 ke jane 5 ke bolinedi`)
//     }
//     else if (i % 3 == 0){
//         console.log(`${i} :5 ke bolinedi `)
//     }
//     else if(i % 5 ==0 ){
//         console.log(`${i} :3 ke bolinetin `)
//     }
//     else{
//     console.log(i)
//     }
// }


// var a = +prompt("student:")
// var b ;
// var maxNum = 0
// var minNum = 100
// maxNum > minNum


// for(let i = 1; i <= a; i++){
//     b = +prompt(i + "bagasy")
//     if(b > maxNum){
//         maxNum = b
//     }
//     else if (minNum > b){
//         minNum = b
//     }
// }
// alert(`${minNum} min num \n ${maxNum} max num`)


// var num = prompt("enter number 1-1000")
// var min = 1000
// var max = 0

// for(let i = 1; i <= num; i++ ){
//     if(i % 12 == 0 && i > max){
//     max = i
//     }
//     if(i % 12 == 0 && i < min){
//     min = i
//     }
// }
// console.log(min)
// console.log(max)



// var num = prompt("1enter number 1-1000")
// var num2 = prompt("2enter number 1-1000")
// var min = 1000
// var max = 0

// for(let i = num; i <= num2; i++ ){
//     if(i % 12 == 0 && i > max){
//     max = i
//     }
//     if(i % 12 == 0 && i < min){
//     min = i
//     }
// }
// console.log(min)
// console.log(max)


var choise = prompt("0 Exit" + "\n" +"1 Burger")
var burg;
var zakaz = ""

while(choise != 0){
    if (choise == 1){
        burg = +prompt("1 Hamburger" + "\n" +" 2 Hot dog" +"\n " + "3 Cheese burger")
        if (burg == 1){
            zakaz = zakaz + "\n" + "Hamburger"
        }
        else if (choise == 2){
            zakaz = zakaz + "\n" + "Hot dog"
        }
        else if (choise = 3){
             zakaz = zakaz + "\n" + "Cheese burger"
        }
    }
    else if(choise == 0){
        break;
    }
    else{
        alert("Wrong choise")
    }
    choise = prompt("0 Exit" + "\n" +"1 Burger")
}
alert(zakaz)