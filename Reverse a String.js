function reverseString(str) {
  var splitString =str.split("");
  var reverseArray = splitString.reverse();
  str = reverseArray.join("");
  return str;
}

reverseString("hello");
