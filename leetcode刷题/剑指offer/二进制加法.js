/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let length = Math.max(a.length, b.length);
    a = a.padStart(length, '0')
    b = b.padStart(length, '0')
    let jinwei = 0;
    let flag = false;
    let res = "";
    for (let i = 1; i <= length ; i++) {
        let current = a[length - i] ^ b[length - i];
        jinwei = a[length - i] & b[length - i];
        if (flag) {
            if (current == 0) {
                current = 1;
            } else if (current == 1) {
                current = 0;
                jinwei = 1;
            }
        }
        res = current + res;
        if (jinwei != 0) {
            flag = true;
        } else {
            flag = false;
        }
    }
    if (jinwei != 0) {
        res = jinwei + res;
    }
    return res;
};