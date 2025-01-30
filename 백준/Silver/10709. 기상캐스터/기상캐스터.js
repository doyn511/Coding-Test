const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const [h, w] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let answer = [];

for (col of input) {
  let curH = [];
  for (let i = 0; i < w; i++) {
    const bf = col.split("").slice(0, i);
    const cur = col[i];

    if (cur === "c") {
      curH.push(0);
    } else {
      let lastIdx = bf.lastIndexOf("c");
      lastIdx === -1 ? curH.push(-1) : curH.push(i - lastIdx);
    }
  }
  answer.push(curH);
}

answer = answer.map((el) => el.join(" ")).join("\n");
console.log(answer);