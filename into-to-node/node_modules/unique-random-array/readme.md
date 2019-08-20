# unique-random-array [![Build Status](https://travis-ci.org/sindresorhus/unique-random-array.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-random-array)

> Get consecutively unique elements from an array

Useful for things like slideshows where you don't want to have the same slide twice in a row.


## Install

```
$ npm install unique-random-array
```


## Usage

```js
const uniqueRandomArray = require('unique-random-array');

const random = uniqueRandomArray([1, 2, 3, 4]);

console.log(random(), random(), random(), random());
//=> 4 2 1 4
```


## API

### uniqueRandomArray(array)

Returns a function, that when called, will return a random element that's never the same as the previous.

#### array

Type: `unknown[]`


## Related

- [unique-random](https://github.com/sindresorhus/unique-random) - Generate random numbers that are consecutively unique
- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
