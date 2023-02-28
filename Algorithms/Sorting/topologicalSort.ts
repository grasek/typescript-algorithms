function topologicalSortTS(graph: { [key: string]: string[] }) {
  const visited = new Set<string>();
  const sorted: string[] = [];

  function dfs(node: string) {
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
