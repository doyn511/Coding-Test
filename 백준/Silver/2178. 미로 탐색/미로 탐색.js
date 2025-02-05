const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input = input.slice(1).map((el) => el.split("").map(Number));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]; // 움직일 수 있는 방향

const bfs = () => {
  const queue = [[0, 0, 1]]; // 움직인 경로
  input[0][0] = 0; // 방문한 위치 0으로 값 변경

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === n - 1 && col === m - 1) console.log(distance);

    for ([r, c] of dir) {
      const newR = row + r;
      const newC = col + c;

      if (
        newR >= 0 &&
        newR < n &&
        newC >= 0 &&
        newC < m &&
        input[newR][newC] === 1
      ) {
        queue.push([newR, newC, distance + 1]);
        input[newR][newC] = 0;
      }
    }
  }
};

bfs();
