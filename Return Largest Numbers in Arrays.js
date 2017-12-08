function largestOfFour(arr) {
  var result = [];

  for (i = 0; i < arr.length; i++) {
    var highNmb = arr[i][0];
    for (x = 1; x < arr[i].length; x++) {
      if (arr[i][x] > highNmb) {
        highNmb = arr[i][x];
      }
    }
    result.push(highNmb);
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3, 8],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
