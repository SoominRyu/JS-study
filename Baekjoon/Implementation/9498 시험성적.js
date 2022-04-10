// 20220410
// 백준(구현) : 9498 시험 성적
// https://www.acmicpc.net/problem/9498

const a = require('fs').readFileSync('/dev/stdin').toString().trim();

if(a>=90){
    console.log('A');
} else if(a>=80){
    console.log('B');
} else if(a>=70){
    console.log('C');
} else if(a>=60){
    console.log('D');
} else{
    console.log('F');
}
