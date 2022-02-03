let fruits = {
    "a" : "applesstring",
    1: 10,
    distFunction: function() {
        console.log("kekw")
        return this.a + "lolwut"
    },
    lol : 12,
    distlol: function() {
        lol = 10
        return this.lol * lol
    }
}

console.log(fruits['a'])
console.log(fruits[1])
console.log(fruits.distFunction())
console.log(fruits.lol)
console.log(fruits.distlol())

let employeeRecord = {
    firstName: "Tan"
}
employeeRecord.lastName = "Ah Kow"
console.log(employeeRecord.lastName)
employeeRecord.getName = function() {return this.firstName+" "+this.lastName}
console.log(employeeRecord.getName())
console.log(employeeRecord)

let fruitscopy = fruits
fruitscopy.a = "APPLEASTRING"
console.log(fruitscopy.a)

console.log('a' in fruits)
console.log('d' in fruits)
console.log(fruits.hasOwnProperty('distFunction'))