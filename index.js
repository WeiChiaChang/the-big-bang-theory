'use strict';

var uniqueRandomArray = require('unique-random-array');
var names = require('./the-big-bang-theory.json');

module.exports = uniqueRandomArray(names);
module.exports.names = names;