function sortArray(array) {
  return array.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  });
}

console.log(sortArray([2, 4, 1, 3, 7, 9]));

console.log(sortArray([2, 4, 1, 3, 7, 9, 3]));
