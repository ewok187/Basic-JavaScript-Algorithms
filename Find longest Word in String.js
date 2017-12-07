function findLongestWord(str) {
  var splitStr = str.split(" ");              // Splits String into array 

  var lngth = 0;                              // lngth will hold the length of the longest word

  for (i = 0; i < splitStr.length; i++) {     // loops through the array 
    if (splitStr[i].length > lngth) {        
      lngth = splitStr[i].length;             // sets lngth equal to  the number of letters in the longest word

    }
  }
    return lngth;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // in this case 6
