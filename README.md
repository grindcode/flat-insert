# Flat Insert
[![Build Status](https://travis-ci.org/grindcode/flat-insert.svg?branch=master)](https://travis-ci.org/grindcode/flat-insert) [![Dependency Status](https://david-dm.org/grindcode/flat-insert.svg)](https://david-dm.org/grindcode/flat-insert) [![devDependency Status](https://david-dm.org/grindcode/flat-insert/dev-status.svg)](https://david-dm.org/grindcode/flat-insert#info=devDependencies)

Returns a new _Array_ or _String_ after inserting and flatten `value` at `index`.

## Get Started
```shell
npm install flat-insert
```

## API
### insert(input, value[, index])
Returns new modified value depending on `input` type.
* `input`: Input value. (**String**|**Array**)
* `value`: Value to be inserted. (**Mixed**)
  *  If `input` type is _String_, `value` will be turned into _String_.
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
```javascript
insert(string, 'foo', 3)
// → 11,097,858 ops/sec ±0.70% (84 runs sampled)
insert(array, 'foo', 3)
// → 1,015,198 ops/sec ±0.97% (86 runs sampled)
insert(array, ['foo', undefined, true], 3)
// → 1,839,994 ops/sec ±0.87% (83 runs sampled)
```

## License
See the [License](LICENSE) file.
