const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const baseGameDisks = 3
  const baseGameTurns = 7
  let baseDifference =  2 ** (disksNumber - baseGameDisks)
  let turns
  let seconds

  turns = (baseGameTurns * baseDifference) + (baseDifference - 1)
  seconds = Math.floor(turns / (turnsSpeed / 3600))

  return {turns: turns, seconds: seconds}
}

module.exports = {
  calculateHanoi
};

// console.log(module.exports.calculateHanoi(3, 4616))
