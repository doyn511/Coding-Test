const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const testCaseNum = +input.shift();
const testCaseList = [];
const answer = [];

for (let i = 0; i < testCaseNum; i++) {
  const clothesNum = +input.shift();
  const setOfCase = input.splice(0, clothesNum);
  testCaseList.push(setOfCase);
}

for (const list of testCaseList) {
  const clothesTypes = {};
  let days = 1;

  for (let i = 0; i < list.length; i++) {
    const [name, type] = list[i].split(" ");
    clothesTypes[type] = (clothesTypes[type] || 0) + 1;
  }

  for (const type in clothesTypes) {
    days *= clothesTypes[type] + 1;
  }

  answer.push(days - 1);
}

console.log(answer.join('\n'));
