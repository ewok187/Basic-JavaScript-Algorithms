function reverseString(str) {
  var splitString =str.split("");           // split String into Array of letters
  var reverseArray = splitString.reverse(); // reverse order of splitted String
  str = reverseArray.join("");              // join the array elements into a String
  return str;                               // "olleh"
}

reverseString("hello");
