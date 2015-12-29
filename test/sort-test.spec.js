var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleModule = require('./../js/bubblesort.js');
var quickModule = require('./../js/quicksort.js');
var mergeModule = require('./../js/mergesort.js');
var insertionModule = require('./../js/insertionsort.js');
var selectionModule = require('./../js/selectionsort.js');

describe('Bubble Sort', function () {
  it('should be a module that exists', function () {
    expect(bubbleModule).to.be.a('function');
  });
});

describe('Quick Sort', function () {
  it('should be a module that exists', function () {
    expect(quickModule).to.be.a('function');
  });
});

describe('Merge Sort', function () {
  it('should be a module that exists', function () {
    expect(mergeModule).to.be.a('function');
  });
});

describe('Insertion Sort', function () {
  it('should be a module that exists', function () {
    expect(insertionModule).to.be.a('function');
  });
});

describe('Selection Sort', function () {
  it('should be a module that exists', function () {
    expect(selectionModule).to.be.a('function');
  });
});

