interface Graph {
  [key: string]: { [key: string]: number };
}

interface ShortestPaths {
  distances: { [key: string]: number };
  predecessors: { [key: string]: string | null };
}

function bellmanFordTS(graph: Graph, source: string): ShortestPaths {
  let distances: { [key: string]: number } = {};
  let predecessors: { [key: string]: string | null } = {};

  for (let vertex in graph) {
    distances[vertex] = Infinity;
    predecessors[vertex] = null;
  }

  distances[source] = 0;

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let u in graph) {
      for (let v in graph[u]) {
        let weight = graph[u][v];
        if (distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
          predecessors[v] = u;
        }
      }
    }
  }

  return { distances, predecessors };
}
