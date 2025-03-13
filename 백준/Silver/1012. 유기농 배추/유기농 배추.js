const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const testCaseNum = +input.shift();
input = input.map((el) => el.split(" "));
const maps = [];

const createMaps = () => {
  for (let i = 0; i < testCaseNum; i++) {
    const [m, n, k] = input.shift().map(Number);
    const arr = Array.from({ length: m }, () =>
      Array.from({ length: n }, () => 0)
    );
    const list = input.splice(0, k);

    for (const [x, y] of list) {
      arr[x][y] = 1;
    }
    maps.push(arr);
  }
};

createMaps();

const dir = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

const bfs = (map, startX, startY) => {
  const queue = [[startX, startY]];
  const xLen = map.length;
  const yLen = map[0].length;
  map[startX][startY] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [r, c] of dir) {
      const newX = x + r;
      const newY = y + c;

      if (
        newX >= 0 &&
        newX < xLen &&
        newY >= 0 &&
        newY < yLen &&
        map[newX][newY] === 1
      ) {
        queue.push([newX, newY]);
        map[newX][newY] = 0;
      }
    }
  }
};

const answer = [];

for (const map of maps) {
  let count = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        bfs(map, i, j);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join("\n"));
