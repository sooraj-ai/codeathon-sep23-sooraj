// define a function to sort array in acending order and return it
function arraySort(arr) {
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array starting from the next element
    for (let j = i + 1; j < arr.length; j++) {
      //if the current element is greater than the next element, swap them
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } 
    }
  }
  //return the sorted array
  return arr;
}