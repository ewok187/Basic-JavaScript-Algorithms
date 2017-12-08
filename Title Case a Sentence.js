function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");                    // all letters lowercase + split string into array at " "
  var result = convertToArray.map(function(val) {                       // enter every word in the array and replace the first character
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());     // with its capital version
  });
  return result.join(" ");                                              // convert the array into a string again
}

titleCase("I'm a little tea pot");
