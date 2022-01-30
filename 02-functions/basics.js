function f1(){
    console.log("function1")
    return false;
}
function f2(){
    console.log("function2")
    return true;
}
function f3(){
    console.log("function3")
    return false;
}
function f4(){
    console.log("function4")
    return true;
}
function f5(){
    console.log("function5")
    return false;
}

if (f1()||f2()&&f3()&&f4()&&f5()) {
    console.log("Short Circuit")
}

