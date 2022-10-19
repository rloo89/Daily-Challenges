// Given an array of elements of length N, ranging from 0 to N-1, 
// your task is to write a program that rearranges the elements of the array. 
// All elements may not be present in the array, if the element is not present then there will be -1 present in the array. 
// Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.



class Solution {
  Rearrange(arr, n) {
    //code here
    const objectForInput = {};
    const outputArray = [];
    let isValueThere = false;

    for (let i = 0; i < arr.length; i++) {
      objectForInput[arr[i]] = true;
    }
    for (let i = 0; i < arr.length; i++) {
      if (objectForInput[i] === true) {
        outputArray.push(i);
      } else {
        outputArray.push(-1);
      }
    }
    return outputArray;
  }
}
