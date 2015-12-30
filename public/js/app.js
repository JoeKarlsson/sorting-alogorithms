var bubbleModule = require('./bubblesort.js');
var quickModule = require('./quicksort.js');
var mergeModule = require('./mergesort.js');
var insertionModule = require('./insertionsort.js');
var selectionModule = require('./selectionsort.js');
var visualizationModule = require('./visualization.js');

var arr = [5,1,4,2,8];
var visual = visualizationModule();
visual.drawArray(arr);

var bubble = bubbleModule();
console.log(bubble.bubbleSort(arr), 'Bubble Sort');
