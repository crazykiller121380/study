// const i = 8;
// // console.log(i%10)
// let add1 = Math.floor(i/100)+Math.floor(i/10)%10+i%10;
// console.log(add1)

// let x = 23
// console.log(x%10+Math.floor(x/10))

function sum(n) {
  let res = 0;
  while (n) {
      res += n % 10;
      n = Math.floor(n / 10)
  }
  return res;
}

console.log(sum(2341));