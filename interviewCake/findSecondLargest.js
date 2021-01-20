class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Find the second largest item in the binary search tree
function findSecondLargest(treeRoot) {

  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) throw new Error ('Need at least 2 nodes to find second largest.')

  let leftSubtreeStaged = false
  let node = treeRoot
  let parentValue = null

  while (node) {
    if (node.right) {
      if (!leftSubtreeStaged) {
        parentValue = node.value
      }
      node = node.right
    } else if (node.left && !leftSubtreeStaged) {
      leftSubtreeStaged = true
      node = node.left
    } else {
      if (leftSubtreeStaged) {
        return node.value
      } else {
        return parentValue
      }
    }
  }
}
  // // we traverse down the right hand side of the tree keeping track of the current node and its parent (the 2nd largest node)
  // if (treeRoot.right) {
  //   nodes.push({
  //     parentValue: treeRoot.value,
  //     node: treeRoot.right
  //   })
  //   while (nodes.length) {
  //     const nodeObj = nodes.pop()
  //     const node = nodeObj.node
  //     if (node.right) {
  //       nodes.push({
  //         parentValue: node.value,
  //         node: node.right
  //       })
  //     } else {
  //       return nodeObj.parentValue
  //     }
  //   }
  // // we traverse down the left hand side of the tree, always looking right, acknowledging that the treeRoot is the largest node, and that the 2nd largest node will be at the bottom of the left hand side of the tree on the right
  // } else {
  //   nodes.push(treeRoot.left)
  //   while (nodes.length) {
  //     const node = nodes.pop()
  //     if (node.right) {
  //       nodes.push(node.right)
  //     } else {
  //       return node.value
  //     }
  //   }
  // }

// function findLargest(treeRoot) {
//   const node = treeRoot
//   while (node.right) {
//     node = node.right
//   }
//   return node
// }
