function largestOfFour(arr) {
  var result = [];                            // create array to save highest nmb

  for (i = 0; i < arr.length; i++) {
    var highNmb = arr[i][0];                  // go through the array and save the first nmb of each sub-array in var highNmb
    for (x = 1; x < arr[i].length; x++) {
      if (arr[i][x] > highNmb) {              // go through all sub-arrays and if there is a higher nmb then the first, save it in highNmb
        highNmb = arr[i][x];
      }
    }
    result.push(highNmb);                     // push the highest nmb of each sub-array in the result array
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3, 8],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
