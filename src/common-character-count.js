const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Obj = {}
  const s2Obj = {}
  let count = 0

  for(let i = 0; i < s1.length; i++) {
    if(s1[i] in s1Obj) {
      s1Obj[s1[i]]++
    } else {
      s1Obj[s1[i]] = 1
    }
  }

  for(let i = 0; i < s2.length; i++) {
    for(let key in s1Obj) {
      if(key === s2[i] && s1Obj[key] !== 0) {
        s1Obj[key]--
        count++
        console.log(s1Obj)
      }
    }
  }

  return count
}

module.exports = {
  getCommonCharacterCount
};

// console.log(module.exports.getCommonCharacterCount('aabcc', 'adcaa')) // 3
// console.log(module.exports.getCommonCharacterCount('zzzz', 'zzzzzzz')) // 4
// console.log(module.exports.getCommonCharacterCount('abca', 'xyzbac')) // 3