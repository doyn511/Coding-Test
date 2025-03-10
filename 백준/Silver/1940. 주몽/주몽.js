const fs = require("fs");
let [cnt, target, input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

input = input.split(" ").map(Number);
const stack = [input.shift()];
let answer = 0;

while (stack.length > 0) {
  const idx = input.indexOf(target - stack[0]);

  if (idx !== -1) {
    answer++;
    input.splice(idx, 1);
  }

  stack.pop();
  if (input.length !== 0) stack.push(input.shift());
}

return console.log(answer);
