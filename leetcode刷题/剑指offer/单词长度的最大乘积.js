/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
  let flag=[];
  for(let i=0; i< words.length; i++){
      flag[i]=0;
      for(let j = 0; j< words[i].length; j++){
          flag[i]|= (1<<(words[i][j].charCodeAt()-'a'.charCodeAt()));
      }
  }
  let maxCount=0;
  for(let i=0; i<words.length; i++){
      for(let j=i+1; j<words.length; j++){
          if((flag[i]&flag[j])==0 && words[i].length*words[j].length>maxCount){
              maxCount = words[i].length*words[j].length;
          }
      }
  }
  return maxCount;
};


/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
  let arr = [];
  const num_a = 'a'.charCodeAt();
  for (let i = 0; i < words.length; i++) {
      arr[i] = 0;
      for (let j = 0; j < words[i].length; j++) {
          arr[i] |= (1 << (words[i][j].charCodeAt() - num_a));
      }
  }
  let res = 0;
  for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j < words.length; j++) {
          if ((arr[i] & arr[j]) == 0 && words[i].length * words[j].length > res) { 
              res = words[i].length * words[j].length;
          }
      }
  }
  return res;
};
