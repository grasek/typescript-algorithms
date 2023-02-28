interface GraphDijkstra {
  [key: string]: { [key: string]: number };
}

function dijkstraTS(graph: Graph, start: string): { [key: string]: number } {
  const distances: { [key: string]: number } = {};
  const visited: Set<string> = new Set();
  const queue: string[] = [start];
  distances[start] = 0;

  while (queue.length) {
    const current: string = queue.shift()!;
    visited.add(current);

    for (const neighbor in graph[current]) {
      const distance: number = distances[current] + graph[current][neighbor];
      if (!distances[neighbor] || distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return distances;
}
