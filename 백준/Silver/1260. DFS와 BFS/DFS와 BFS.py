import sys
from collections import defaultdict, deque

node_cnt, edge_cnt, start = list(map(int, input().split()))
input = []

for _ in range(edge_cnt):
  line = sys.stdin.readline()
  input.append(line.split())

adj_list = defaultdict(list)
for u, v in input:
  adj_list[int(u)].append(int(v))
  adj_list[int(v)].append(int(u))

for key in adj_list:
  adj_list[key].sort()

dfs_visited = set()
dfs_result = []

bfs_visitied = set()
bfs_result = []

def dfs(start):
  dfs_visited.add(start)
  dfs_result.append(start)

  for node in adj_list[start]:
    if node not in dfs_visited:
      dfs(node)

def bfs(start):
  queue = deque([start])
  bfs_visitied.add(start)
  bfs_result.append(start)

  while queue:
    node = queue.popleft()

    for n in adj_list[node]:
      if n not in bfs_visitied:
        queue.append(n)
        bfs_visitied.add(n)
        bfs_result.append(n)

dfs(start)
bfs(start)
print(*dfs_result)
print(*bfs_result)