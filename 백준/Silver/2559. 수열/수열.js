const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [totalCnt, days] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);

const sumArr = [];

for (let i = 0; i < totalCnt - days + 1; i++) {
  let sum = 0;
  for (let j = i; j < i + days; j++) {
    sum += input[j];
  }
  sumArr.push(sum);
}

return console.log(Math.max(...sumArr));
