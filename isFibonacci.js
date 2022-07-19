function isPerfectSqr(x) {
    let s = Math.floor(Math.sqrt(x));
    return (s * s == x);
}
function isFib(num) {
    return (isPerfectSqr(5 * num * num + 4) || isPerfectSqr(5 * num * num - 4));
}

console.log(isFib(88));