let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let str = ''
for (let i = 1; i <= num; i++) {
    str += String(i)
    str += '\n'
}
console.log(str)

//for문 안에서 계속 console.log 하면 시간 초과 발생
// 문자열로 저장하여 한 번만 출력
//console.log가 시간 많이 씀