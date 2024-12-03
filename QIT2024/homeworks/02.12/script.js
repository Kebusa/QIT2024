
const book = {
    title: "One piece",
    author: "Eichiro Oda",
    pages: 45,
    isRead: false,
    readBook: function(){
        return `Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз`;
    },
    toogleReadStatus: function(){
        this.isRead = !this.isRead
        return this.isRead ;
    }
}
console.log(book);

console.log(book.readBook());

console.log(book.toogleReadStatus ? `Сіз оқығансыз ` : `Сіз оқымағансыз ` );  //  ?  true;    :  false;



