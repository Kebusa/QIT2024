// // const books = [
// //     {title:"Robinzon kruzo", year: 1901, pages:800},
// //     {title:"Robinzon kruzo B", year: 1902, pages:500},
// //     {title:"Robinzon kruzo C", year: 1903, pages:1000},
// // ]

// // function sortByYear() {
// //     return books.sort((a, b) => b.year - a.year)
// // }

// // console.log(sortByYear());



// //task 1

// const students =[
//     {name:"Ali", age: 18, grade:80},
//     {name:"Chika", age: 21, grade:75},
//     {name:"Tima", age: 17, grade:100},
//     {name:"Aidyn", age: 22, grade:95},
// ]

// function allName() {
//     let allStud = []
//     students.forEach((element) => {
//         allStud += element.name + " "
//     })
//     return allStud 
// }
// console.log(allName());


// function filt() {
//     return students.filter(jas => jas.age > 20)
// }

// console.log(filt());


// function tenProtint() {
//   return students.map((sum ) => sum.grade * (100 + 10 ) / 100)
// }

// console.log(tenProtint());


// function totalGrade() {
//    return students.reduce((total, sum) => total += sum.grade, 0)
// }
// console.log(totalGrade() / students.length);

// function hightGrde() {
//     let max = students[0].grade
//     students.forEach((element) =>{
//         if(max < element.grade){
//             max = element.grade
//         }
//     })
//     return max
// }
// console.log(hightGrde());



// // task 2

// const tovar = [
//     {name:"Orange", cost: 1200},
//     {name:"Piineapple", cost: 2000},
//     {name:"Carrot", cost: 700},
//     {name:"Apple", cost: 15000},

// ]

// function overThousend() {
//     return tovar.filter(sum => sum.cost > 1000)   
// }
// console.log(overThousend());

// function totalCost() {
//     return tovar.reduce((total, sum) => total += sum.cost, 0)
// }

// console.log(totalCost());


// function allTovarName() {
//     return tovar.flatMap(sum => sum.name)
// }
// console.log(allTovarName());


// const fifteen = tovar.filter(name => name.cost > 10000)
// function overFifteen() {
//    return fifteen.map(sum => 
//    ({ name: sum.name,
//      cost: sum.cost * 0.85
//    })
//    )
    
// }
// console.log(overFifteen());



// const tasks = [
//     {id:1, name:"English", complited: true},
//     {id:2, name:"Spanish", complited: false},
//     {id:3, name:"French", complited: true},
//     {id:4, name:"Japan", complited: false},
// ]

// function didntComplited(){
//     return tasks.filter(bool => bool.complited == false)
// }

// const inComlitedTask = didntComplited()

// if (inComlitedTask.length > 0) {
//     alert("Not completed" + inComlitedTask.map(task => ` ${task.id} ${task.name} `))
// }
// else{
//     alert("complete")
// }

// const taskNumber = +prompt("Enter a task number (1-4)")

// if (taskNumber >= 1 && taskNumber <= tasks.length) {
//     tasks[taskNumber - 1].complited = true
//     alert(` ${tasks[taskNumber - 1].name}  checked`)    
// }
// else{
//     alert( "Not competed task")
// }

// const completedTask = tasks.filter(task => task.complited)
// if (completedTask.length > 0) {
//     alert(`Completed taks:  ${completedTask.map(task => task.name)} `)
// }
// else{
//     alert("Not completed")
// }



const users = [
    {name:"Izat", age: 28,},
    {name:"Azat", age: 18,},
    {name:"Abzal", age: 25,},
    {name:"Dauren", age: 16,},
]


