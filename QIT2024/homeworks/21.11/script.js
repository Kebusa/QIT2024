// // Қарапайым сан табу

// var num = +prompt("Enter comon number: ")

//     if(num % num == 0 && num % 1 == 0){
//         alert(num +" its comon number" )
//     }
//     else{
//         alert("its not correct!!")
//     }




// // Сандарды қосу

// var result = 0 
// for(let i = 1; i <= 100; i++){
//     result += i
//     i++
// }
// alert(result + " 1-100 Қосындысы")



// // Тақ немесе жұп

// var num = +prompt("Enter number:")

// function takJup(){
//     if(num % 2 == 0){
//         alert( num + " num is even ")
//     }
//     else{
//         alert(num + " num is odd ")
//     }
// }
// takJup()



// // Сандардың орташа мәні 

// var num
// var result = 0

// for(let i = 1; i <= 5; i++){
//     num = +prompt(i + " Enter your number")
//     result += num

// }
// alert(result / 5 )




// // Факториал есептеу

// var num =+ prompt("Enter factorial number:")
// var result = 1

// function factorial(f){
//     while(f){
//         result *= f--
//     }
//     return result
// }
// alert(factorial(num))



// // Сандарды кері санау

// var num = +prompt("Enter reverse number: ")

// for(let i = num; i >= 1; i--){
//     console.log(i)
// }



// // Санды болжау

// function pass(){
//     let password = 50
//     while(true){
//         let find = +prompt("find number:")
//         if(find == password){
//             alert("you find password!!!")
//             break;
//         }
//         if(find <= 55 && find >= 45){
//             alert("you so close")
//         }
//         else{
//             alert("not close ")
//         }
      
//     }

// }
// pass() 





// Белгілі бір диапазондағы сандарды қосу

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




// // Баға

// let result = 0; 
//   let maxGrade = 0;
//   let students = 0;

//   while (true) {
//     let studentName = prompt('Student atyn zhaz');
//     if (studentName == 'stop'){
//         break;

//     }
//     students++;

//     let grade = +prompt(`${studentName} бағасын жаз`);
//     if (grade > maxGrade) {
//         maxGrade = grade;

//     } 

//     result += grade;
//   }

//   alert(
//     `Students number is ${students} \nThe greatest grade is ${maxGrade}\nAverage grade is ${result / students}`
//   );


// studentsGrade();








// Тапсырыс беру жүйксі

let tg = prompt("₸  счетыңызда")
let usd = prompt("$ счетыңызда")
let cny = prompt("¥ счетыңызда")
let total = 1

function convert(a, b, c){
    total = (a *= 0.002003) + (b *= 1) + (c *= 0.138012)
    return  "You have " + total +" $"
}
console.log(convert(tg, usd, cny ));

var zakaz = prompt(`1)Pizza 10$ \n 2)Sushi 8$ \n 3) Hamburger 7$ \n `)



