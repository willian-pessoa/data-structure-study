const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
const array3 = ["m", "n", "x"];

const checkTwoCommonItems = (arr1, arr2) => {
    for (let i in arr1) {
        for (let j in arr2) {
            if (arr1[i] === arr2[j]) return true;
        }
    }
    return false
}

console.log(checkTwoCommonItems(array1, array2))
console.log(checkTwoCommonItems(array1, array3))

const checkTwoCommonItems2 = (arr1, arr2) => {

    let itemsObj = {}

    for (let i in arr1){
        itemsObj[arr1[i]] = true;
    }

    for (let i in arr2){
       if(itemsObj.hasOwnProperty(arr2[i])) return true;
    }

    return false
}

console.log(checkTwoCommonItems2(array1, array2))
console.log(checkTwoCommonItems2(array1, array3))