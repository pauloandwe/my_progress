function bubbleSort(arr){
    let currentArr = null
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){

            if(arr[i] < arr[j]){
                currentArr = arr[i]
                arr[i] = arr[j]
                arr[j] = currentArr
            }
        }
    }
    return arr
}
console.log(bubbleSort([9,10,10,6,4,-49,2,8,1,3,-10]));