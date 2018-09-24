// Question: How could you find all prime factors of a number?

// First attempt
function isPrime (num) {
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimeFactors (num) {
  const primeFactors = [];
  for (let i = 2; i < (num / 2); i++) {
    if (num % i === 0) {
      const factor2 = num / i;
      if (factor2 < i) break;
      if (isPrime(i)) primeFactors.push(i);
      if (isPrime(factor2)) primeFactors.push(factor2);
    }
  }
  primeFactors.sort((a,b) => a > b);
  return primeFactors;
}

console.log(findPrimeFactors(12));
console.log(findPrimeFactors(6));
console.log(findPrimeFactors(52));
console.log(findPrimeFactors(32));


// Improvements
  // Test factors against other factors?
  // Make more concise?


// http://www.thatjsdude.com/interview/js1.html
