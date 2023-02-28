class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(-1);
  }

  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }

    this.parent[x] = this.find(this.parent[x]);

    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function kruskal(numVertices, edges) {
  const uf = new UnionFind(numVertices);
  const sortedEdges = edges.sort((a, b) => a[2] - b[2]);
  const result = [];

  for (
    let i = 0;
    i < sortedEdges.length && result.length < numVertices - 1;
    i++
  ) {
    const [u, v, weight] = sortedEdges[i];

    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      result.push(sortedEdges[i]);
    }
  }

  return result;
}
