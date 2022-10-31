// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
//  This is useful for looping through finding longest, shortest.

function allLongestStrings(inputArray){
    let longestLength = 0
// in the middle of condition, it will loop the length of the array that has been inputted

// this loop is used to calculate the longest length
    for( let i = 0 ; i < inputArray.length ; i++) {
        if(longestLength < inputArray[i].length) {
            longestLength = inputArray[i].length
        }
    }

    let outputArray = [];

    //  this loop is used to filter out the shorter length of strings
    for (let i = 0 ; i <inputArray.length ; i++){
        if ( longestLength === inputArray[i].length){
            outputArray.push(inputArray[i])
        }
    }
    
    return outputArray
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));