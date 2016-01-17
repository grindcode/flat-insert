# Flat Insert
[![Build Status](https://travis-ci.com/grindcode/flat-insert.svg?token=beEYprwjqTf1kNJAmUbX&branch=master)](https://travis-ci.com/grindcode/flat-insert)

Returns a new _Array_ or _String_ after inserting and flatten `value` at `index`.

[![browser support](https://ci.testling.com/grindcode/flat-insert.png)
](https://ci.testling.com/grindcode/flat-insert)

## Get Started
```
npm install flat-insert
```

## API
### insert(input, value, [index])
Returns new `string` or `array` depending on `input` type.
* `input`: Input value to be modified. (**String**|**Array**)
* `value`: Any value to be inserted into `input`. (**mixed**)
  *  If `input` type is _String_, `value` will be turned into _String_.
  *  If `input` and `value` types are _Array_, then `value` will be flatten.
* `index`: Index or position at `input` where insert `value`. (**Number**; default: `0`)

### Usage
```
var insert = require('flat-insert')

insert([1, 2, 3], [1.1, 1.2], 1)
// → '[1, 1.1, 1.2, 2, 3]'

insert([1, 2, 3], 'meh', 1)
// → '[1, 'meh', 2, 3]'

insert('123', 'yo', 2)
// → '12yo3'
```

## License
See the [License](LICENSE) file.
