const ethers = require("ethers");

count = 0;
address = "";
var t0 = performance.now();
desiredVanity = "00000";
len = desiredVanity.length;

do {
  //generate a random wallet
  wallet1 = ethers.Wallet.createRandom();
  sliced = wallet1.address.slice(2, 2 + len);
  count++;
} while (sliced != desiredVanity);

console.log("This is the randomly generated private key:",   wallet1.privateKey);
console.log("This is the address: ", wallet1.address);
console.log("Addresses generated:", count);
var t1 = performance.now();
console.log("Time Elapsed:", (t1 - t0) / 1000, "seconds");
console.log("Speed:", count / ((t1 - t0) / 1000), "addresses/second");
