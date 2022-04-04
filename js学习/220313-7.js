let arr = [3, 2, 4, 1, 5, 6];
function between(a, b) {
  return function(v) {
    return v > a && v < b;
  }; 
}
console.log(arr.filter(between(2, 6)));
