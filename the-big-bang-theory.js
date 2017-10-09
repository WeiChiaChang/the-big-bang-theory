#!/usr/bin/env node
'use strict';

var meow = require('meow');
var theBigBangTheory = require('./');

var cli = meow([
  'Examples',
  '  $ the-big-bang-theory',
  '  Leonard',
  '',
  '  $ the-big-bang-theory --all',
  '  Leonard',
  '  Sheldon',
  '  Penny',
  '  ...',
  '',
  'Options',
  '  --all  Fetch all the names rather than a random name'
]);

console.log(cli.flags.all ? theBigBangTheory.names.join('\n') : theBigBangTheory());