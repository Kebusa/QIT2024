// const car = {
//     brand: "toyota",
//     model: "camry",
//     year: 2020,
//     color: "black",
//     isOk: true,
//     country: "Japan",
// }

// car.isOk = false
// car.owners = 5

// console.log(`${car.brand} ${car.model} koligi ${car.year} jyly jaratyldy ${car.country} elinde jasalyndy`);
// console.log(car);



const calc = {
    plus: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    multipacation: function(a, b){
        return a * b
    },
    debug: function(a, b){
        return a / b
    },
}

function menu(){
    let num1 = +prompt("1")
    let num2 = +prompt("2")
    let test = prompt("minus/plus/multi/deg")
    
    switch (test) {
        case "minus":
            alert(calc.minus(num1, num2))
            break;
        case "plus":
            alert(calc.plus(num1, num2))
            break;
        case "multi":
            alert(calc.multipacation(num1, num2))
            break;
        case "deg":
            alert(calc.debug(num1, num2))
            break;
    }
}


// console.log(calc.plus(3, 5));
// console.log(calc.minus(20, 14));
// console.log(calc.multipacation(3, 5));
// console.log(calc.debug(20, 5));





const product = {
    name: "Стиральная машина",
    rating: 5,
    price: 244990,
    discount: function(percent){
        return this.price - (this.price * percent) / 100
    }

}

// console.log(product);
// console.log(product.discount(20));



const person ={
    name: "Aizhan",
    age:24,
    company: "Kazakhmys",
    greet: function(){
        return `hello, my name is ${this.name} , I am ${this.age} years old, currently working in ${this.company}`
    }
}
// console.log(person.greet())

const restourant = {
    item: ["Pizza", "sushi" , "Pirozhki", "Cola"],
    prinMenu: function(){
        return this.item.join("\n")
    },
    addItem: function(){
        this.item.push("Lazania", "Pasta")
    }
}

// restourant.addItem()
// console.log(restourant.prinMenu());

const restourantMenu = {
    items: [
        {
            name: "Pizza",
            price: 2.5,
            weight: 500,
            ingredients: ["dough", "peperoni", "cheese"]
        },
        {
            name: "Lazania",
            price: 5,
            weight: 1000,
            ingredients: ["dough", "tomato", "cheese"]
        },
        {
            name: "Sushi",
            price: 3,
            weight: 200,
            ingredients: ["rice", "fish", "wassabi"]
        },

    ]
}
restourantMenu.items.push(
    {
        name:"Pasta",
        price: 5,
        weight: 600
    }
)
restourantMenu.items[2].ingredients.push("More rice")

console.log(restourantMenu.items);
