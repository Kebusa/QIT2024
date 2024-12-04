
// const book = {
//     title: "One piece",
//     author: "Eichiro Oda",
//     pages: 45,
//     isRead: false,
//     readBook: function(){
//         return `Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз`;
//     },
//     toogleReadStatus: function(){
//         this.isRead = !this.isRead
//         return this.isRead ;
//     },
//     hardLavel: function(){
//         return this.pages <= 200 ? `Easy ` : this.pages > 200 && this.pages < 500 ? `Middle ` : `Hard`  
//     },
// }
// console.log(book);

// console.log(book.readBook());

// console.log(book.toogleReadStatus ? `Сіз оқығансыз ` : `Сіз оқымағансыз ` );  //  ?  true;    :  false;

// console.log(book.hardLavel());





// const user = {
//     name: "Alia",
//     age: 28,
//     hobbies: ['oiyndar', 'Tamaq pisiru', 'Kitap oqu'],
    // listHobby: function(){
    //     return this.hobbies.join("\n")
    // },


// };

// function addHobbies(){
//     let newHobby = prompt("Enter hobby")
//     if(newHobby.length > 15){
//         alert("kyskasha jaz")
//     }
//     user.hobbies.push(newHobby)
//     console.log(user.listHobby());
    
// }
// function shortHobbies(){
//     return user.hobbies.filter(hoby => hoby.length < 15)
// }


// console.log(shortHobbies());



// const user = {
//     name: "Alia",
//     age: 28,
//     hobbies: [
//         {name: "Atka minu", year: 2013},
//         {name: "Kitap oku", year: 2010},
//         {name: "Oiyndar", year: 2020},
//         {name: "Oiyndar", year: 2015},
//     ],
//     addHobby: function(newHobby){
//         this.hobbies.push(newHobby)
//     }
// }
// function addNewHobby(){
//     let hobbyName = prompt("Enter hobby name:")
//     let hobbyYear = +prompt("Enter hobby year:")
//     let newHobby = {
//         name: hobbyName,
//         year: hobbyYear,
//     }

//     user.addHobby(newHobby)
// }
// function filterYear(){
//     return user.hobbies.filter(hobby => hobby.year > 2010)
// }

// console.log(filterYear());


// addNewHobby()

// console.log(user.hobbies);





// const users = {
//     name: "Barcelona",
//     members: [
//         {name:"Baurzhan", hobbies:["Golf", "Football"]},
//         {name:"Aizhan", hobbies:["Suret salu", "Videmaking"]},
//         {name:"Aiganym", hobbies:["Kolik aidau", "Football"]}
//     ]
// }

// console.log(users.members[1].hobbies[0]);

// console.log(users.members[1].hobbies.push("hokkey"));
// console.log(users);


// console.log(users.members.flatMap(member => member.hobbies)); // hobbistagy masivtardy jinaidy




const clas = {
    class: "24/3",
    students:[
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
        {name:"", age:18, subject:[]},
    ],
    allsub: function(){
        this.students.flatMap(student => student.subject)
    },
    jasStud: function(){
        let min = this.students[0].age; 
       this.students.forEach((student) => {
        if(min > student.age){
            min = student.age
        }
       })
       return min
    }
}

console.log(clas.jasStud());
