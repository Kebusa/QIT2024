//task 1

const numbers = [
    {a: 1, b: 2, c: 3, d: 4}
]
function add() {
    return numbers.reduce((total,sum) => total += sum.a + sum.b + sum.c + sum.d, 0 )
}

// console.log(add());

//task 2 

const arr1 =  {a: 1, b: 2}
const arr2 =  {c: 3, d: 4}

const arr3 = {...arr1, ...arr2}

// console.log(arr3);


//task 3
const students = [
    {id: 1, name: "A"},
    {id: 2, name: "A"},
    {id: 3, name: "A"},
    {id: 4, name: "A"},
    {id: 5, name: "A"},
]

function takID(){
    return students.filter(student => student.id % 2 !== 0)
}
function jupID(){
    return students.filter(student => student.id % 2 === 0 )
    
}

// console.log(takID() );
// console.log(jupID() );


//task 4

const library = {
    name: 'Alatau HUB',
    books: [
        { name: 'book A', pages: 300 },
        { name: 'book B', pages: 100 },
        { name: 'book C', pages: 340 },
        { name: 'book D', pages: 1000 },
    ],
    bookpages: function(){
       return this.books.reduce((total, bet) => total += bet.pages, 0)
    }

};
console.log(library.bookpages() / library.books.length);

function enAzBet() {
    let min = library.books[0].pages
    library.books.forEach((element) => {
        if(min > element.pages){
            min = element.pages
        }
    })
    return min
}
console.log(enAzBet());

function enKopBet() {
    let max = library.books[0].pages
    library.books.forEach((element) => {
        if(max < element.pages){
            max = element.pages
        }
    })
    return max
}
console.log(enKopBet());

