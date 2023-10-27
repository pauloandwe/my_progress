function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let rigth = []
    for(let i = 0;i < arr.length - 1; i++){

        if(arr[i] < pivot ){
            left.push(arr[i]) 
        } else {
            rigth.push(arr[i]) 
        }
    }

    return [...quickSort(left), pivot, ...quickSort(rigth)]
}

console.log(quickSort([9,10,5,10,6,4,-49,5,2,8,1,3,-100]));
