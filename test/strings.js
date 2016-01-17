var test = require('tape')
var inject = require('../index.js')

test('insert undefined into string', function (t) {
  t.plan(1)
  var result = inject('123', undefined, 1)
  t.equal(result, '1undefined23')
})

test('insert a Number into string', function (t) {
  t.plan(1)
  var result = inject('123', 4, 1)
  t.equal(result, '1423')
})

test('insert a String into string', function (t) {
  t.plan(1)
  var result = inject('123', 'yo', 2)
  t.equal(result, '12yo3')
})

test('insert an Array of mixed values into string', function (t) {
  t.plan(1)
  var result = inject('123', [4, true, 'yo'], 1)
  t.equal(result, '14,true,yo23')
})
