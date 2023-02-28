function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return visited;
}
