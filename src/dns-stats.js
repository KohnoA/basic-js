const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {}

  if(domains === undefined) return obj

  const arr = domains.map(item => item.split('.').reverse())

  for(let item of arr) {
    let objItem = ''

    item.forEach(el => {
      objItem = objItem + '.' + el

      if(objItem in obj) {
        obj[objItem]++ 
      } else {
        obj[objItem] = 1
      }
    });
  }
  
  return obj
}

module.exports = {
  getDNSStats
};

// console.log(module.exports.getDNSStats(['epam.com', 'info.epam.com'])) //{ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
