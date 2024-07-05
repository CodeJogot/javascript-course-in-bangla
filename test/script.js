/*
1) Sorting an Array
[10, 7, 19, 5]
2) Recursion
  a) Base Case
  b) Recursive Case
*/


function mainFunction() {
  let s = sumFunction(5);
  console.log(s);
} 

function findingLargestPalindrome(){
  let mainString = "CodeJogot";
  let str = substring(mainString);
  let maxLength = 0;
  let largestPalindrome = "";
  for(let i= 0; i<str.length; i++) {
    if(palindrome(str[i])==true) {
      if(maxLength>str[i].length) {
        maxLength = str[i].length;
        largestPalindrome = str[i];
      }
    }
  }
}


function substring() {

}

function palindrome()
{
  
}