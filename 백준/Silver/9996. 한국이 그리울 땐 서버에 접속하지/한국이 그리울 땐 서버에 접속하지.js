const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const num = +input[0];
const commonStr = input[1].split("*");
input = input.slice(2);

const TRUE = "DA";
const FALSE = "NE";
const result = [];

for (let i = 0; i < num; i++) {
  const [start, end] = commonStr;
  let curStr = input[i];
  let res = true;

  if (curStr.startsWith(start)) {
    curStr = curStr.slice(start.length);
  } else {
    res = false;
  }

  if (!curStr.endsWith(end)) res = false;

  result.push(res ? TRUE : FALSE);
}

console.log(result.join("\n"));
