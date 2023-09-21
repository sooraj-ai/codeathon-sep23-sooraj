//define a function that finds the best days to buy and sell stocks to maximize profit, given an array of stock prices. Return the maximum profit that can be made. If no profit can be made, return -1
function maxStockProfit(arr) {
  //create a variable to store the maximum profit
  let maxProfit = -1;
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array starting from the next element
    for (let j = i + 1; j < arr.length; j++) {
      //if the difference between the current element and the next element is greater than the maximum profit, update the maximum profit
      if (arr[j] - arr[i] > maxProfit) {
        maxProfit = arr[j] - arr[i];
      }
    }
  }
  //return the maximum profit
  return maxProfit;
}


