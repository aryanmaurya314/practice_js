function bin2dec(x) {
    let dec = 0;
    let base = 1;
    while (x) {
        let last_digit = x % 10;
        x = Math.floor(x / 10);
        dec += last_digit * base;
        base *= 2;
    }
    return dec;
}
 
console.log(bin2dec(10101001));

