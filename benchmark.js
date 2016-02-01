var Benchmark = require('benchmark')
var Suite = new Benchmark.Suite
var insert = require('./index.js')

var testString = 'abcdefg'
var testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

Suite
  .add('string insert', function () {
    insert(testString, 'foo', 3)
  })
  .add('array insert string', function () {
    insert(testArray, 'foo', 3)
  })
  .add('array insert array', function () {
    insert(testArray, ['foo', undefined, true], 3)
  })
  .on('cycle', function (e) {
    console.log(String(e.target))
  })
  .run({ async: true })
