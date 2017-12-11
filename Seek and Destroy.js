function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);       // create an array of arguments args to check against arr

  for (var i = 0; i < arr.length; i++) {                  // iterate through arr
    for (var j = 0; j < args.length; j++) {               // iterate through arg
      if (arr[i] === args[j]) {                           // if the number in arr and args are the same delete them from arr
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);                             // return the new arr filtered for nulls
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
