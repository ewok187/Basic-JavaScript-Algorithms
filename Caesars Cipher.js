function caesar(str) {
  return str.split("").map.call(str, function(char) {
    var x = char.charCodeAt(0);
    if (x < 65 || x > 90) {
       return String.fromCharCode(x);
    } else if (x < 78) {
      return String.fromCharCode(x + 13);
    } else {
      return String.fromCharCode(x - 13);
    }
  }).join("");
}

caesar("SERR PBQR PNZC");
