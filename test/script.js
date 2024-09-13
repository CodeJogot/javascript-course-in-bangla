let timeoutID = setTimeout(function () {
    console.log("This will not be executed");
  }, 5000);
  
  function clrTimeOut() {
    clearTimeout(timeoutID);
    console.log("You've stopped the timeout function");
  }