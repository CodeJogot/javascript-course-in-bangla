// Brute Force Algorithm

/*
if(n>max) max = n;
else max = max; 
*/

function mainFunction() {
  const numbers = [2, 5, 3, 9];
  const sum = numbers.reduce(myLogic, numbers[0]);
  console.log(sum);  

}

function myLogic(max, n) {
  if(n>max) max = n;
  return max;
}

