
// task 1
let num = 0
do{
    num++
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (num % 3 == 0){
        console.log("Fizz")
    }
    else if (num % 5 ==0){
        console.log("Buzz")
    } else if (num % 2 != 0) {
        console.log(num);
        
    }
}while(num < 40)



// task 2
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


//task3 

var three = 1
var seven = 1
var i = prompt("Диапазонын басталу сан енгізіңіз:")
var end = prompt("Диапазонын аяақтайтын сан енгізіңіз:")


do{
    if(i % 3 == 0){ 
        three *= i
        console.log(three)
    } 
    if(i % 7 == 0){
        seven *= i
        console.log(seven)
    }
    i++

}while(i <= end)
    console.log(three)
    console.log(seven)

