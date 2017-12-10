function caesar(str) {
  return str.split("").map.call(str, function(char) { // splits the string in an array of the individual characters, processes every entry
    var x = char.charCodeAt(0);                       // x holds the charCode of the different characters
    if (x < 65 || x > 90) {                           // if its not in the alphabet just return the string 
       return String.fromCharCode(x);                 
    } else if (x < 78) {                              // if its between the first and 13th alphabet letter add 13 to char code 
      return String.fromCharCode(x + 13);             // and return the string
    } else {                                          // if its between the 13th and 26th letter then substrate 13 from char code
      return String.fromCharCode(x - 13);             // and return the string
    }
  }).join("");                                        // array -> string 
}

caesar("SERR PBQR PNZC");
