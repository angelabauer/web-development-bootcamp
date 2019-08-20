import supervillainsJson = require('./supervillains.json');

declare const supervillains: {
	/**
	Supervillain names in alphabetical order.

	@example
	```
	const supervillains = require('supervillains');

	supervillains.all;
	//=> ['Abattoir', 'Able Crown', …]
	```
	*/
	readonly all: Readonly<typeof supervillainsJson>;

	/**
	Random supervillain name.

	@example
	```
	const supervillains = require('supervillains');

	supervillains.random();
	//=> 'Mud Pack'
	```
	*/
	random(): string;
};

export = supervillains;
