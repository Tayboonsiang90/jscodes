//my answer
var countBits1 = function(n) {
    bitArray = [0];
    chainNo = 1;
    count = chainNo;
    for (let i = 1; i <= n; i++) {
        bitArray[i] = bitArray[i-chainNo]+1
        count--
        if (count == 0) {
            chainNo = chainNo * 2
            count = chainNo
        }
    }
    return bitArray;
};

//another answer
var countBits2 = function(n) {
    bitArray = []
    for (i=0; i<=n; i++) {
        bitArray.push(i.toString(2).replace(/0/g,"").length)
    }
    return bitArray;
};

//most optimal answer? (I not sure)
var countBits3 = function(n) {
    bitArray = [0]
    for (i=1; i<=n; i++) {
        bitArray[i] = bitArray[i >> 1] + (i & 1)
    }

    return bitArray
}

//the most amazing answer
var countBits4 = function(n) {
    bitArray = [0]
    for (i=1; i<=n; i++) {
        bitArray[i] = bitArray[i & i-1] + 1
    }

    return bitArray
}

console.log(countBits1(100))
console.log(countBits2(100))
console.log(countBits3(100))
console.log(countBits4(100))