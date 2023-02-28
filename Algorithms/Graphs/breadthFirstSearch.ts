function bfsTS(graph: { [key: string]: string[] }, start: string): Set<string> {
  const visited: Set<string> = new Set();
  const queue: string[] = [start];

  while (queue.length) {
    const node: string = queue.shift()!;
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
