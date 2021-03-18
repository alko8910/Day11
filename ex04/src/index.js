// Create a monitorListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorListArray

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Only change code below this line
  var monitorsList = [];
  for (var i = 0; i < newMonitorsList.length; i++) {
      monitorsList.push(newMonitorsList[i] + ", " + parseInt(i+1))
      
        
  }
  //monitorsList.splice(0, monitorsList.length);
  return monitorsList;
  // Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray)); //Change this line
module.exports = myMonitorsFunction;

// while(arr.length) newArr.push(arr.splice(0,3));
