

function mainFunction() {

  

  function sum(a=0, b=0, ...rest) {
    return a+b+rest.reduce((acc, val)=>acc+val, 0);
  }
  console.log(sum(12));
  console.log(sum(12, 2, 3, 1, 2, 3));
}


