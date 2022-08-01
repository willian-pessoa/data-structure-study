const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i in array){
    let least = array[i]
    let indexOfLeast = i;
   // console.log("first least:" + least)
    for (let j = i; j <= array.length; j++){
        if (least > array[j]){
            least = array[j]
            indexOfLeast = j
           // console.log("change least to: " + least + " have index of: " + indexOfLeast)
        }
    }
   // console.log(array)
    array[indexOfLeast] = array[i];
    array[i] = least;
  //  console.log(array)
  }
  return array
}

console.log(selectionSort(numbers));