// Given an array Arr of size N, swap 
// the Kth element from beginning with Kth element from end.

function swapKth(arr,n,k){
    const kthFromBeginning = arr[k - 1];

    arr[k -1] = arr [n-k];
    arr[n - k] = kthFromBeginning;

    return arr
}

console.log(swapKth(8,8,2));
