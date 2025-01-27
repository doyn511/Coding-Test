const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const price = input
  .shift()
  .split(" ")
  .map((item) => +item);

let answer = 0;
const time = [];

for (let i = 0; i < 3; i++) {
  let arr = input[i].split(" ");
  arr.forEach((t) => time.push(+t));
}

const max = Math.max(...time);
const min = Math.min(...time);

const timeArr = new Array(max).fill(0);

input.forEach((el, idx) => {
  const [arrive, leave] = el.split(" ").map((item) => +item);

  for (let i = arrive; i < leave; i++) {
    timeArr[i]++;
  }
});

timeArr.forEach((t) => {
  if (t === 1) {
    answer += price[0] * t;
  } else if (t === 2) {
    answer += price[1] * t;
  } else if (t === 3) {
    answer += price[2] * t;
  }
});

console.log(answer);
