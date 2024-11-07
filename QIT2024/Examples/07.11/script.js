// var option = prompt("1-den 3-ke deiyn san tanda")

// switch(option){
//     case "1":
//         alert("siz bir tandadynyz");
//         break;
//     case "2":
//         alert("siz eki tandadynyz")
//         break
//     case "3":
//         alert("siz ush tandadynyz")
//         break
//     default:
//         alert("kate jazdynyz")
// }

var a = prompt("Бірінші сан жазыңыз: ")
var b = prompt("есептеу символы: ")
var c = prompt("Екінші сан жазыңыз: ")
var total = 0 ;

switch(b){
    case "/":
        total += a / c
    break
    case "*":
        total += a * c
    break
    case "+":
        total += a + c
    break
    case "-":
        total += a - c
    break
    default:
        alert("Тек сан жазыңыз!")
}
alert(total)