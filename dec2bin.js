// normal method
function dTob(n) {
    let bin = new Array(32);
    let i = 0;
    while (n > 0) {
        bin[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
    bin.reverse();
    let resBin = bin.join("");
    return resBin;
}
console.log(dTob(9));
// bitwise method TC = O(1)
function d2b(n) {
    let bin = "";
    for (let i = 31; i >= 0; i--) {
        let k = n >> i;
        if ((k & 1) > 0) {
            bin += "1";
        }
        else {
            bin += "0";
        }
    }
    return bin;
}
console.log(d2b(9));