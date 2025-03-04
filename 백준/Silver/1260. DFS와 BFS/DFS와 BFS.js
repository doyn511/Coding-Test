const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [nodeCnt, edgeCnt, start] = input.shift();

const graph = Array.from({ length: nodeCnt + 1 }, () => []);
for (let i = 0; i < edgeCnt; i++) {
  const [v1, v2] = input[i];
  graph[v1].push(v2);
  graph[v2].push(v1);
}

graph.forEach((el) => el.sort((a, b) => a - b));

const dfsVisited = Array.from({ length: nodeCnt + 1 }, () => false);
const dfsRes = [];
const dfs = (node) => {
  if (!dfsVisited[node]) {
    dfsVisited[node] = true;
    dfsRes.push(node);

    for (const next of graph[node]) {
      if (!dfsVisited[next]) dfs(next);
    }
  }
};

const bfsVisited = Array.from({ length: nodeCnt + 1 }, () => false);
const bfsRes = [];
const queue = [];
const bfs = (node) => {
  bfsVisited[node] = true;
  bfsRes.push(node);
  queue.push(node);

  while (queue.length !== 0) {
    const cur = queue.shift();

    graph[cur].forEach((v) => {
      if (!bfsVisited[v]) {
        bfsVisited[v] = true;
        bfsRes.push(v);
        queue.push(v);
      }
    });
  }
};

dfs(start);
bfs(start);

console.log(dfsRes.join(" "));
console.log(bfsRes.join(" "));
