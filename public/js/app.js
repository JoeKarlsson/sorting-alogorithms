var bubbleModule = require('./bubblesort.js');
var quickModule = require('./quicksort.js');
var mergeModule = require('./mergesort.js');
var insertionModule = require('./insertionsort.js');
var selectionModule = require('./selectionsort.js');
var visualizationModule = require('./visualization.js');

//Init modules
var visualizer = visualizationModule();
var bubble = bubbleModule();

var shuffledArray;

//In-app functions
//method to create buttons
function createButton (action, name) {
  var button = document.createElement('button');
  button.innerHTML = name;
  button.setAttribute('id', action);
  document.getElementById('visualizer').appendChild(button);
}

//method to create a new random dataset and clear the currently sorted one
function reset () {
  shuffledArray = visualizer.getRandomArray();
  visualizer.drawArray(shuffledArray);
}

$(document).ready(function() {
  //initialized our random array
  reset();

  $('#bubble').click(function() {
    bubble.bubbleSort(shuffledArray);
  });

  $('#reset').click(function() {
    reset();
  });
});

//create a button for each algorithm and reset func
createButton('bubble', 'Bubble Sort');
createButton('reset', 'Reset');