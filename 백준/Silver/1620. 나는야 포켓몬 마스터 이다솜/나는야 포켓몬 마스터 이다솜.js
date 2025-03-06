const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [pocketmon, questions] = input.shift().split(" ").map(Number);

let nameMap = new Map();
let idxMap = new Map();

for (let i = 0; i < pocketmon; i++) {
  nameMap.set(i + 1, input[i]);
  idxMap.set(input[i], i + 1);
}

input = input.slice(pocketmon);

const answer = [];

input.forEach((el) => {
  if (isNaN(el)) {
    // 문제가 문자인 경우 -> 번호 찾기
    answer.push(idxMap.get(el));
  } else {
    // 문제가 숫자인 경우 -> 문자 찾기
    answer.push(nameMap.get(+el));
  }
});

console.log(answer.join("\n"));
