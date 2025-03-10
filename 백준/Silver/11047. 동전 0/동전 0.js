const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [coinCnt, target] = input.shift().split(" ").map(Number);
let count = 0;

for (let i = coinCnt - 1; i >= 0; i--) {
  let coins = parseInt(target / input[i]);
  count += coins;
  target -= input[i] * coins;
}
return console.log(count);
