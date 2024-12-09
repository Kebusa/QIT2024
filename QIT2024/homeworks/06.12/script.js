// task 1

let people = [];

for (let i = 0; i < 3; i++) {
  let name = prompt("Атын енгізіңіз, адам " + (i + 1));
  let age = prompt("Жасын енгізіңіз, адам " + (i + 1));

  let person = {
    name: name,
    age: age
  };

  people.push(person);
}


people.forEach(function(person) {
  alert("Аты: " + person.name + ", Жасы: " + person.age);
});



//task 2

let books = [
    { title: "Book 1", author: "Author 1", year: 2000 },
    { title: "Book 2", author: "Author 2", year: 2005 },
    { title: "Book 3", author: "Author 3", year: 2010 }
  ];
  
  let bookTitle = prompt("Кітап атауын енгізіңіз:");
  let bookFound = false;

  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase() === bookTitle.toLowerCase()) {

      let newYear = prompt("Бұл кітаптың жылын жаңартыңыз: ");
      books[i].year = newYear; 
      bookFound = true;
      break; 
    }
  }
  
  if (!bookFound) {
    alert("Бұл кітап массивте жоқ.");
  }
  
  books.forEach(function(book) {
    alert("Атауы: " + book.title + ", Авторы: " + book.author + ", Жылы: " + book.year);
  });
  

  //task 3

    let students = [
    { name: "Али", age: 20, grade: "A" },
    { name: "Айша", age: 22, grade: "B" },
    { name: "Марат", age: 19, grade: "C" },
    { name: "Жанна", age: 21, grade: "B" },
    { name: "Қанат", age: 23, grade: "A" }
    ];
  
  students.sort(function(a, b) {
    return a.age - b.age;
  });
  
  let youngestStudent = students[0];
  let oldestStudent = students[students.length - 1];
  
  alert("Ең жас студент: " + youngestStudent.name + ", Жасы: " + youngestStudent.age + ", Бағасы: " + youngestStudent.grade);
  alert("Ең үлкен студент: " + oldestStudent.name + ", Жасы: " + oldestStudent.age + ", Бағасы: " + oldestStudent.grade);
  