'use strict';

var sortHelperModule = module.exports = (function() {

  //Everything after the return statement is public
  return {

    //swap method
    swap : function(array, index1, index2) {
      console.log('swap')

      //store a tmp variable at pos index2
      var tmp = array[index2];

      //set value  of index2 to our value at index
      array[index2] = array[index1];

      //set our value of index1 to our stored variable
      array[index1] = tmp;
    }

  }

});

// var arr = [5,1,4,2,8];
// var selection = selectionModule();
// // console.log(selection);
// console.log(selection.selectionSort(arr));