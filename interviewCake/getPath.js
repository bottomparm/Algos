// You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.

// Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, passing each message along from one phone to the next until it reaches the intended recipient. (Don't worry—the messages are encrypted while they're in transit.)

// Some friends have been using your service, and they're complaining that it takes a long time for messages to get delivered. After some preliminary debugging, you suspect messages might not be taking the most direct route from the sender to the recipient.

// Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

// There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

// Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

//   const network = {
//   'Min'     : ['William', 'Jayden', 'Omar'],
//   'William' : ['Min', 'Noam'],
//   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
//   'Ren'     : ['Jayden', 'Omar'],
//   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
//   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   'Noam'    : ['Nathan', 'Jayden', 'William'],
//   'Omar'    : ['Ren', 'Min', 'Scott'],
//   ...
// };

// JavaScript
// For the network above, a message from Jayden to Adam should have this route:

//   ['Jayden', 'Amelia', 'Adam']

// A simple, somewhat inefficient queue implementation
class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

// Find the shortest route in the network between the two users
function getPath(graph, startNode, endNode) {

  if (!graph[startNode] || !graph[endNode]) throw new Error('Start/End nodes not found in graph.')

  let nodesToVisit = new Queue()
  nodesToVisit.enqueue(startNode)

  let nodesVisited = new Set()
  nodesVisited.add(startNode)

  let pathStorage = {}
  pathStorage[startNode] = null // storage for node paths
  let path = []

  while (nodesToVisit.size > 0) {
    let node = nodesToVisit.dequeue()

    if (node === endNode) {
      while (node !== null) {
        path.unshift(node)
        node = pathStorage[node]
      }
      return path
    }

    let neighbors = graph[node] // array of neighbors
    neighbors.forEach(neighbor => {
      if (!nodesVisited.has(neighbor)) {
        nodesToVisit.enqueue(neighbor)
        nodesVisited.add(neighbor)
        pathStorage[neighbor] = node
      }
    })
  }

  return null;
}