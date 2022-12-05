var strToInt = function(str) {
  str = str.trim(); // 去掉前后空格
  if(str == ""){   
      return 0;  
  }
  var result = 0, signBit = 0;
  var i = 1;
  var INT_MIN = -Math.pow(2,31), INT_MAX = Math.pow(2,31) - 1;
  if(str[0] == "+" || str[0] == "-"){
      signBit = (str[0] == "-") ? 1 : 0;
  }else{
      i = 0;
  }
  while(i < str.length && str[i] >= '0' && str[i] <= '9'){
      result = 10 * result + str[i].charCodeAt() - "0".charCodeAt();
      if(signBit == 1 && -result < INT_MIN){ 
          return INT_MIN;
      }else if(signBit == 0 && result > INT_MAX){
          return INT_MAX;
      }   
      i++;   
  }
  return signBit == 1 ? -result : result;
};

/**
 * @param {string} str
 * @return {number}
 */
 var strToInt = function(str) {
  str = str.trim();
  if (str == "") return 0;
  let res = 0;
  let sign = 0;
  let MIN_INT = -Math.pow(2, 31);
  let MAX_INT = Math.pow(2, 31) - 1;
  let i = 1
  if (str[0] == "+" || str[0] == "-") {
      if (str[0] == "+") sign = 0;
      else sign = 1;
  } else {
      i = 0;
  }
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
      res = res * 10 + str[i].charCodeAt() - "0".charCodeAt();
      if (sign == 1 && -res < MIN_INT) return MIN_INT;
      if (sign == 0 && res > MAX_INT) return MAX_INT;
      i ++;
  }
  return sign == 1 ? -res : res;
};
