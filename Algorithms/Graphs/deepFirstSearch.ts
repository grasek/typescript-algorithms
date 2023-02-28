function dfsTS(
  graph: { [key: string]: string[] },
  start: string,
  visited = new Set<string>()
): Set<string> {
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfsTS(graph, neighbor, visited);
    }
  }

  return visited;
}
