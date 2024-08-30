/*
1) Hoisted
2) Parameter
3) Arguments
4) call
5) apply
6) Higher Order Function
*/




function mainFunction() {

  function repeat(operation, num) {
    return function() {
        for (let i = 0; i < num; i++) {
            operation();
        }
    };
}

const sayHello = repeat(() => console.log('CodeJogot'), 5);
sayHello();
sayHello();


}




