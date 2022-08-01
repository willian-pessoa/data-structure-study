// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    let answer = 1;
    if (number === 1 || number === 0){
        return answer;
    } else {
        answer = number * findFactorialRecursive(number-1);
    }
    return answer;
}

function findFactorialIterative(number) {
    //code here
    let answer = 1;
    for (let i = 1; i <= number; i++) {
        answer = answer * i
    }
    return number < 0 ? undefined : answer;
}

console.log(findFactorialIterative(5))
console.log(findFactorialRecursive(5))
