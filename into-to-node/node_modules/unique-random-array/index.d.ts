/**
Get consecutively unique elements from an array.

@returns A function, that when called, will return a random element that is never the same as the previous.

@example
```
import uniqueRandomArray = require('unique-random-array');

const random = uniqueRandomArray([1, 2, 3, 4]);

console.log(random(), random(), random(), random());
//=> 4 2 1 4
```
*/
declare function uniqueRandomArray<ValueType>(
	array: readonly ValueType[]
): () => ValueType;

export = uniqueRandomArray;
