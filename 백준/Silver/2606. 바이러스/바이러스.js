const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const nodeCount = +input.splice(0, 1);
const edgeCount = +input.splice(0, 1);

input = input.map((e) => e.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);

const graph = Array.from(Array(nodeCount + 1), () => []);
const visited = new Array(nodeCount + 1).fill(0);
visited[1] = 1;

// 연결 그래프 생성하기
for (let i = 0; i < edgeCount; i++) {
  const [start, end] = input[i];
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (start) => {
  if (visited[start] !== 1) visited[start] = 1;

  for (e of graph[start]) {
    if (visited[e] === 0) {
      visited[e] = 1;
      dfs(e);
    }
  }
};

dfs(1);

console.log(visited.filter((n) => n === 1).length - 1);
