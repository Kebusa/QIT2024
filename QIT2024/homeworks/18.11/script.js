

var num = +prompt("Enter number:")

function numJup(san){
    if(san % 2 == 0){
        return san + " Жұп сан! "
    }else if(san % 2 != 0){
        return san + " Тақ сан! "
    }
    else{
        return "Enter number correct"
    }
}

console.log(numJup(num))