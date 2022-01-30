a = 999

function binarize(a) {
    return Number(a.toString(2))
}
console.log(binarize(a))
console.log(binarize(a >> 2))

