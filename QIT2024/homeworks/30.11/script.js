// task 1 

let numbers = [2, 4, 6, 8];
let add = numbers.map(kob => kob * 3)

console.log(add);



// task 2 

let number = [3, 7, 1, 9, 4]
let five = number.filter(n => n > 5)

console.log(five);



// task 1: filter және map

let num = [40, 30, 20, 200, 350, 500, 1000]

let fifty = num.filter(f => f < 50)
let two = fifty.map(t => t * 2)

console.log(`50 ден кіші сандар ${fifty}`);
console.log(`ғқ ден кіші сандарды 2 ге көбейту ${two}`);



// task 2: push және forEach

let arr = [12, 45, 78]
let result = 0
arr.push(96, 62)

arr.forEach(element => {
        result += element;

    return result
});

console.log(arr);
console.log(result);



// task 3: map және filter

let massive = [10, 20, 22, 40, 46, 85]

let three = massive.map(th => th * 3)
let hund = three.filter(hu => hu >= 100)

console.log(`Массивтің 3 ке көбейтіндісі ${three}`);
console.log(`Массивтің 100 ден үлкен сандар ${hund}`);
