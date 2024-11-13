

// for (let i = 1; i <= 30; i++){

//     // if(i > 19 && i < 26){
//     //     continue;
//     // }

//     if(i > 5 && i < 20){
//         if((i % 2) != 0){
//           continue
//         }
//     }
//     console.log(i)

// }






// let apple = 1

// while(apple < 10){
//     apple++
//     if(apple % 2 == 0){
//         continue;
//     }
//     console.log(apple + " - inchi alma")

// }
// console.log("aiaqtaldy")




// let apple = 1

// while(apple < 30){
//     apple++
//     if(apple % 6 == 0){
//         console.log(apple + " altynshy alma")
//     }
//     else{
//         console.log(apple + " - inchi alma")  
//     }
// }




// let num = 1
// while (num <= 15){
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if (num % 3 == 0){
//         console.log("Fizz")
//     }
//     else if (num % 5 ==0){
//         console.log("Buzz")
//     }
//     num++
// }




// let p = 1 
// let total = 0

// while(p < 10){
//     p++
//     total += p

    
// }
// console.log(total)

// let num = 0

// do{
//      num = +prompt("on san jaz")

// }while(num < 0 )
// alert("molodes")


// let num = 1

// do{
//     num++
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if (num % 3 == 0){
//         console.log("Fizz")
//     }
//     else if (num % 5 ==0){
//         console.log("Buzz")
//     } else if (num % 2 != 0) {
//         console.log(num);
        
//     }

// }while(num < 40)

let num = 20
let quest = ""
let quest1 = ""
let quest2 = ""
let quest3 = ""
let total = 0

while(true){
    quest = prompt("USA prizident?")
    if(quest == "Trump"){
        while(true){
            quest1 = prompt("Stolisa Fransi")
            if(quest1 == "Paris"){
                while(true){
                    quest2 = prompt("what kind of light do you get when you mix blue and red?")
                    if(quest2 == "Purple"){
                        while(true){
                            quest3 = prompt("how many days are there in a week?")
                            if(quest3 == "7"){
                                alert("youre score: " + num)
                            }
                           else{
                            num--
                           }
                        }

                           
                    }else{
                        num--
                }}
            }else{
                num--
        } }
    
        }else{
        num--
}}
 
       



