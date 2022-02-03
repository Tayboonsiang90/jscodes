//import {pi, calculate..} from './export.js'

const prompt = require('prompt-sync')();
const{pi, calculateAreaOfCircle} = require('./export.js')
console.log(pi)

const math = require('./export')
// let r = parseFloat(prompt("Enter Radius: "))
// let area = calculateAreaOfCircle(radius)
console.log(math.calculateAreaOfCircle(15))