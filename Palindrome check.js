function palindrome(str) {
  var re = /[\W_]/g;                                          // global search for all non-word characters in a string  
  var lowRegStr = str.toLowerCase().replace(re, '');          // set all letters to lower case and replace non word characters with ''
  var reverseStr = lowRegStr.split('').reverse().join('');    // Reverse the String

  if (reverseStr === lowRegStr) {                             // if reversed string and string are the same return true, else false
    return true;
  }else {
    return false;
  }
}



palindrome("eye");
