const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const cnt = +input.shift();

let answer = 0;

for (const words of input) {
  const str = words.split("");
  const stack = [words[0]];

  for (let i = 1; i < str.length; i++) {
    const cur = str[i];

    if (cur === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }

  if (stack.length === 0) answer++;
}

return console.log(answer);
