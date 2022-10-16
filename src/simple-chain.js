const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    let count = 0

    for(let key in this) {
      if(typeof this[key] === 'string') count++
    }

    return count
  },

  addLink(value) {
    let int = this.getLength() + 1
    this[int] = String(value)
    console.log(this)
    return this
  },

  removeLink(position) {
    if(position in this) {
      let arr = []

      delete this[position]

      for(let key in this) {
        if(typeof this[key] !== 'function') {
          arr.push(this[key])
          delete this[key]
        }
      }
  
      for(let i = 0; i < arr.length; i++) {
        this[i + 1] = arr[i]
      }

      return this
  
    } else {
      for(let key in this) {
        if(typeof this[key] === 'string') {
          delete this[key]
        }
      }

      throw new Error("You can't remove incorrect link!")
    }
  },

  reverseChain() {
    let arr = []

    for(let key in this) {
      if(typeof this[key] !== 'function') {
        arr.unshift(this[key])
        delete this[key]
      }
    }

    for(let i = 0; i < arr.length; i++) {
      this[i + 1] = arr[i]
    }

    return this
  },

  finishChain() {
    let resultChain = ''

    for(let key in this) {
      if(typeof this[key] === 'string') {
        resultChain += `~~( ${this[key]} )`
        delete this[key]
      }
    }

    return resultChain.slice(2, resultChain.length)
  }
};

module.exports = {
  chainMaker
};