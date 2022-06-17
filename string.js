let str = "alliswell";

// check if it is string
// let output = String.is

// find length of str
let output = str.length;

// to uppercase
output = str.toUpperCase();

// check if char is present
output = str.includes("l");

// find first index
output = str.indexOf("l");
// find last index 
output = str.lastIndexOf("l");

// find value at index
output = str[3];
output = str.charAt(4);

// check str ends with
output = str.startsWith("t");
output = str.endsWith("ll");

// find substring
output = str.substring(5, 9);   // 9 is exclusive
output = str.slice(5, 9);
output = str.slice(-4);     // last 4 letters
output = str.substr(5, 8);  // 8 in inclusive here

// some other methods
str = "all$is%wel*l";

// relace a word
output = str.replace("is", "are");
// split into array
output = str.split('');

output = str.split(' ');

output = str.split(/[\$%*]/);







console.log(str);
console.log(output);