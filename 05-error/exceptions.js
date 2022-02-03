
//take one parameter, which is an array
function findAverage(numbers) {
    let total = 0;
    if (numbers.length == 0) {
        throw ('yo ur numbers is length ')
    }

    for (i of numbers) {
        total += i
    }
    return total/numbers.length
}

try{
    findAverage([])
}catch(err){
    console.log(err)

}