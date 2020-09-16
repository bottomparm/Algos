// Given an undirected graph ↴ with maximum degree ↴ D, find a graph coloring ↴ using at most D+1 colors.

// For example:

// First described by Robert Frucht in 1939, the Frucht graph is a 3-regular graph with 12 vertices, 18 edges, and no nontrivial symmetries.
// This graph's maximum degree (D) is 3, so we have 4 colors (D+1). Here's one possible coloring:

// The Frucht graph with legal coloring.
// Graphs are represented by an array of N node objects, each with a label, a set of neighbors, and a color:

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

const graph = [a, b, c];


// Create a valid coloring for the graph
function colorGraph(graph, colors) {
  graph.forEach(node => {
    if (node.neighbors.has(node)) throw new Error('Graph contains a loop!')

    let neighborColors = new Set()

    // loop through neighbors to determine unavailable colors
    node.neighbors.forEach(neighbor => {
      if (neighbor.color !== null) {
        neighborColors.add(neighbor.color)
      }
    })

    for (let i = 0; i < colors.length; i++) {
      if (!neighborColors.has(colors[i])) {
        node.color = colors[i]
        break
      }
    }
  })
}