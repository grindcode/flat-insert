var Benchmark = require('benchmark')
var Suite = new Benchmark.Suite()
var insert = require('./index.js')

var testString = 'abcdefg'
var testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

Suite
  .add('insert string into string', function () {
    insert(testString, 'foo', 3)
  })
  .add('insert 1x array into string', function () {
    insert(testString, ['foo', undefined, true], 3)
  })
  .add('insert string into 10x array', function () {
    insert(testArray, 'foo', 3)
  })
  .add('insert number into 10x array', function () {
    insert(testArray, 5, 3)
  })
  .add('insert object into 10x array', function () {
    insert(testArray, { foo: 'bar' }, 3)
  })
  .add('insert 3x array into 10x array', function () {
    insert(testArray, ['foo', undefined, true], 3)
  })
  .on('cycle', function (e) {
    console.log(String(e.target))
  })
  .run({ async: true })
