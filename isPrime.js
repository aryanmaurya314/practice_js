// basic solution   TC = O(sqrt(n)) SC = O(1)
function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

console.log(isPrime(71));

// More effective solution with same complexity
function isPrimeBest(n) {
    if (n <= 1)
        return false;

    if (n == 2 || n == 3)
        return true;

    if (n % 2 == 0 || n % 3 == 0)
        return false;

    for (let i = 5; i < Math.sqrt(n); i += 6) {
        if (n % i == 0)
            return false;
    }
    return true;
}

console.log(isPrimeBest(71));