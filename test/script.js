/*
Algorithm: Binary Search Algorithm
*/


function mainFunction() {
  let a = 2, b=4;
  console.log(f(n));
} 

function f(a, b)
{
  if(a==b) return b;
  return a + f(a+1, b);
}