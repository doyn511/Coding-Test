const fs = require("fs");
let [n, times] = fs.readFileSync(0).toString().split("\n");

let answer = 0;
times = times
  .split(" ")
  .sort((a, b) => a - b)
  .map((el) => +el);

const addTimes = (arr) => {
  let sum = 0;
  for (t of arr) {
    sum += t;
  }
  return sum;
};

for (let i = 0; i < n; i++) {
  let arr = times.slice(0, i + 1);
  answer += addTimes(arr);
}

console.log(answer);
