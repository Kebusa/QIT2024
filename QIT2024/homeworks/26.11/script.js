
let arr 
let total = []

while(true){
    arr = +prompt("Enter nambers:")
    if(arr % 2 != 0){
        console.log(total)
        break;
    }
    else{
        total.push(arr)
    }
}