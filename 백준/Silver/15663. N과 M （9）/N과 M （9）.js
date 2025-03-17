const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input.shift();
const arr = input[0].sort((a, b) => a - b); // 정렬
const result = [];
const visited = Array(arr.length).fill(false);

const getCombination = (depth, current) => {
  if (depth === m) {
    result.push(current.join(" "));
    return;
  }

  let lastNum = -1; // 중복 체크를 위한 변수

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || arr[i] === lastNum) continue; // 이미 사용한 숫자 또는 같은 숫자 건너뛰기

    visited[i] = true;
    current.push(arr[i]);
    getCombination(depth + 1, current);
    current.pop();
    visited[i] = false; // 다음 조합을 위해 방문 배열 되돌리기

    lastNum = arr[i]; // 중복 체크를 위해 마지막 숫자 저장
  }
};

getCombination(0, []);
console.log(result.join("\n"));
