
var pass = +prompt("1 ден 100 ге дейін құпия сөз енгізіңіз:")

function passTabu(){
    while(true){
        izdeu = +prompt("Іздеу номерін жазыңыз:")
        if(izdeu == pass){
            break
        }
        else if(izdeu > pass){
            alert("Құпия сан үлкенірек!")
        }
        else if(izdeu < pass){
            alert("Құпия сан кішірек!")
        }
    }
    return "Жарайсыз! Сіз құпия санды таптыңыз!"
}

alert(passTabu())