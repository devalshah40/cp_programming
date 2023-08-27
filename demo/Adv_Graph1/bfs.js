class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + ' inserted';
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}
function bfs(N, E, src, dest) {
  const g = Array.from(Array(N + 1), () => new Array());
  for (let i = 0; i < E.length; i++) {
    const [u, v] = E[i];
    g[u].push(v);
    // g[v].push(u);
  }
  // console.table(g);
  const q = new Queue();
  q.enqueue(src);
  const vis = Array(N + 1);
  vis[src] = true;
  const parent = Array(N + 1);
  parent[src] = -1;
  const distance = Array(N + 1);
  distance[src] = 0;

  while (!q.isEmpty()) {
    const cu = q.dequeue();

    for (let i = 0; i < g[cu].length; i++) {
      const cv = g[cu][i];
      if (!vis[cv]) {
        vis[cv] = true;
        parent[cv] = cu;
        distance[cv] = distance[cu] + 1;
        q.enqueue(cv);
      }
    }
  }
  return vis[dest];
}

let N, E;
N = 5;
E = [
  [1, 2],
  [4, 1],
  [2, 4],
  [3, 4],
  [5, 2],
  [1, 3],
];
let src, dest;
src = 1;
dest = 5;
bfs(N, E, src, dest);
