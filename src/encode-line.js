const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = []
  let count = 1
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      count++
    } else {
      arr.push(count + str[i])
      count = 1
    }
  }

  // console.log(arr.join('').replace(/1/g, ''))
  return arr.join('').replace(/1/g, '')
}

module.exports = {
  encodeLine
};

// console.log(module.exports.encodeLine('abbcca'))  //'a2b2ca'
