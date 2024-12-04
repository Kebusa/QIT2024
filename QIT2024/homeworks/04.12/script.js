//Pic 1

// const students = [
//     {name: "Dastan", age: 18, grade: [100, 95, 80]},
//     {name: "Azat", age: 17, grade: [70, 80, 85]},
//     {name: "Ratmir", age: 20, grade: [95, 100, 90]},
//     {name: "Miras", age: 19, grade: [100, 95, 100]},
//     {name: "Stas", age: 19, grade: [80, 75, 85]},
// ]
// function gradeOfStudent(){
//     return `${students[1].name} onyn orta bagasy ${students[1].grade.reduce((total, san) => total + san, 0) / students[1].grade.length}`
// }

// console.log(gradeOfStudent());


//Pic 2

// const library = {
//     books: [{title:"Ер төстік", author:"Қазақ ертегілері", available: true},
//     {title:"Алтын адам", author:"Нұрлан Есім", available: false},],
//     borrowBook: function(){
//         if(this.books.available == true){
//             console.log(`Сіз ${this.books[0].title} ала аласыз! `);
//         }
//         else if(this.books.available != true){
//             console.log(`Сіз ${this.books[1].title} ала алмайсыз `);
//         }
//     }

// }
// library.borrowBook()




//Pic 3

// const students = {
//     groups:{
//         group1:[{name:"Айгерім"},{name:"Ерлан"},{name:"Ғаныш"},{name:"Қайсар"}],
//         group2:[{name:"Меруерт"},{name:"Қайсар"},{name:"Дастан"},{name:"Азат"}],
//     },
//     groupAllStudents: function(){
//         return ` Бірінші группа студенттері: ${this.groups.group1.flatMap(student => student.name)}`
//     }
// }
// console.log(students.groupAllStudents());
