//return de first recurring character

//Give an array = [2,5,1,2,3,5,1,2,4]
//return 2

//Give an array = [2,5,1,3]
//undefined


function firstRecurring(arr) {
    let tempMap = {}
    for (let i in arr) {
        if (tempMap[arr[i]]) {
            return arr[i]
        } else {
            tempMap[arr[i]] = true
        }
    }
    return undefined;
}

let array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
let array2 = [2, 5, 1, 3, 5]
 
console.log(firstRecurring(array1));
console.log(firstRecurring(array2));
