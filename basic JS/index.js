//var = global
var price = 20
//define
var fruit ="มะม่วง"

if (price == 20) {
    //update
    var fruit = "ส้มโอ"
    console.log(fruit)
}
console.log(fruit)

//let = not global

let pricel = 20
let fruitl = "มะม่วง"

if (pricel = 20) {
    let fruitl = "ส้มโอ"
    console.log(fruitl)
}
console.log(fruitl)

//const = constant ***object can changed

cosnt total = {name:"Tanawat",last:"Palaboon"}
total.name = "ten"
console.log(total)

//normal function

function sorwor (a, b) {
    return a+b
}

let result = sorwor(1, 2)
console.log(result)

//arrow function

const sorworA=(a,b)=>a+b

let resultA = sorworA(5, 10)
console.log(resultA)

//return object with arrow

const student = name => ({name:name,age:10})

//default parameter

const addUser = (name,last,city) => {
    return name + last + city
}

console.log (addUser("ten","tana","nst")) 

//rest operator


