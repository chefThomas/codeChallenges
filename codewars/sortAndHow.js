// https://www.codewars.com/kata/sorted-yes-no-how/train/javascript
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

function isSortedAndHow(array) {
  let ascend = true;
  let descend = true;

  const sortAscend = [...array].sort((a, b) => a - b);
  const sortDescend = [...array].sort((a, b) => b - a);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== sortAscend[i]) {
      ascend = false;
    }

    if (array[i] !== sortDescend[i]) {
      descend = false;
    }
  }

  return ascend ? "yes, ascending" : descend ? "yes, descending" : "no";
}
