function fibonacci(n){
    if(n <= 1){
        console.log(n)
        return n
    }
   return fibonacci(n-1) + fibonacci(n-2)
}


console.log(fibonacci(7));
