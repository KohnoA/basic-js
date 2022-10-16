const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let int
  
  const sum = (num) => {
    let arrP = num.toString().split('')
    return arrP.reduce((acc, item) => {
      return +acc + +item
    }, 0)
  }

  int = sum(n)
  int = int > 9 ? sum(int) : int
  
  return int
}

module.exports = {
  getSumOfDigits
};

// console.log(module.exports.getSumOfDigits(99)) //9
