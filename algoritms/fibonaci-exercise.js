// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    let first = 0;
    let second = 1;

    if (n === 0) {
        return first;
    } else if (n === 1) {
        return second
    } else {
        for (let i = 1; i < n; i++) {
            const temp = first;
            first = second;
            second = second + temp;
        }
    }
    return second
}
console.log("INTERATIVE");
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(10));

function fibonacciRecursive(n) {
    //code here;
    let first = 0;
    let second = 1;
    if (n === 0) {
        return first
    } else if (n === 1){
        return second
    } else {
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
    }
}

console.log("RECURSIVE");
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(10));