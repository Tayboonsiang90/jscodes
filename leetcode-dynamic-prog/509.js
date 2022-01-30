//pure recursive
function fibo(x) {
    if (x == 0) {return 0}
    else if (x == 1) {return 1}
    else {return fibo(x-1) + fibo(x-2)}
}

var fib = function(n) {
    return fibo(n)
};

//with memoization
arrayFib = [0,1]

function fibo(x) {
    if (x == 0) {return 0}
    if (x == 1) {return 1}
    if (arrayFib.length < x) {arrayFib[x-1]=fibo(x-1)} 

    return arrayFib[x-1] + arrayFib[x-2]
}

var fib = function(n) {
    return fibo(n)
};


