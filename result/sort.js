//create a function to sort the string according to the frequency of characters
function sortString(str) {
  //create an object to store the frequency of characters
  let freq = {};
  //loop through the string and store the frequency of characters in the object
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  //create an array to store the frequency of characters
  let arr = [];
  //loop through the object and store the frequency of characters in the array
  for (let key in freq) {
    arr.push([key, freq[key]]);
  }
  //sort the array in descending order
  arr.sort((a, b) => b[1] - a[1]);
  //create a string to store the result
  let result = "";
  //loop through the array and add the characters to the string according to the frequency
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].repeat(arr[i][1]);
  }
  //return the result
  return result;
}