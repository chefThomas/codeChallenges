
// https://projecteuler.net/problem=4
function bigPalProdOf3Dig() {

    function testPalindrome(number) {
        return String(number) === (String(number).split('').reverse().join(''));
    }
    
    let palindromicProducts = new Set();

    for(let i = 999; i >= 100; i--) {
        for(let j = 999; j >= 100; j--) {
            if(testPalindrome(i * j)) {
                palindromicProducts.add(i * j);
            }
        }
    }

    return Math.max(...palindromicProducts);
}