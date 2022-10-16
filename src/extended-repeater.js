const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1
  let separator = options.separator === undefined ? '+' : options.separator
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'
  let addition = options.addition
  let result = ''

  for(let i = 0; i < repeatTimes; i++) {
    result = `${result}${str}`

    if(additionRepeatTimes !== undefined && addition !== undefined) {
      for(let j = 0; j < additionRepeatTimes; j++) {
        result = `${result}${addition}`
        result += additionSeparator
      }
      result = result.slice(0, result.length - additionSeparator.length)
    }

    result += separator
  }

  return result.slice(0, result.length - separator.length)
}

module.exports = {
  repeater
};

// console.log(module.exports.repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
// console.log(module.exports.repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
