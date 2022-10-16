const { NotImplementedError } = require('../extensions/index.js');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('Incorrect arguments!')

    const curMessage = message.toUpperCase().replace(/\s/g, '')
    const curKey = key.toUpperCase().repeat(curMessage.length)

    const result = []

    let letterIndMessage
    let letterIndKey
    let codeLeter

    for(let i = 0, j = 0; i < curMessage.length; i++, j++) {
      if(message[j] === ' ') {
        result.push(' ')
        j++
      }

      letterIndMessage = alphabet.indexOf(curMessage[i])
      if(letterIndMessage === -1) {
        result.push(curMessage[i])
        continue
      }

      letterIndKey = alphabet.indexOf(curKey[i])


      codeLeter = letterIndMessage + letterIndKey
      codeLeter = codeLeter < 26 ?  codeLeter : codeLeter - 26

      result.push(alphabet[codeLeter])
    }

    if(this.isReverse === false) return result.reverse().join('')
    return result.join('')
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('Incorrect arguments!')

    const curMessage = message.toUpperCase().replace(/\s/g, '')
    const curKey = key.toUpperCase().repeat(curMessage.length)

    const result = []

    let letterIndMessage
    let letterIndKey
    let codeLeter

    for(let i = 0, j = 0; i < curMessage.length; i++, j++) {
      if(message[j] === ' ') {
        result.push(' ')
        j++
      }

      letterIndMessage = alphabet.indexOf(curMessage[i])
      if(letterIndMessage === -1) {
        result.push(curMessage[i])
        continue
      }

      letterIndKey = alphabet.indexOf(curKey[i])

      codeLeter = letterIndMessage - letterIndKey
      codeLeter = codeLeter < 0 ?  codeLeter + 26 : codeLeter

      result.push(alphabet[codeLeter])
    }

    if(this.isReverse === false) return result.reverse().join('')
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};

const rev = new VigenereCipheringMachine()

// console.log(rev.encrypt('attack at dawn!', 'alphonse'))
// console.log(rev.encrypt('Same length key', 'Samelengthkey'))//'KAYI WIAMMO UIW'
// console.log(rev.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')) // 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
// console.log(rev.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) //'LEARN FRONTEND DEVELOPMENT :)'

