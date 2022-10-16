const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false
  }

  let result = ''
  let membersNotSpaceAndSort = members.map(item => {
    if(typeof item === 'string') {
      return item.trim().toUpperCase()
      item.trim().toUpperCase()[0]
    }
  }).sort()

  membersNotSpaceAndSort.forEach(item => {
    if(typeof item === 'string') {
      result += item[0]
    }
  })

  return result
}

module.exports = {
  createDreamTeam
};

// console.log(module.exports.createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]))
