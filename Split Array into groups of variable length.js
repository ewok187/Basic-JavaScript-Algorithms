function chunkArrayInGroups(arr, size) {  
  var result = [];                        // create an empty array
  
  for (i = 0; i < arr.length; i+=size){   // for loop which increments by "size" and ends at arr.length
    result.push(arr.slice(i, i + size));  // slice the array into chunks as big as "size" and push these into the result array
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
