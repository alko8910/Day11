// Only change code below this line
var arr = [
  [2],
  [5, 6, 7],
  [8, 9],
];
function multiplyArrayFunction(myArray) {
  var product = 1;
  var sum = 0;
  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < myArray[i].length; j++) {
      product = product * myArray[i][j];
    }
    
  }
  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < myArray[i].length; j++) {
      sum = sum + myArray[i][j];
    }
    
  }

  return {product, sum};
}
// Only change code above this line

console.log(multiplyArrayFunction(arr)); // Change this line
module.exports = multiplyArrayFunction;
