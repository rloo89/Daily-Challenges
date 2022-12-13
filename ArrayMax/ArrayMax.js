// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8


function arrayMaxConsecutiveSum(inputArray, k) {

    // remember to set variables outside of the LOOP
    let maxSum = 0


        // its a way to loop and iterate through the array

    for (let i = 0; i < inputArray.length - k + 1; i++){
        let tempSum = 0
        // double looping to compare the first element with the second
        for (let j = i; j < k + i; j++){
            tempSum += inputArray[j]
            //  inputArray[i] + inputArray[i + 1]
        }

        if (maxSum < tempSum) {
            maxSum = tempSum
        }
    }
    return maxSum 
}

console.log(arrayMaxConsecutiveSum([2,3,5,1,6],3));


// output = a single integer