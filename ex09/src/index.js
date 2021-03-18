// Only change code below this line
function myBouncer(arr) {
  arr = arr.filter(function (n) {
    return (
      n !== undefined &&
      n !== null &&
      n !== false &&
      n !== 0 &&
      n !== "" &&
      !isNaN(n)
    );
  });
  return arr;
}
// Only change code above this line
console.log(myBouncer([null, NaN, 1, 2])); // Change this line
console.log(myBouncer([false, null, 0, NaN, undefined, 1])); // Change this line
console.log(myBouncer([null, NaN, 1, 2])); // Change this line
module.exports = myBouncer;
