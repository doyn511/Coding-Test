const fs = require("fs");
let [info, arr] = fs.readFileSync(0).toString().trim().split("\n");

const [n, select] = info.split(" ").map(Number);
arr = arr.split(" ").map(Number).sort((a, b) => a - b);

const result = [];

const getCombination = (start, current) => {
  if (current.length === select) {
    result.push(current.join(" "));
    return;
  }
  
  for (let i = start; i < n; i++) {
    getCombination(i, [...current, arr[i]]);
  }
};

getCombination(0, []);
console.log(result.join("\n"));
