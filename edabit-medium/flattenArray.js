// https://edabit.com/challenge/MXChCnzCSBobgY4Ex
// Fix provided code so that it flattens subarrays contained in array

// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.push(...arr[i]);
    }
    return arr2; 
  }