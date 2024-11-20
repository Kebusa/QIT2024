var result = 0;

function jolSanau(){
    var long = 0;
    var metr = "";

    while(true){

        long = +prompt("сан енгізіңіз (немесе '0' енгізіңіз шығу үшін):");
        if(long == 0) {
            break;
        }

        metr = String(prompt("Өлшем бірлігін енгізіңіз (m, ds, km):"));
        if(metr == "m"){
            result += long * 1;  
        }
        else if(metr == "ds"){
            result += long * 0.1; 
        }
        else if(metr == "km"){
            result += long * 1000; 
        }
        else {
            alert("Қате өлшем бірлігі. Тек 'm', 'ds' немесе 'km' енгізіңіз.");
        }
    }
    return result + " m";
}

console.log(jolSanau());
