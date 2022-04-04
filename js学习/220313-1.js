function factorial(num) {
  return num == 1 ? 1 : num * factorial(--num);
}

console.log(factorial(3));

function sum(...args) {
  return args.length == 0 ? 0 : args.pop() + sum(...args);
}

console.log(sum(5,6,7,8,9,10));