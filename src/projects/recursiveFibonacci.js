function recursiveFibonacci(n){
    if(n <= 1){
        return n
    }
   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}


console.log(recursiveFibonacci(7));
