let numbers = [ 4, 7, 5, 10, 3, 12]

function moreThen(array){
    let num = +prompt("san engiz:")
    return array.filter((element) => element > num)

}

function sumOfElements(array){
    return array.reduce((total, element) => total + element, 0 )
}

function average(array){
    return sumOfElements(array) / array.length
}

function addNumber(array){
    let add = +prompt("add the number")
    return array.push(add)
}
// console.log(`4  sanynan ulken sandar ${moreThen(4, numbers)}`);
// console.log(`barlyk sandar kosyndysy ${sumOfElements(numbers)}`);
// console.log(`kosyndy sandardyn ortasy ${average(numbers)}`);



function menu(){
    while(true){
        let choise = +prompt(`${numbers} \n1)sandar engiz \n2)Ortasha man \n3)Sandardy suzip alu \n4)sandardy kosu \n5)Shygu`)

        switch(choise){
            case 1:
                alert(sumOfElements(numbers))
                break;
            case 2:
                alert(average(numbers))
                break;
            case 3:
                alert(moreThen(numbers))
                break;
            case 4:
                addNumber(numbers)
                break;
            case 5: 
                return; 
        }
    }
}
menu()