var name = prompt("Өз атыңды жаз: ")
var coffe = prompt("Қандай коффе Қалайсыз: " + " \n" + "A) Americano 5€" +"\n" + "B) Capuchino 6€" + " \n" + "C)Latte 7€" )
var chek = ""
var sum = 0;

switch(coffe){
    case "A" :
        chek += "Americano 5€ \n"
        sum += 5
    break
    case "B" :
        chek += "Capuchino 6€ \n"
        sum += 6
    break
    case "C":
        chek += "Latte 7€ \n" 
        sum += 7
    break
    default:
        alert("Тек вариант жазыңыз!")
}
var milk = prompt("Сүт Таңдаңыз: " + "\n" + "A) Пакеттегі сүт 0.5€" + "\n" + "B) Авсяное 0.9€ " + "\n" + "C) Қол сүті 0.2€" )

switch(milk){
    case "A" :
        chek += "Пакеттегі сүт 0.5€ \n"
        sum += 0.5
    break
    case "B" :
        chek += "Авсяное 0.9€ \n"
        sum += 0.9
    break
    case "C" :
        chek += "Қол сүті 0.2€ \n"
        sum += 0.2
    break
    default:
        alert("Тек вариант жазыңыз!")
        
}
var sirop = prompt("Сироп Таңдаңыз: " + "\n" + "A) Шокалад 1.5€" + "\n" + "B) Карамель 1.5€ " + "\n" + "C) Соленая карамель 1.5€" )

switch(milk){
    case "A" :
        chek += "Шокалад 1.5€ \n"
        sum += 1.5
    break
    case "B" :
        chek += "Карамель 1.5€ \n"
        sum += 1.5
    break
    case "C" :
        chek += "Соленая карамель 1.5€ \n"
        sum += 1.5
    break
    default:
        alert("Тек вариант жазыңыз!")
        
}




alert(chek + "\n" + "Бағасы: "+ sum + "€" + "\n" + "Клиент аты-жөні:  " + name)
