// TC = O(sqrt(n))
function find_sqrt(n) {
    if (n == 0 || n == 1)
        return n;
    let i = 1, res = 1;
    while (res <= n) {
        i++;
        res = i * i;
    }
    return i - 1;
}
console.log(find_sqrt(4));
// TC = O(logn)
function binary_sqrt(n) {
    if (n == 0 || n == 1)
        return n;
    let start = 1;
    let end = n;
    let ans, mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid == n)
            return mid;

        if (mid * mid < n) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

console.log(binary_sqrt(4));