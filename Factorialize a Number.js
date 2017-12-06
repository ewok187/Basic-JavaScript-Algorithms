function factorialize(num) {
 if (num == 0) {  // terminal condition (to check the end of the recursion)
   return 1;
 }else{
   return num * factorialize(num -1);  // the function keeps summing up num * (num - 1) until num is 0. In this Case 5 * (5-1) * (4-1)...
 }
}

factorialize(5);
