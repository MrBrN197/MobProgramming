const isOdd = (n) => n % 2 !== 0

const numberOfOdd = (arr) => arr.filter( x => isOdd(x)).length

function fairRations(B) {
  if (numberOfOdd(B) === 0) return 0;
  if (isOdd(numberOfOdd(B))) return 'NO';

  let loaves = 0;
  for(let i = 0; i < B.length - 1; i++) {
    if ( isOdd(B[i]) ){
      B[i] += 1;
      B[i + 1] += 1;
      loaves += 2;
    }
  }
  return loaves;
}
