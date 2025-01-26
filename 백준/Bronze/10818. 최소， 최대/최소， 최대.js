const fs = require("fs");
let [n, input] = fs.readFileSync(0).toString().trim().split("\n");

input = input.split(" ").map((item) => +item);

const max = Math.max(...input);
const min = Math.min(...input);

console.log(min, max);
