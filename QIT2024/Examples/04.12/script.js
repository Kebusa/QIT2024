
// const user = {
//     name:"Asan",
//     age: 23,
//     profesion: "IT specialist"
// }

// const{name, age, profesion} = user 
// console.log(name);
// console.log(age);
// console.log(profesion);


// const letters = ["a", "c", "b"]

// const[letters1, letters2, letters3] = letters

// console.log(letters1 + letters2 + letters3);



// const user = {
//     name:"Asan",
//     age: 23,
//     profesion: "IT specialist",
//     friends:[
//         {name:"Aijan", age:23},
//         {name:"Aijan", age:23},
//         {name:"Aijan", age:23},
//     ]
// }



// const author = {
//     authorName: "Mukhtar Auezov",
//     year: 1897
// }

// const book = {
//     title:"Abai joly",
//     pages:300,
//     author:{...author} //spread - taratu
// }

// console.log(book);



// const arr1 = [1, 2, 3, 4]
// const arr2 = [...arr1, 5, 6]

// console.log(arr2);





// const book = {
//     title:"Abai joly",
//     pages:300,
//     rating: 4.5,
//     author:{authorName: "Mukhtar Auezov",
//         year: 1897} 
// }

// const {author, ...rest} = book

// console.log(author);

// console.log(rest);


// const arr1 = [1, 2, 3, 4]
// const {a, ...b} = arr1

// console.log(a);// 1
// console.log(b); // 2, 3, 4



// const book = {title: "Abai joly", author: "Mukhtar auezov", year: 1942}
// const{title,author,year} = book
// console.log(title)
// console.log(author);
// console.log(year);


// const fruits = ["alma", "Almurt", "shie"]

// const [a, ...b] = fruits

// console.log(a)
// console.log(b);



// const arr1 = [1, 2, 3]
// const arr2 = [...arr1,4, 5, 6]


// console.log(arr2);



// const friend = {
//     name:"Aijan",
//     age: 20
// }

// const user = {
//     name: "Ali",
//     age: 25,
//     friend:{...friend},
// }

// console.log(user);


// const user = {
//     name: "Aijan1",
//     age: 25,
//     profession:"Mugalim",
// }

// function hello(){
//     return `Salem menin atym ${user.name}! Jasym ${user.age}-te, ${user.profession} bolyp jumis isteim`
// }
// console.log(hello());



// const user1 = {
//     name: "Aijan1",
//     age: 25,
//     friends: ["Dias", "Meruert","Almas"],
//     addFriends: function(){
//         while (true) {
//             let nameFriend = prompt("friend")
//             if (nameFriend == "stop"){
//                 console.log(this.friends);
//                 break;
//             }
//             else if(nameFriend != "stop"){
//             this.friends.push(nameFriend)
//             }
            
//         }
//     }

// }



// console.log(user1.addFriends());

// const{name,age, friends} = user1
// console.log(name);
// console.log(age);
// console.log(friends);




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



