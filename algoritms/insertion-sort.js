const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i <= length; i++) {
        const current = array[i];
        let counterIndex = i - 1;

        while (current < array[counterIndex]) {
            let temp = array[counterIndex];
            array[counterIndex] = current;
            array[counterIndex + 1] = temp;
            counterIndex--
        }
    }

    return array
}

console.log(insertionSort(numbers));