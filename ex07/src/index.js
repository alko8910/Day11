// Only change code below this line
var array = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function largestNumFromArr(arr) {
  var maxNumArray = [];
  var num = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > num) {
        num = arr[i][j];
      }
    }
    maxNumArray.push(num);
    num = 0;
  }

  return maxNumArray;
}
// Only change code above this line

console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // Change this line
module.exports = largestNumFromArr;
