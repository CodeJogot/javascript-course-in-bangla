

function mainFunction() {
  function greet() {
    console.log("Hello, " + this.name);
  }
  const person = {
      name: "Nirob"
  };

  const codejogot = {
    name: "Alim",
    ID: "dfdf"
  }

  greet.call(codejogot); 

}
