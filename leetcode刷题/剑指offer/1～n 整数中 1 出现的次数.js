let high = Math.floor(n /10);
let cur = n % 10;
let low = 0;
let digit = 1;
let res = 0;
while(high != 0 || cur != 0) {
    if (cur == 0) {
        res += high * digit;
    } else if (cur == 1) {
        res += high * digit + low + 1;
    } else {
        res += high * digit + digit;
    }
    low += cur * digit;
    cur = high % 10;
    high = Math.floor(high / 10);
    digit *= 10;
}
return res;