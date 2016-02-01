module.exports = function (res, val, i) {
  if (typeof res !== 'string' && !Array.isArray(res))
    throw new TypeError('First argument invalid. Expected Array or String.')
  if (typeof i !== 'undefined' && typeof i !== 'number')
    throw new TypeError('Third argument invalid. Expected Number.')
  return res.slice(0, i || 0).concat(val).concat(res.slice(i || 0))
}
