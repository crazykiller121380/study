/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  return s.trim().match(/^(\+|\-)?([0-9]+(\.[0-9]*)?|\.[0-9]+)((e|E)(\+|\-)?[0-9]+)?$/g) ? true : false
};

/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function (s) {
  return /^[\+\-]?((\d+(\.\d*)?)|\.\d+)([eE][-+]?\d+)?$/.test(s.trim());
};

let re = new RegExp("/^[-+]?(\d+(\.\d*)?)([eE][-+]?\d+)?$/");
