const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = arr.filter(item => item !== -1).sort((a, b) => a - b)
  let count = 0
  let result = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      result.push(-1)
      count++
    } else {
      result.push(sortArr[i - count])
    }
  }

  // console.log(arr)
  // console.log(sortArr)
  // // console.log(result)
  return result
}

module.exports = {
  sortByHeight
};

// console.log(module.exports.sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
//[-1, 150, 160, 170, -1, -1, 180, 190]

// console.log(module.exports.sortByHeight([4, 2, 9, 11, 2, 16]))
//[2, 2, 4, 9, 11, 16],)
