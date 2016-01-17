var test = require('tape')
var inject = require('../index.js')

test('insert undefined into array', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], undefined, 1)
  t.deepEqual(result, [1, undefined, 2, 3])
})

test('insert a Number into array', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 4, 1)
  t.deepEqual(result, [1, 4, 2, 3])
})

test('insert a String into array', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'yo', 2)
  t.deepEqual(result, [1, 2, 'yo', 3])
})

test('insert an Array of mixed values into array', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], [4, true, 'yo'], 1)
  t.deepEqual(result, [1, 4, true, 'yo', 2, 3])
})

test('insert duplicated values into array', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], [1, 2, 3], 1)
  t.deepEqual(result, [1, 1, 2, 3, 2, 3])
})
