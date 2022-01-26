const pi = 3.14;
//pi = 3.1417; (ERROR)
console.log(pi);

//traditionally const is used to reflect values that will never change and are important, with semantic sigf

const weight = 65;
const height = 184;
console.log(`${weight/height**2}`);

const primes = [11,17,21]
primes[0] = 13;
console.log(primes);
primes = [15,17,21]; //const