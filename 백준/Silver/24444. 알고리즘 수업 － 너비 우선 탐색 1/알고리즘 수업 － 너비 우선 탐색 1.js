const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [nodeCnt, edgeCnt, start] = input.shift();

/** 1. 각 node 별 뎐결된 edge 그래프 생성 */
const graph = Array.from({ length: nodeCnt + 1 }, () => []);
for (let i = 0; i < edgeCnt; i++) {
  const [v1, v2] = input[i];
  graph[v1].push(v2);
  graph[v2].push(v1);
}
graph.forEach((el) => el.sort((a, b) => a - b));

let visited = Array.from({ length: nodeCnt + 1 }, () => 0);
let turn = 1;
const queue = [];

/** 2. 그래프 탐색 */
const bfs = (start) => {
  visited[start] = turn;
  turn++;

  queue.push(start);

  while (queue.length !== 0) {
    const node = queue.shift();

    graph[node].forEach((n) => {
      if (!visited[n]) {
        visited[n] = turn;
        turn++;
        queue.push(n);
      }
    });
  }
};

bfs(start);
visited = visited.slice(1);
console.log(visited.join("\n"));
