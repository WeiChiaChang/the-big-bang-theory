// test.js
var should = require('should');
var theBigBangTheory = require('./');

describe('array is valid or not', function () {
  it('should return at least one name', function (done) {
    (theBigBangTheory().length > 0).should.be.true;
    (Array.isArray(theBigBangTheory().names)).should.be.true;
    (theBigBangTheory.names[4].length > 0).should.be.true;
    done();
  })
})