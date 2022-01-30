console.log("A\nB")
console.log("lol kek \"\'\"\'")
console.log("social\tdistancing")
console.log("1\\2\\3\\4\\5\\6\\7\\\\8\\9\\10\\")
console.log("\\\\\\\\\\\\\\\\") //Make sure its even number

//backtick ` template literal

console.log(`Dear mdm, 

I am an ass.

regards, 
Boon Siang`)

//Form letter

let person = "ser"
let myself = "boon"
console.log(`Dear ${person},

I am practicing form letter.

Regards, 
${myself + myself}
`)

let immutable = "immutable"
immutable[4] = "kek"
console.log(immutable)
immutable = "kek"
console.log(immutable) //can't change via index

//can slice shit
//can find length
console.log("kekw".length)
console.log("0123456789".slice(3))
//first number ios inclusive, second number is exclusive
console.log("0123456789".slice(3,4))
console.log("0123456789".slice(3,5))

console.log("fjdshfjeDSFSAFSEF".toLowerCase())
console.log("fjdshfjeDSFSAFSEF".toUpperCase())
console.log("!"+"      fjdshfjeDSFSAFSEF      "+"!")
console.log("!"+"      fjdshfjeDSFSAFSEF      ".trim()+"!")
console.log("fjdshfjeDSFSAFSEF".includes("eD"))
console.log("fjdshfjeDSFSAFSEF".indexOf("eD"))

//break into an array
console.log("1,2,3,4,5,6,7,8,9".split(","))
