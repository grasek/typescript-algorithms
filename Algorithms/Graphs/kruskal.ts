class UnionFindTS {
  private parent: number[];

  constructor(size: number) {
    this.parent = new Array(size).fill(-1);
  }

  find(x: number): number {
    if (this.parent[x] === -1) {
      return x;
    }

    this.parent[x] = this.find(this.parent[x]);

    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX: number = this.find(x);
    const rootY: number = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function kruskalTS(
  numVertices: number,
  edges: [number, number, number][]
): [number, number, number][] {
  const uf: UnionFind = new UnionFind(numVertices);
  const sortedEdges: [number, number, number][] = edges.sort(
    (a, b) => a[2] - b[2]
  );
  const result: [number, number, number][] = [];

  for (
    let i: number = 0;
    i < sortedEdges.length && result.length < numVertices - 1;
    i++
  ) {
    const [u, v, weight]: [number, number, number] = sortedEdges[i];

    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      result.push(sortedEdges[i]);
    }
  }

  return result;
}
