//array initialize
let fruits = [];
let numbers = new Array();
let allZeroes = new Array(10);

console.log(allZeroes);

let food = ["chicken rice", "duck rice", "orange juice"]
console.log("food[1] =", food[1]);

food[2] = "papaya juice"
console.log(food)

food = ["ramen", "udon", "raw fish"]
console.log(food)

let complex = [1,2,3,['A','B',['Alpha','Beta'],'C']];
console.log(complex[3][2][0])

//Arrays are not primitives but reference values
let b1=["A", "B", "C", "D"];
let b2=b1;
let b3=b1.slice();
b1[0]="a";
console.log(b2);
console.log(b3)

//Shallow copy
let a=[[[1,2,3],4,5],6,7];
let b=a.slice();
a[0][0]="change";
console.log(a);
console.log(b);






