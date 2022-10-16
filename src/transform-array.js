const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const removeNext = '--discard-next'
  const removePrev = '--discard-prev'
  const dbPrev = '--double-prev'
  const dbNext = '--double-next'
  let resultArr = []

  if(!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === dbPrev) {
      if(arr[i - 1] === undefined || arr[i - 2] === removeNext) {
        continue
      } else {
        resultArr.push(arr[i - 1])
      }

    } else if(arr[i] === dbNext) {
      if(arr[i + 1] === undefined) {
        continue
      } else {
        resultArr.push(arr[i + 1])
      }

    } else if(arr[i] === removePrev) {
      if(arr[i - 1] !== undefined && arr[i - 1] === resultArr[resultArr.length - 1]) {
        resultArr.pop()
      } else {
        continue
      }

    } else if(arr[i - 1] === removeNext) {
      continue

    } else if(arr[i] !== removeNext) {
      resultArr.push(arr[i])
    }
  }

  return resultArr
}

module.exports = {
  transform
};

// console.log(module.exports.transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
