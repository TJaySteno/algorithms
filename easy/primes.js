// Question: How would you verify a prime number?

function isPrime (num) {
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i === 0) return 'not prime';
  }
  return 'prime';
}

console.log(isPrime(4)); // not prime
console.log(isPrime(15)); // not prime
console.log(isPrime(17)); // prime
console.log(isPrime(100)); // not prime
console.log(isPrime(541)); // prime
console.log(isPrime(543)); // not prime
