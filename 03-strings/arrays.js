kek = ['1','2','3','4','5','6','7','8','9']
//arrays are not immutable
//kek[4]=6
// console.log(kek)
// console.log(kek.push(7))
// console.log(kek)
// console.log(kek.pop())

kek.splice(3,1)
console.log(kek)


let names = ['1','2','3','4','5','6']
for (let i = 0; i < names.length; i++){
    console.log(names[i], names[i].length)
}

for (let n of names) {
    console.log(n, n.length)
}





