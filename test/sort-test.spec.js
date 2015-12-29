var chai = require('chai');
var expect = chai.expect;
chai.should();

var bubbleModule = require('./../js/bubblesort.js');
var quickModule = require('./../js/quicksort.js');
var mergeModule = require('./../js/mergesort.js');
var insertionModule = require('./../js/insertionsort.js');
var selectionModule = require('./../js/selectionsort.js');
var visualizationModule = require('./../js/visualization.js');

describe('Bubble Sort', function () {
  it('should be a module that exists', function () {
    expect(bubbleModule).to.be.a('function');
  });
});

describe('Bubble Sort', function () {
  var bubble = bubbleModule();
  var result = bubble.bubbleSort([3,2,1]);

  it('should be return a sorted array', function () {
    expect( result ).to.deep.equal([ 1, 2, 3]);
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

describe('Visualizer', function () {
  it('should be a module that exists', function () {
    expect(visualizationModule).to.be.a('function');
  });
});