
var coffe = prompt("Қандай коффе Қалайсыз: " + " \n" + "A) Americano" +"\n" + "B) Capuchino" + " \n" + "C)Latte" )
var chek = ""


switch(coffe){
    case "A","a":
        chek += "Americano"
    break
    case "B","b":
        chek += "Capuchino"
    break
    case "C","c":
        chek += "Latte" 
    break
    default:
        alert("Тек вариант жазыңыз!")
}
var milk = prompt("Сүт Таңдаңыз: " + "\n" + "A) Пакеттегі сүт" + "\n" + "B) Авсяное " + "\n" + "C) Қол сүті" )

switch(milk){
    case "a","A":
        chek += "Пакеттегі сүт"
    break
    case "b","B":
        chek += "Авсяное"
    break
    case "c","C":
        chek += "Қол сүті"
    break
    default:
        alert("Тек вариант жазыңыз!")
        
}
alert(chek)