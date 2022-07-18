const mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [...arr1, ...arr2].sort((a,b)=>a-b)
    return mergedArray
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));