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