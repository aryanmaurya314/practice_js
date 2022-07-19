function gcd(a, b) {
    // if (b == 0)
    //     return a;
    // return gcd(b, a % b);

    // * iterative solution
    if (a == 0)
        return b;
    if (b == 0)
        return a;
    while (a != b) {
        if (a > b)
            a -= b;
        else
            b -= a;
    }
    return a;
}

console.log(gcd(16, 4));

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(16, 4));