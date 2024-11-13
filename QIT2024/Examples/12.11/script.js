


// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }






// for (let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i + " - jup")
//     }
//     else{
//         console.log(i + " - tak")
//     }
// }


// for (let i = 1; i <=5; i++){
//     console.log(i) // 1, 2, 3
//     if(i == 3){
//         break
//     }
//     console.log(i) // 1, 2
// }


// for (let i = 10; i >= 1; i--){
//     console.log(i) // 10 - 1 dein
// }
// for (let i = 1 ; i <=10; i += 2){
//     console.log(i) //tak san shygaru
// }




// var num = +prompt("enter number")

// for (let i=0; i < num; i+=2){
//     console.log(i)
// }



// var n = +prompt("enter your number:")
// var total = 0


// for (let i = 0; i <= n; i++){
//     console.log(total += i)
// }
// alert(total)



// for (let i = 1; i <= 3; i++){
// var num = +prompt("Жердің тартылыс күші")

//     if(num != 9.8){
//     prompt("Жердің тартылыс күші")
    
//     }
//     else if(num == 9.8){
//         alert("durys")
//     }
// }





// var num = prompt("san engiz")

// for (let i = 1; i <=10; i++){
//     var total = num * i 
//     console.log(num + "*" + i  +"=" + total )


// }


// var numbers = [1, 2, 3, 4, 5, 6]

// for(let i = 0; i <= 5; i++){
//     console.log(numbers[i])
// }


// for(let i = 5; i >= 0; i--){
//     console.log(numbers[i])
// }
var num = [3, 45, 20, 30, 70, 55]

for (let i = 0; i <= 5; i++){
    if(num[i] % 2 == 0)
        console.log(num[i]+"  jup")
    else if (num[i] % 2 !=0){
        console.log(num[i]+"  tak")
    }
}