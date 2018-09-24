// Question: How do get nth Fibonacci number?

function findFibonacci (n) {
  let i = 2,
      x = 1,
      y = 1,
      f = 1;
  while (i < n) {
    f = x + y;
    x = y;
    y = f;
    i++;
  };

  return f;
}

console.log('actual - expected');
console.log(findFibonacci(1), '1');
console.log(findFibonacci(2), '1');
console.log(findFibonacci(3), '2');
console.log(findFibonacci(4), '3');
console.log(findFibonacci(5), '5');
console.log(findFibonacci(12), '144');
