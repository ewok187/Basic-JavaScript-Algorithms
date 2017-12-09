function mutation(arr) {      
  var lower1 = arr[1].toLowerCase();      // convert both words in the array to lowercase
  var lower0 = arr[0].toLowerCase();

  for(i = 0; i < lower1.length; i++){     // loops through every character of the second word in the array
    if(lower0.indexOf(lower1[i]) == -1)   // if the character is not in the first word of the array return false
      return false;
  }return true;                           // when every character of the second word is in the first too, return true
}
mutation(["hello", "hey"])
