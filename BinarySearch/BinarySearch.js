//  Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.

// Example 1:

// Input:
// N = 5
// arr[] = {1 2 3 4 5} 
// K = 4
// Output: 3
// Explanation: 4 appears at index 3.



class Solution {
    binarysearch(arr, n, k) {
        // code here
        let middleIndex = 0
        let startIndex = 0;
        let endIndex = arr.length -1;
        
        while(startIndex <= endIndex) {
            middleIndex = Math.floor((endIndex + startIndex) / 2);
            
            if (arr[middleIndex] === k) {
                return middleIndex;
            }
            else if (arr[middleIndex] < k){
                startIndex = middleIndex + 1; 
            } else {
                endIndex = middleIndex - 1;
            }
        } 
        
        return -1;
    }
}