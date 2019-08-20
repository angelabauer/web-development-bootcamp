# supervillains [![Build Status](https://travis-ci.org/sindresorhus/supervillains.svg?branch=master)](https://travis-ci.org/sindresorhus/supervillains)

<img src="https://cloud.githubusercontent.com/assets/170270/7563380/f0af1aee-f7dc-11e4-9b83-92fe18cf6bdd.png" width="182" height="282" align="right">

> Get supervillain names

The list is just a [JSON file](supervillains.json) and can be used anywhere.


## Install

```
$ npm install supervillains
```


## Usage

```js
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

supervillains.random();
//=> 'Mud Pack'
```


## API

### .all

Type: `string[]`

Supervillain names in alphabetical order.

### .random()

Type: `Function`

Random supervillain name.


## Related

- [supervillains-cli](https://github.com/sindresorhus/supervillains-cli) - CLI for this module
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
