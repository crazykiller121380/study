/**
 * @param {string} s
 * @return {string}
 */
//  var reverseWords = function(s) {
//   let list = s.trim().split(/\s+/, -1);
//   let res = list.reverse();
//   return res.join(" ");
// };

var reverseWords = function(s) {
    if (s.length == 0) return "";
    let str = s.trim();
    let i = str.length - 1;
    let j = str.length - 1;
    let res = [];
    while (j >= 0) {
        if (str[j] != " ") {
            j --;
        }
        else {
            let word = str.slice(j + 1, i + 1);
            res.push(word);
            while (str[j] == " ") {
                j --;
            }
            i = j;
        }
    }
    let word = str.slice(j + 1, i + 1);
    res.push(word);
    return res.join(" ");
};
