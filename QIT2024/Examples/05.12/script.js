// const books = [
//     {title:"Robinzon kruzo", year: 1901, pages:800},
//     {title:"Robinzon kruzo B", year: 1902, pages:500},
//     {title:"Robinzon kruzo C", year: 1903, pages:1000},
// ]

// function sortByYear() {
//     return books.sort((a, b) => b.year - a.year)
// }

// console.log(sortByYear());



//task 1

const students =[
    {name:"Ali", age: 18, grade:80},
    {name:"Chika", age: 21, grade:75},
    {name:"Tima", age: 17, grade:100},
    {name:"Aidyn", age: 22, grade:95},
]

function allName() {
    let allStud = []
    students.forEach((element) => {
        allStud += element.name + " "
    })
    return allStud 
}
console.log(allName());


function filt() {
    return students.filter(jas => jas.age > 20)
}

console.log(filt());


function tenProtint() {
  return students.map((sum ) => sum.grade * (100 + 10 ) / 100)
}

console.log(tenProtint());


function totalGrade() {
   return students.reduce((total, sum) => total += sum.grade, 0)
}
console.log(totalGrade() / students.length);

function hightGrde() {
    let max = students[0].grade
    students.forEach((element) =>{
        if(max < element.grade){
            max = element.grade
        }
    })
    return max
}
console.log(hightGrde());



// task 2

const tovar = [
    {name:"Orange", cost: 1200},
    {name:"Piineapple", cost: 2000},
    {name:"Carrot", cost: 700},
    {name:"Apple", cost: 15000},

]

function overThousend() {
    return tovar.filter(sum => sum.cost > 1000)   
}
console.log(overThousend());

function totalCost() {
    return tovar.reduce((total, sum) => total += sum.cost, 0)
}

console.log(totalCost());


function allTovarName() {
    return tovar.flatMap(sum => sum.name)
}
console.log(allTovarName());


const fifteen = tovar.filter(name => name.cost > 10000)
function overFifteen() {
   return fifteen.map(sum => 
   ({ name: sum.name,
     cost: sum.cost * 0.85
   })
   )
    
}
console.log(overFifteen());
