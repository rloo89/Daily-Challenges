// Find the Median


// Given an array arr[] of N integers, calculate the median
 

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const medianIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        return arr[medianIndex];
    } else {
        const averageOfTwoMedians = (arr[medianIndex - 1] + arr[medianIndex]) / 2;
        return Math.floor(averageOfTwoMedians);
    }
}

console.log(findMedian([90, 100, 78, 79, 67]));
console.log(findMedian([56, 67, 30, 79]));


// First step
// Create a variable that stores a sorted array
// Check Array Length and do module operator

// Loop the sorted array and add two middle elements and divide it by two.
// assign it to median
// console log it


// How to determine with module operator if the array is odd or even = divide it by 2
// array length % 2

//  how to sort an array length
// use arr.sort(a,b) => a - b);

//  0 is falsy
//  everything else is true