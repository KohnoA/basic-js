const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = String(n)
  let max = 0

  for(let i = 0; i < strNum.length; i++) {
    let sum = +strNum.replace(strNum[i], '') 
    max = sum > max ? sum : max
  }

  return max
}

module.exports = {
  deleteDigit
};

// console.log(module.exports.deleteDigit(152)) // 52
