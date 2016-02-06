/**
 * Returns a new Array or String after inserting and flatten value at index.
 * @param {Array|String} input - Input value.
 * @param {Mixed} value - Array, String or Number to be inserted.
 * @param {Number} index - Index position for insertion.
 * @returns {Array|String} New modified value depending on `input` type.
 */
module.exports = function (input, value, index) {
  var isStringInput = typeof input === 'string'
  if (!isStringInput && !Array.isArray(input))
    throw new TypeError('First argument invalid. Expected Array or String.')
  if (typeof index !== 'undefined' && typeof index !== 'number')
    throw new TypeError('Third argument invalid. Expected Number.')
  // Avoid negative index offset
  var beacon = index || 0
  // concat([value]) is faster than concat(value) for String, Number and Object
  var insert = (Array.isArray(value) || isStringInput)? value: [value]
  return input.slice(0, beacon).concat(insert).concat(input.slice(beacon))
}
