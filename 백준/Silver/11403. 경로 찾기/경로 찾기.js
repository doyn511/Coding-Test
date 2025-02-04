const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input.shift();
input = input.map((g) => g.split(" ").map(Number));

const answer = [];

/** params
 * node : 가장 처음 시작한 정점 (바뀌지 않는 값)
 * start : 현재 시작 위치 (바뀌는 값 & 초기값은 node와 같음)
 * visited : 방문 여부 (bool, 누적값)
 */
const dfs = (node, start, visited) => {
  for (let i = 0; i < n; i++) {
    if (input[start][i] === 1 && visited[i] === 0) {
      visited[i] = 1;
      dfs(node, i, visited);
    }
  }
};

for (let i = 0; i < n; i++) {
  const visited = new Array(n).fill(0);
  dfs(i, i, visited);
  answer.push(visited.join(' '));
}

console.log(answer.join('\n'))
