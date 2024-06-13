var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

let result = a*b - c*d;

console.log(`DIFERENCA = ${result}`);