import superheroesJson = require('./superheroes.json');

declare const superheroes: {
	/**
	Superhero names in alphabetical order.

	@example
	```
	import superheroes = require('superheroes');

	superheroes.all;
	//=> ['3-D Man', 'A-Bomb', …]
	```
	*/
	readonly all: Readonly<typeof superheroesJson>;

	/**
	Random superhero name.

	@example
	```
	import superheroes = require('superheroes');

	superheroes.random();
	//=> 'Spider-Ham'
	```
	*/
	random(): string;
}

export = superheroes;
