function getIndexToIns(arr, num) {

  arr.sort(function(a, b) {         // sort the array from small to big numbers
    return a - b;
  });

  var i = 0;                        // define i as 0 to loop through the arr
  while (num > arr[i]) {            // loop as long as num is bigger then the number i in the array
    i++;
  }

  return i;                         // return the index number where num belongs in arr
}

getIndexToIns([40, 60], 50);        // i = 2 
