var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleModule = require('./../bubblesort.js');

describe('Bubble Sort', function () {
  it('should be a module that exists', function () {
    expect(bubbleModule).to.be.a('function');
  });
});

