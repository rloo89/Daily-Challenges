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