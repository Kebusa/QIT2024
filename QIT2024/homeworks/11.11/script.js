// task 1

var a = prompt("a сан беріңіз")
var b = prompt("b сан беріңіз")
var c = prompt("c сан беріңіз")

if(((a + b)>c) || ((a+c)>b) || ((b+c)>a)){
    alert("Бұл үшбұрыш жасай алады")
}
else{
    alert("Бұл үш бұрыш жасай алмайды")
}

// task 2

var san = prompt("0 немесе одан жоғары бүтін санды енгізіңіз")

if((san == 0) || (san > 0)){
    function factorial(san) {
        return (san != 1) ? san * factorial(san - 1) : 1;
      }
      
      alert("Санның факториалы: " + factorial(san));
}
else{
    alert("Факториалды тек 0 немесе одан жоғары сандар үшін есептей аламыз")
}

// task 3

var pay =  Number(prompt("Пайдаланушы енгізген ұпай:"))

switch (true){
    case (pay >= 0 && pay <= 59):
        alert("Баға: F")
        break
    case (pay >= 60 && pay <= 69):
        alert("Баға: D")
        break
    case (pay >= 70 && pay <= 79):
        alert("Баға: C")
        break
    case (pay >= 80 && pay <= 89):
        alert("Баға: B")
        break
    case (pay >= 90 && pay <= 100):
        alert("Баға: А")
        break
    default:
        alert("0-ден 100 аралығында ұпай енгізіңіз")
}

