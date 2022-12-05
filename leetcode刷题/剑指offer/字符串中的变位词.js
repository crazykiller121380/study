/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let s1_length = s1.length;
    let s2_length = s2.length;
    if (s1_length > s2_length) return false;
    let map = new Map();
    for (let i = 0; i < s1_length; i++) {
        if (map.has(s1[i])) {
            map.set(s1[i], map.get(s1[i]) + 1);
        } else {
            map.set(s1[i], 1);
        }
    }
    let p1 = 0;
    let p2 = s1_length;
    while (p2 <= s2_length) {
        let temp = s2.slice(p1, p2);
        let flag = true;
        let newMap = new Map();
        map.forEach((v, k) => {
            newMap.set(k, v);
        })
        for (let i = 0; i < temp.length; i++) {
            if (newMap.has(temp[i])) {
                let num = newMap.get(temp[i]);
                if (num == 0) {
                    flag = false;
                    break;
                } else {
                    newMap.set(temp[i], num - 1);
                }
            } else {
                flag = false;
                break;
            }
        }
        if (flag) return true;
        p1++;
        p2++;
    }
    return false;
};
