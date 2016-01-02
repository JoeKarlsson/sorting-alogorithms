'use strict';

var visualizationModule = require('./visualization.js');
var visualizer = visualizationModule();

var insertionModule = module.exports = (function() {

  /**
   * Callback function that is called when the sorting animation is completed
   * @param  {[array]} array
   * @return {[array]}
   */
  function endAnimation(array) {
    console.log('END');
    return array
  }

  //swap method because its used multiple times
  function swap (array, index1, index2) {

    //store a tmp variable at pos index2
    var tmp = array[index2];

    //set value  of index2 to our value at index
    array[index2] = array[index1];

    //set our value of index1 to our stored variable
    array[index1] = tmp;
  }

  return {
    /**
     * Over each iteration insertion sort removes one element from the input array, finds the location it belongs to and inserts it at this point.
     * @param  array unsorted array that will be sort
     * @return array sorted array
     */
    insertionSort : function (array) {

      //loop through our array
      var interval = setInterval(insertionFrame.bind(null, array, endAnimation), 10);

      //init i to 1
      var i = 1;

      //Iterate over each element in the array - for each element we will be finding the correct place to put this element
      // for (var i = 1; i < a.length-1; i++) {
      function insertionFrame(array, callback) {

        //init j to i
        var j = i;

        //once we have gone through the entire array once - end the animation.
        if ( i >=  array.length ) {
          console.log('enter clear Interval')
          clearInterval(interval);
          callback(array);
        }

        //while our previous number is greater than 0, and the number we're comparing is less than our previous number enter our loop
        while ( j > 0 && (array[j - 1] > array[j]) ) {

          //shift the number down the array and give us a space to insert our current value
          swap(array, j, j - 1)

          //draw the newly swapped array onto the DOM
          visualizer.drawArray(array);

          //decrement j to go through our entire array
          j--;
        }

        //everytime the array goes through the entire array again - update i to advance to the next element in the array.
        i++;
      };

      //return the sorted array
      return array;
    }

  }

});

// var arr = [5,1,4,2,8];
// var bubble = insertionModule();
// // console.log(bubble);
// console.log(bubble.insertionSort(arr), ' Insterton Sort');