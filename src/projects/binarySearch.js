function binaryArray(arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log([2,9,6,2,10].sort((a,b) => a - b));
console.log(binaryArray([2,4,6,8,10], 8));
console.log(binaryArray([2,4,6,8,10], 2));