var test = require('tape')
var inject = require('../index.js')

test('index is undefined', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'yo', undefined)
  t.deepEqual(result, ['yo', 1, 2, 3])
})

test('insert at offset index', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'last', 10)
  t.deepEqual(result, [1, 2, 3, 'last'])
})

test('insert at index == 0', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'first', 0)
  t.deepEqual(result, ['first', 1, 2, 3])
})

test('insert at negative index', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'before last', -1)
  t.deepEqual(result, [1, 2, 'before last', 3])
})

test('insert at negative offset index', function (t) {
  t.plan(1)
  var result = inject([1, 2, 3], 'first', -10)
  t.deepEqual(result, ['first', 1, 2, 3])
})
