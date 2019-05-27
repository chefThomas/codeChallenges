// https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
const findMissing = (arr) => {
    return 55 - arr.reduce((total, el) => total + el, 0);
}
