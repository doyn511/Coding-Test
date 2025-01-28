const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const len = lowerCase.length;

const newStr = [];
let answer = "";

for (str of input) {
  let tmp = "";
  let idx = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) || str[i] === " ") {
      //숫자 또는 공백일 경우
      tmp += str[i];
      continue;
    }

    if (str[i] === str[i].toLowerCase()) {
      //소문자일 경우
      idx = (lowerCase.indexOf(str[i]) + 13) % len;
      tmp += lowerCase[idx];
    } else if (str[i] === str[i].toUpperCase()) {
      //대문자일 경우
      idx = (upperCase.indexOf(str[i]) + 13) % len;
      tmp += upperCase[idx];
    }
  }
  newStr.push(tmp);
}

answer = newStr.join(" ");
console.log(answer);
