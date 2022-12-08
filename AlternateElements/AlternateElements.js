class Solution {
    print(arr,n){
      //code here
      
      let newArray = [];
      
      for (let i = 0; i < n; i++){
      if (i % 2 === 0) {
          newArray.push(arr[i])
      }
      }
      
      console.log(...newArray)
      
    }
  }

  // module operator is % the remainder


// key take aways
// spread operators = shows everything in one single line
//  console.log it puts a new line character at the end of your console.log including spaces
// 

