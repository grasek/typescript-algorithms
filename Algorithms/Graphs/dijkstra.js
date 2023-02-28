function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const queue = [start];
  distances[start] = 0;

  while (queue.length) {
    const current = queue.shift();
    visited.add(current);

    for (const neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];
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
