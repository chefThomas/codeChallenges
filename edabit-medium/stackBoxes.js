
// https://edabit.com/challenge/QifJBFwg32GNdiWQa
// stacked box models increasing in number with model number. Find number boxes at model n. 

function stackBoxes(n){
    //  can see from figure that solution is fib(n) + fib(n - 1) (which is === n**2...hmmm)
  
    function fib(n){
      if(n === 0) return 0;
      return n + fib(n - 1)
    }
   
    return fib(n) + fib(n - 1)
  
  }