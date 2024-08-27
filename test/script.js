

function mainFunction() {
  
  let obj = {};
  Object.defineProperty(obj, 'a', {
      value: 42,
      writable: true
  });
  
  console.log(obj.a); // Outputs: 42
  obj.a = 25; // This will not change the value
  console.log(obj.a); // Still outputs: 42
  
}


