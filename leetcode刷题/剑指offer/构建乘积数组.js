var constructArr = function(a) {
  if(a.length == 0){
      return [];
  }
  var first = a.slice(0), last = a.slice(0); // copy数组a
  var n = a.length;
  for(var i = 1; i < n; i++){
      first[i] *= first[i-1];
      last[n-1-i] *= last[n-i];
  }
  var b = new Array(n);
  b[0] = last[1];
  for(var i = 1; i < n-1; i++){
      b[i] = first[i-1] * last[i+1];
  }
  b[n-1] = first[n-2];
  return b;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
 var constructArr = function(a) {
  if (a.length == 0) return [];
  let first = a.slice(0);
  let last = a.slice(0);
  let n = a.length;
  for (let i = 1; i < n; i++) {
      first[i] *= first[i-1];
      last[n-i-1] *= last[n-i];
  }
  let b = new Array(n);
  b[0] = last[1];
  for (let i = 1; i < n-1; i++) {
      b[i] = first[i-1] * last[i+1];
  }
  b[n-1] = first[n-2];
  return b; 
};

