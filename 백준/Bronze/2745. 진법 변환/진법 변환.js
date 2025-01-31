const fs = require("fs");
let [num, b] = fs.readFileSync(0).toString().trim().split(" ");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let answer = 0;

num = num.split("").reverse();

for (let i = 0; i < num.length; i++) {
  if (isNaN(num[i])) {
    //문자일 때
    let n = alphabet.indexOf(num[i]) + 10;
    answer += Math.pow(b, i) * n;
  } else {
    //숫자일 때
    answer += Math.pow(b, i) * +num[i];
  }
}

console.log(answer);
