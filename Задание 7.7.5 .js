function getUniqueSortedNumbers(arr) {
    let uniqueNumbers = [...new Set(arr)];
    return uniqueNumbers.sort((a, b) => a - b);
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers);