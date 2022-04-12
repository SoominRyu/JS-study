let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let n = 0

for (let i = 1; i <= num; i++) {
  n += i;  
}

console.log(n);