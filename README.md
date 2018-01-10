# Flat Insert
[![Build Status](https://travis-ci.org/grindcode/flat-insert.svg?branch=master)](https://travis-ci.org/grindcode/flat-insert) [![Test Coverage](https://codeclimate.com/github/grindcode/flat-insert/badges/coverage.svg)](https://codeclimate.com/github/grindcode/flat-insert/coverage) [![Dependency Status](https://david-dm.org/grindcode/flat-insert.svg)](https://david-dm.org/grindcode/flat-insert) [![devDependency Status](https://david-dm.org/grindcode/flat-insert/dev-status.svg)](https://david-dm.org/grindcode/flat-insert#info=devDependencies)

Returns a new _Array_ or _String_ after inserting and flatten `value` at `index`.

## Get Started
```shell
npm install flat-insert
```

## API
### insert(input, value[, index])
Returns new modified value depending on `input` type.
* `input`: Input value. (**String**|**Array**)
* `value`: Insert value. (**Mixed**)
  *  If `input` type is _String_, `value` will turn into _String_.
  *  If `input` and `value` types are _Array_, then `value` will be flatten.
* `index`: Index position for insertion. (**Number**; defaults `0`)

### Usage
```javascript
var insert = require('flat-insert')

insert([1, 2, 3], [1.1, 1.2], 1)
// → '[1, 1.1, 1.2, 2, 3]'

insert([1, 2, 3], 'meh', 1)
// → '[1, 'meh', 2, 3]'

insert('123', 'yo', 2)
// → '12yo3'
```

## Benchmark
```shell
node benchmark.js
```
### Results
```shell
insert string into string x 10,419,264 ops/sec ±0.77% (84 runs sampled)
insert 1x array into string x 2,414,477 ops/sec ±0.94% (85 runs sampled)
insert string into 10x array x 1,672,396 ops/sec ±1.11% (83 runs sampled)
insert number into 10x array x 1,611,555 ops/sec ±1.49% (80 runs sampled)
insert object into 10x array x 1,604,038 ops/sec ±2.43% (80 runs sampled)
insert 3x array into 10x array x 1,636,813 ops/sec ±1.30% (78 runs sampled)
```

## License
See the [License](LICENSE) file.
