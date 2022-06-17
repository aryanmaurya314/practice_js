let arr = [23, 45, 67, 65, 45, 73];

// check if it is array
let output = Array.isArray(arr);

// find length of array
output = arr.length;

// access element at index
output = arr[3];

// update element at index
// console.log(arr);
arr[3] = 75;
// console.log(arr);

// find index by value
output = arr.indexOf(45);
// find last index of value
output = arr.lastIndexOf(45);


// check if element is present
output = arr.includes(44);

// let arr = [23, 45, 67, 65, 73];
// add or remove element

// add last
arr.push(101);

// add first
arr.unshift(99);

// add at index
arr.splice(2, 0, "mid", "mid2");

// add another array
let arr1 = ["apple", "mango"];
arr = arr.concat(arr1);

// remove
// remove from end
arr.pop();
arr.pop();

// remove at start
arr.shift();

// remove at index
arr.splice(1, 2);   // from 1st index remove two elements

output = arr.slice(1, 4);       // 4 is exclusive



// sort the array
let sortArr = [2, 9, 4, 7, 1, 8];
sortArr.sort();

// reverse the original array 
sortArr.reverse();

console.log(sortArr);


// console.log(arr);


// console.log(output);