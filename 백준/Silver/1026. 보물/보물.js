const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
const cnt = +input.shift();
const arrA = input
  .shift()
  .split(" ")
  .map((el) => +el);
const arrB = input
  .shift()
  .split(" ")
  .map((el) => +el);

const copyB = [...arrB];
const newA = new Array(cnt).fill(0);
let answer = 0;

arrA.sort((a, b) => a - b);

for (let i = 0; i < cnt; i++) {
  let idx = copyB.indexOf(Math.max(...copyB));
  newA[idx] = arrA[i];
  copyB[idx] = -1;
}

for (let i = 0; i < cnt; i++) {
  answer += newA[i] * arrB[i];
}

console.log(answer);
