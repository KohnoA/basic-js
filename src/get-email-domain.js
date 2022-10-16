const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log(email)
  for(let i = 0; i < email.length; i++) {
    if(email[i] === '@' && email[i + 1] !== '.') {
      return email.slice(i + 1, email.length)
    }
  }
}

module.exports = {
  getEmailDomain
};

// console.log(module.exports.getEmailDomain('prettyandsimple@example.com')) //'example.com'
// console.log(module.exports.getEmailDomain('very.unusual.@.unusual.com@usual.com')) //'usual.com'
