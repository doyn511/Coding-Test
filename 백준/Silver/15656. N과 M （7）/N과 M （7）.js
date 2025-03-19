const fs = require("fs");
let [num, input] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.sort((a, b) => a - b);

const answer = [];

const dfs = (arr, depth) => {
  if (depth === num[1]) {
    answer.push([...arr]);
    return;
  }

  for (let i = 0; i < num[0]; i++) {
    arr.push(input[i]);
    dfs(arr, depth + 1);
    arr.pop();
  }
};

for (let i = 0; i < num[0]; i++) {
  dfs([input[i]], 1);
}

console.log(answer.map((el) => el.join(" ")).join("\n"));
