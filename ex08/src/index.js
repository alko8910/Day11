// Only change code below this line
function myMutation(arr){
    var firstArray = arr[1].toLowerCase();
    var secondArray = arr[0].toLowerCase();
    for (let i = 0; i < firstArray.length; i++) {
      if (secondArray.indexOf(firstArray[i]) < 0) return false;
    }
    return true;
  }

// Only change code above this line

console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["Ate", "Date"])); // Change this line
console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;

