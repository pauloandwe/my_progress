        function recursiveFibonacci(n){
            const fib = [0,1]
            for(let i = 2; i< n; i++){
                fib[i] = fib[i-1] + fib[i-2]
            }
            return fib
        }

        console.log(recursiveFibonacci(2));
        console.log(recursiveFibonacci(4));
        console.log(recursiveFibonacci(6));
    