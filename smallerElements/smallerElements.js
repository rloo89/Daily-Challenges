// Count of smaller elements

// Given an sorted array A of size N.
// Find number of elements which are less than or equal to given element X.

function countOfElements(arr, n, x) {
  
  let countOfElem = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x ) {
        countOfElem += 1 
    }

  }
  return countOfElem;
}

console.log(countOfElements([1, 2, 4, 5, 8, 10],6,8));


// console.log(seriesSum(5));

//  patter of count add +1 in this cae