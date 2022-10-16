const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if(names === undefined) return []

  let arr = []
  let count = 0

  for(let item of names) {
    if(arr.includes(item)) {
      for(let el of arr) {
        if(item === el || item + '(1)' === el) {
          count++
        }
      }

      arr.push(item + '(' + count + ')')
      count = 0

    } else {
      arr.push(item)
    }
  }

  // console.log(arr)
  return arr
}

module.exports = {
  renameFiles
};

// console.log(module.exports.renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])) //['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
