const crypto = require('crypto'); //rng for private key
const keccak = require('keccak'); //keccak 256
const secp = require("@noble/secp256k1") //ec to get public key

function generateRandomPrivateKey() {
    //Generate 
    return crypto.randomBytes(32).toString('hex');
}

function generateAddress(private) {

    //Derive public key from private key using ECDSA
    step2Start = performance.now();//
    let rawPrivate = secp.getPublicKey(private)
    let pubKey = Buffer.from(rawPrivate).toString('hex').slice(2)
    step2End = performance.now();//
    step2Time += step2End - step2Start;//

    //Keccak-256 is applied
    step3Start = performance.now();//
    ethAddress = keccak('keccak256').update(pubKey, 'hex').digest('hex');
    step3End = performance.now();//    
    step3Time += step3End - step3Start;//

    return ethAddress.slice(-40)
}

count = 0
var t0 = performance.now();
desiredVanity = "00000"; //a b c d e needs to be lower case. 
len = desiredVanity.length;
console.log("You have choosen the vanity:", desiredVanity)
console.log("Expected addresses to be generated for success:", 16**len)
expectedAddrPerSec = 5788
console.log("Speed at", expectedAddrPerSec, "Addresses Per Second is", (16**len)/expectedAddrPerSec, "seconds")
step1Time = 0;
step2Time = 0;
step3Time = 0;
do {
    step1Start = performance.now();
    private = generateRandomPrivateKey();
    step1End = performance.now();    
    step1Time += step1End - step1Start;

    //console.log("This is the randomly generated private key:", private)
    address = generateAddress(private);

    //console.log("This is the address:", "0x" + address)
    sliced = address.slice(0, len);
    count++;
} while (sliced != desiredVanity)

console.log("This is the randomly generated private key:", private);
console.log("This is the address:", "0x" + address);
console.log("Addresses generated:", count);
var t1 = performance.now();
totalTime = (t1 - t0) / 1000;
console.log("Time Elapsed:", totalTime.toFixed(2), "seconds");
console.log("Speed:", (count/totalTime).toFixed(2), "addresses/second");

step1Time = step1Time/1000;
console.log("Random Key Step: ", step1Time.toFixed(2), "seconds, ", (step1Time/totalTime*100).toFixed(2), "\% of Total Time");
step2Time = step2Time/1000;
console.log("ECDSA Step: ", step2Time.toFixed(2), "seconds ", (step2Time/totalTime*100).toFixed(2), "\% of Total Time");
step3Time = step3Time/1000;
console.log("Keccak Step: ", step3Time.toFixed(2), "seconds ", (step3Time/totalTime*100).toFixed(2), "\% of Total Time");
