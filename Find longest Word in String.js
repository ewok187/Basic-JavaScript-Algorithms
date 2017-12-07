function findLongestWord(str) {
  var splitStr = str.split(" ");

  var lngth = 0;
  var longestStr;

  for (i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > lngth) {
      lngth = splitStr[i].length;

    }
  }
    return lngth;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
