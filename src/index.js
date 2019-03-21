module.exports = function getZerosCount(number, base) {
  let numberZero = 100000000;
  for (let i = 2; i <= base; i++) {
    if (base % i == 0) {
      let numDivision1 = 0;
      while (base % i == 0) {
        numDivision1++;
        base /= i;
      }
      let numDivision2 = 0;
      let t = number;
      while (t / i > 0) {
        numDivision2 = Math.floor(numDivision2 + t / i) ;
        t /= i;
      }
      numberZero = Math.min(numberZero, (Math.floor(numDivision2 / numDivision1)))
    }
    
  }
  return numberZero;
}
