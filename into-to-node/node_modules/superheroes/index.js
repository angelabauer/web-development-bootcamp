'use strict';
const uniqueRandomArray = require('unique-random-array');
const superheroes = require('./superheroes.json');

exports.all = superheroes;
exports.random = uniqueRandomArray(superheroes);
