function intertionSort(arr){
    for(let i = 1;i < arr.length; i++){
        let numberToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert
    }
    return arr
}
console.log(intertionSort([9,10,10,6,4,-49,2,8,1,3,-10]));