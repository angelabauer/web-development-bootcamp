'use strict';
const uniqueRandomArray = require('unique-random-array');
const supervillains = require('./supervillains.json');

exports.all = supervillains;
exports.random = uniqueRandomArray(supervillains);
