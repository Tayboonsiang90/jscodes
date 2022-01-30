//all arrow functions are anonymous

let f = () => {
    return "This is arrow function 1."
}

console.log(f())

console.log((()=>{return "This is arrow function 2."})())

//works only if u have one parameter

let g = x => {
    return "This is arrow function 3."
}

console.log(g())

//if the function body only 1 line, and that line is return, can omit braces

let h = x => "This is arrow function 4."

console.log(h())

let k = (a,b) => "This is arrow function 5."

console.log(k(1,2))

array1 = [-100,3,4,6,7,9,29,0]
console.log(array1.sort((a,b)=>a-b))

