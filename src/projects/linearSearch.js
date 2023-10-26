function linearSearch(n){
    arrayNumbers = [2,4,6,8,10]
    for(let i = 0; i < arrayNumbers.length - 1;i++){
        if(n === arrayNumbers[i]){
            return i 
        } 
    }
    return -1
}
console.log(linearSearch(1));