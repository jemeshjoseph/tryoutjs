// Binary Search
// Time Complexity: log(N)

// Array should be sorted.

function search(array, searchValue) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (searchValue > array[middle]) {
      min = middle + 1;
    } else if (searchValue < array[middle]) {
      max = middle - 1;
    } else {
      // case where searchValue === array[middle]
      return middle;
    }
  }

  return -1; // If searchValue not found will return -1
}

console.log(search([2, 4, 6, 10, 13, 29, 100, 199], 199));
