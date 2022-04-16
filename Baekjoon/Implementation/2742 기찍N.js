let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let str = ''
for (let i = num; i >= 1; i--) {
    str += String(i)
    str += '\n'
}
console.log(str)