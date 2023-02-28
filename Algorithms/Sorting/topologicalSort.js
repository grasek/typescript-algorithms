function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];

  function dfs(node) {
    visited.add(node);
    graph[node].forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        dfs(neighbour);
      }
    });
    sorted.unshift(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return sorted;
}
