## the-big-bang-theory [![Build Status](https://travis-ci.org/WeiChiaChang/the-big-bang-theory.svg?branch=master)](https://travis-ci.org/WeiChiaChang/the-big-bang-theory)
> Fetch random name of character in The Big Bang Theory

![the-big-bang-theory](https://i.imgur.com/YQnxSz5.jpg)

Photo credit : [The Big Bang Theory Wiki](http://bigbangtheory.wikia.com/wiki/Season_1)

This project highly learned from [sindresorhus/superb](https://github.com/sindresorhus/superb).

The name lists are just JSON files and can be used wherever you want.

## Installation
```shell
$ npm i --save the-big-bang-theory
```

## Usage
```shell
var theBigBangTheory = require('the-big-bang-theory');  // Conventional but classic way
import theBigBangTheory from 'the-big-bang-theory';     // Or much more modern ES6  way

theBigBangTheory();
// Leonard

theBigBangTheory();
// Sheldon

theBigBangTheory.words;
// ['Leonard', 'Sheldon', ...]
```

## API
theBigBangTheory()

Type: `string`

Generate random character's name in The Big Bang Theory.

theBigBangTheory.names

Type: `array`

Fetch all of the names.

## CLI
```shell
$ npm i the-big-bang-theory -g
```

```shell
$ npm the-big-bang-theory --help
  
  Get random name of The Big Bang Theory

  Examples
    $ the-big-bang-theory
    Leonard

    $ the-big-bang-theory --all
    Leonard
    Sheldon
    Penny
    ...

  Options
    --all  Fetch all the names rather than a random name
```

## License
MIT © [WeiChiaChang](https://github.com/WeiChiaChang)