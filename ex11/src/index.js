// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result = [];
    while (arr.length){
        result.push(arr.splice(0,n));
    }
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(1,2,3,4,5,6,7,8,9)); // Change this line
module.exports = splitArrayInGroups;