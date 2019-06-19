// https://www.codewars.com/kata/mylanguages/train/javascript
// 7 kyu
// Your task
// You are given an object containing some languages and your
// test results in the given languages. Return the list of languages where your
// test score is at least 60, in descending order of the results.

// Note: There will be no duplicate values.

function myLanguages(results) {
  return Object.keys(results)
    .filter(key => results[key] >= 60)
    .sort((b, a) => {
      return results[a] - results[b];
    });
}
