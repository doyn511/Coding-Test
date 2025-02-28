const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const [node, edge, start] = input[0].split(" ").map(Number);
input = input.slice(1).map((el) => el.split(" ").map(Number));

const graph = Array.from({ length: node + 1 }, () => []);

const createGraph = () => {
  for (const e of input) {
    const [from, to] = e;
    graph[from].push(to);
    graph[to].push(from);
  }

  for (let i = 1; i <= node; i++) {
    graph[i].sort((a, b) => a - b);
  }
};

createGraph();

const visited = Array.from({ length: node }, () => 0);
let count = 1;

const dfs = (node) => {
  if (!visited[node - 1]) {
    visited[node - 1] = count;
    count++;

    for (const next of graph[node]) dfs(next);
  }
};

dfs(start);
console.log(visited.join(" "));
