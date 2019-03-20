module.exports = function getZerosCount(number, base) {
  
  let numberZero = 0, n = 0;
  for (let i = 0; ; i++) {
    if (Math.pow(5, i) > number) {
      n = i - 1;
      break;
    }
  }
  for (let index = 1; index <= n; index++) {
    numberZero += Math.floor(number / Math.pow(5, index));
  }
  return numberZero;
}
