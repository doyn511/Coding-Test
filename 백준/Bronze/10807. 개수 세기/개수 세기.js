const fs = require("fs");
let [len, input, num] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

input = input
  .split(" ")
  .map((item) => +item)
  .filter((item) => item === +num);

console.log(input.length);

