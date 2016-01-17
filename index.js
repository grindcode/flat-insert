module.exports = function (res, val, i) {
  return res.slice(0, i || 0).concat(val).concat(res.slice(i || 0))
}
