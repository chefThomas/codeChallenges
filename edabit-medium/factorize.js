// https://edabit.com/challenge/zLYbAPk8NMnwoPhjG
// Create a function that takes a number as its argument and returns an array of all its factors.
function factorize(num){
    const factors = [];
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            factors.push(i);
        }        
    }
    return factors;
}

