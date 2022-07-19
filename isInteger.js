function isInt(x) {
    let str = x.toString();
    console.log(str);
    return !str.includes(".");
}


let str = "hi ahutosh";
let nums = str.split(" ").join("").split("");
let output = nums.reduce(function (acc, curr) {
    if (acc[curr]) {
        acc[curr] += 1;
    }
    else {
        acc[curr] = 1;
    }
    return acc;

}, {})
console.log(output);
// console.log(isInt(2.2));