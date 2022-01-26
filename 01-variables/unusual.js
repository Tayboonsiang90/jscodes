let something;
console.log("something= ", something) //(undefined)

let s = something + 10;
console.log("s =", s) //(undefined plus number = NaN)

let v = s + 20;
console.log("v =", v)//(NaN plus number = NaN)

let i = 22/0;
console.log(`i = ${i}`);//(Divided by 0 is infinity)

let meaningOfLife = null;
console.log(`meaningOfLife = ${meaningOfLife == null}`)//Null





