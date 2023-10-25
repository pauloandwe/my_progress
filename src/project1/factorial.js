function factorial(n){
    let fib = 1
    for(let i = 2; i <= n; i++) {
        fib = fib * i

    }
    return fib
}
console.log(factorial(2));