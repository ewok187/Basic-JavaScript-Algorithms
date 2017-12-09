function mutation(arr) {
  var lower1 = arr[1].toLowerCase();
  var lower0 = arr[0].toLowerCase();

  for(i = 0; i < lower1.length; i++) {
    if(lower0.indexOf(lower1[i]) == -1)
      return false;
  }return true;
}
