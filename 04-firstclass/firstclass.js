function compareFunction(a,b) {
    if (b>a){
        return -0.01;
    } else if(b===a){
        return 0;
    } else {
        return 1;
    }
}
function compareFunction1(a,b) {
    return b-a;
}

array1 = [-100,3,4,6,7,9,29,0]

//passing in functions
console.log(array1.sort(compareFunction))
console.log(array1.sort())
console.log(array1.sort(compareFunction1))
console.log(array1)

//anonymous function
console.log((function(x){return x})('as'))

//function calls are hoisted
//this will not be hoisted
console.log(g())
try{
console.log(f())
} catch{console.log("f didnt return")}

function g() {
    return "This is function g"
}

let f = function(){
    return "This is function f"
}