const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input.shift();
input = input.map((el) => el.split("").map(Number));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

// 하나의 칸과 연결된 지점 탐색 코드
const bfs = (startR, startC) => {
  const queue = [[startR, startC]];
  input[startR][startC] = 0; // 시작 지점 방문처리
  let count = 1; // 단지의 크기

  while (queue.length > 0) {
    let [row, col] = queue.shift();

    for (let [r, c] of dir) {
      let newR = row + r;
      let newC = col + c;

      // 인접해있으면 queue에 넣고 계속 이어서 탐색
      if (
        newR >= 0 &&
        newR < n &&
        newC >= 0 &&
        newC < n &&
        input[newR][newC] === 1
      ) {
        queue.push([newR, newC]);
        input[newR][newC] = 0; // 방문 처리
        count++;
      }
    }
  }
  return count;
};

const res = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 1) {
      res.push(bfs(i, j));
    }
  }
}

console.log(res.length);
console.log(res.sort((a, b) => a - b).join("\n"));
