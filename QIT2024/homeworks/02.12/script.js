
const book = {
    title: "One piece",
    author: "Eichiro Oda",
    pages: 45,
    isRead: false,
    readBook: function(){
        return `Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз`;
    },
    toogleReadStatus: function(){
        this.isRead = true
        return `Оқу күйі жаңартылды ${this.isRead}`;
    }
}
console.log(book);

console.log(book.readBook());

console.log(book.toogleReadStatus());



