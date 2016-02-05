/**
 * Returns a new Array or String after inserting and flatten value at index.
 * @param {Array|String} input - Input value.
 * @param {Mixed} value - Array, String or Number to be inserted.
 * @param {Number} index - Index position for insertion.
 * @returns {Array|String} New modified value depending on `input` type.
 */
module.exports = function (input, value, index) {
  if (typeof input !== 'string' && !Array.isArray(input))
    throw new TypeError('First argument invalid. Expected Array or String.')
  if (typeof index !== 'undefined' && typeof index !== 'number')
    throw new TypeError('Third argument invalid. Expected Number.')
  return input.slice(0, index || 0).concat(value).concat(input.slice(index || 0))
}
