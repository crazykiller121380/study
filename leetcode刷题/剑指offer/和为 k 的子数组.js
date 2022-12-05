/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length ; i++) {
        for (let j = i; j >= 0; j--) {
            sum += nums[j];
            if (sum == k) {
                count ++;
            }
        }
        sum = 0;
    }
    return count;
};

var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function(nums, k) {
//     let count = 0;
//     let sum = 0;
//     for (let i = 0; i < nums.length ; i++) {
//         for (let j = i; j >= 0; j--) {
//             sum += nums[j];
//             if (sum == k) {
//                 count ++;
//             }
//         }
//         sum = 0;
//     }
//     return count;
// };

var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let pre = 0;
    let count = 0;
    for (const x of nums) {
        pre += x;
        if (map.has(pre - k)) {
            count += map.get(pre - k);
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1);
        }
    }
    return count;
};