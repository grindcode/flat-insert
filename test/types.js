var test = require('tape')
var inject = require('../index.js')

test('invalid first argument', function (t) {
  t.plan(1)
  t.throws(function () {
    var result = inject({ is: 'object' }, 'try', 1)
  })
})

test('invalid third argument', function (t) {
  t.plan(1)
  t.throws(function () {
    var result = inject('validstring', 'try', 'index')
  })
})
