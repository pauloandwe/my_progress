function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
   return [...sortedArr ,...leftArr, ...rightArr]

    
}

console.log(mergeSort([9,10,5,10,6,4,-49,5,2,8,1,3,-100]));
