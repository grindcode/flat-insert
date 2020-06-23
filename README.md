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
insert string into string x 49,334,288 ops/sec ±0.51% (87 runs sampled)
insert 1x array into string x 2,726,256 ops/sec ±0.24% (90 runs sampled)
insert string into 10x array x 1,926,946 ops/sec ±0.69% (84 runs sampled)
insert number into 10x array x 1,904,262 ops/sec ±2.90% (83 runs sampled)
insert object into 10x array x 1,876,367 ops/sec ±3.23% (86 runs sampled)
insert 3x array into 10x array x 1,792,153 ops/sec ±4.13% (81 runs sampled)
```

## License
See the [License](LICENSE) file.
