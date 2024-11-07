
var playerName = prompt("Персонаждың аты: ")
var game = alert("Ойынға қош клдіңіз!" )
var player = prompt("Ойнау үшін есікті таңдаңыз: " + "\n" +"A) Оң есік  " + " B) Сол есік")
var order = ""
var isDead = false;


if(player == "A" ){
  alert("Оң есіктің артында Бір топ қасқыр болды")
  isDead = true;
}
else if (player == "B"){
  alert("сол жақ есікте жол болды сіз аман қалдыңыз")
}
else{
  alert ("Тек вариант жазыңыз!")
}

if(isDead){
  alert("Сіз ұтылдыңыз!")
}
else if(!isDead) {
    var levelSecond  = prompt("екінші кезең! "+ "\n" + "үш есіктің бреуі тұзақ" + "\n" +"A) Оң есік  " + " B) Сол есік " +" C) Орта есік")
    if(levelSecond == "A"){
        alert("Оң есіктің артында үлкен шұңқыр болды")
        isDead = true;

    }
    else if (levelSecond == "B"){
      alert("сол есікте қазына болды ")
      alert("+1 ©")
      order += +1
    }
    else if ( levelSecond == "C"){
      alert("сіз аман қалдыңыз!")
    }
    else{
       alert ("Тек вариант жазыңыз!") 
    }
    if(isDead){
  alert("Сіз ұтылдыңыз!")
}
}
if (!isDead){
  var levelThird = prompt("Kелесі кезең" + "\n" + "Алдыңызда үш есік түр екеуі тұзақ" +"\n" + "A) Оң есік " + "B) Сол есік " + "C) Орта есік ")
  if (levelThird == "A"){
    alert("Лаваға түсіп мерт болдыңыз")
    isDead = true
  }
  else if(levelThird == "B"){
    alert("Сіз тікенге түсіп кеттіңіз")
    isDead = true
  }
  else if (levelThird == "C"){
    alert("Сіз лабиринттен шықтыңыз!!! ")
    if(order == +1)
    var gift = prompt("Сізде бір сандық бар ашасыз ба?" + "\n" + "A) Ия" + "\n" + "B) Жоқ")
    if(gift == "A"){
      alert("Сандық мимик болып шықты," +  " Cізді жеп қойды! " + "\n" +"Аман қалғаныңа қуану керек!")
      isDead = true
    }
    else if (gift == "B"){
      alert("Сандық мимик болып шықты," + " Cіз аман қалдыңыз!" + "\n" + "Бірінші кезек ол өзіңнің амандығың" )
    }
  }
  else{
    alert ("Тек вариант жазыңыз!")
  }
  if(isDead){
     alert("Сіз ұтылдыңыз!") 
  }
}
if(!isDead){
  alert(playerName + " Win" )
}
else if (isDead){
  alert(playerName + " lose")
}

