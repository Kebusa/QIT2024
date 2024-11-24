// var num1 = +prompt("1 san jazynyz")
// var num2 = +prompt("2 san jazynyz")
// var result = 0 

// function diapazone(a, b){
//     if(a > b){
//        for (let i = b; i <= a; i++){
//         result = result + i
//        } 
//     }
//     else if (b > a){
//         for (let i = a; i <= b; i++){
//             result = result + i
            
//            } 
//     }
//     return result
// }
// console.log(diapazone(num1, num2))



function pass(){
    let password = 50
    while(true){
        let find = +prompt("find number:")
        if(find == password){
            alert("you find password!!!")
            break;
        }
        if(find <= 55 && find >= 45){
            alert("you so close")
        }
        else{
            alert("not close ")
        }
      
    }

}
pass()  



