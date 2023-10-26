function recursiveBinarySearch(arr, n) {
    return search(arr, n, 0, arr.length - 1)
}

function search(arr, n, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return - 1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/ 2)
    if (n === arr[middleIndex]){
        return middleIndex
    }
    if( n < arr[middleIndex]){
        return search(arr, n, leftIndex, middleIndex - 1)
    } else {
        return search(arr ,n, middleIndex + 1, rightIndex)
    }
}


console.log(recursiveBinarySearch([2,4,6,8,10], 10));
console.log(recursiveBinarySearch([2,4,6,8,10], 4));