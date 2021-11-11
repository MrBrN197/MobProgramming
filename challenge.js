/* eslint-disable */

function isOdd(n) {
  return n % 2 !== 0;
}

function fairRations(B) {
  let allEven = B.filter(x => (x % 2) === 0);
  if (allEven.length === B.length) return 0;

  if(B.length === 2) {
    allEven = B.filter(x => (x % 2) === 0);
    if(allEven.length === 1) return 'NO';
  }

  
  let loaves = 0;
  for(let i = 0; i < B.length; i ++) {
    if ( B[i] % 2 !== 0 ){
      B[i] += 1;
      loaves += 1;
      
      if ( isOdd(B[i-1]) ) {
        B[i - 1] += 1;
        loaves += 1;
      } else if ( isOdd(B[i+1]) ) {
        B[i + 1] += 1;
        loaves += 1;
      } else {
        B[i + 1] += 1;
        loaves += 1;
      }
    }
  }
  console.log(B)
  return loaves;
}

console.log(fairRations([2, 3, 4, 5, 6]))
console.log(fairRations([1, 2]))
// [2, 4, 4, 5, 6]