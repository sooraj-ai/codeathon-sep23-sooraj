// define a function to validate ip address string and return boolean
function validateIP(str) {
  //create an array to store the ip address
  let arr = str.split(".");
  //if the length of the array is not 4, return false
  if (arr.length !== 4) {
    return false;
  }
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //if the element is not a number, return false
    if (isNaN(arr[i])) {
      return false;
    }
    //if the element is less than 0 or greater than 255, return false
    if (arr[i] < 0 || arr[i] > 255) {
      return false;
    }
  }
  //return true
  return true;
}