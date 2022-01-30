function replaceNthCharacter(string1, index1, char1) {
    return string1.slice(0,index1)+char1+string1.slice(index1+1)
}

console.log(replaceNthCharacter("lolol",1,"O"))
console.log(Math.floor((Math.random()*6))+1)