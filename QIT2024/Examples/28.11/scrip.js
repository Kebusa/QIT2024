const fillArray = ()=> {
    let array = []


    while(true){
        let thing = prompt("San engiz")
        if(thing === "stop"){
            break;
        }
        if(!isNaN(Number(thing))){
            array.push(Number(thing))
        }
        else{
            array.push(thing)
        }

    }
    return array
}
// console.log(fillArray());






// let array = [3, 5, 6, 3, 2, 1,-2, -4, -8 ]
// let result = []

// for(let element of array){
//     console.log(element)
//     result.push(element * 5)

// }
// console.log(result)



// array.forEach(function(element) {
//     console.log(element)
// })



// let doubled = array.map(element => element * 2)
// let squared = array.map((element) => element * element)
// console.log(`${doubled} eki eselengen sandar `);
// console.log(`${squared} kvadrattalgan sandar`);



// let evens = array.filter(element => element % 2 === 0)
// let odd = array.filter(element => element % 2 !== 0)

// console.log(`Jup sandar ${evens}`);
// console.log(`Tak sandar ${odd}`);


// let onSan = array.filter(element => element > 0)
// let terisSan = array.filter(element => element < 0)

// console.log(`on sandar ${onSan}`);
// console.log(`teris sandar ${terisSan}`);





// let prise = fillArray("Бага ")
// let final = prise.filter(element => element <= 10000)

// console.log(`Тауарлар: ${final}`);
// console.log(`Тауар саны: ${final.length}`);




// let nameList = fillArray("Тауар аты: ")
// let search = prompt("search...")

// let final = nameList.filter(element => element.toLowerCase().includes(search))

// console.log(`Тауарлар: ${final}`);
// console.log(`Тауар саны: ${final.length}`);




let numbers = fillArray("San: ")

function sumofnumbers(array){
let total = array.reduce((result, name) => result + name, 0)

console.log(`sandar kosyndysy ${total}`);
}
function kobeituleri(array){
    let total = array.reduce((result, name) => result * name, 1)
    
    console.log(`sandar kobeitindisi ${total}`);
}

sumofnumbers(numbers)
kobeituleri(numbers)



