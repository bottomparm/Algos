// Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

// Here's a sample binary tree node class:

  class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
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

// iterative solution
function isBinarySearchTree(treeRoot) {

  // no root node would be a valid binary search tree!
  if (!treeRoot) {
    return true
  }

  const nodes = []
  nodes.push({
    node: treeRoot,
    upperBound: Number.POSITIVE_INFINITY,
    lowerBound: Number.NEGATIVE_INFINITY
  })

  while (nodes.length) {
    const {node, upperBound, lowerBound} = nodes.pop()

    if ((node.value <= lowerBound) || (node.value >= upperBound)) {
      return false
    }

    if (node.left) {
      nodes.push({
        node: node.left,
        upperBound: node.value,
        lowerBound: lowerBound
      })
    }
    if (node.right) {
      nodes.push({
        node: node.right,
        upperBound: upperBound,
        lowerBound: node.value
      })
    }
  }

  return true
}

// recursive solution

function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
  if (!treeRoot) return true

  lowerBound = (typeof lowerBound !== 'undefined' ? lowerBound : Number.NEGATIVE_INFINITY)
  upperBound = (typeof upperBound !== 'undefined' ? upperBound : Number.POSITIVE_INFINITY)

  if (treeRoot.value <= lowerBound || treeRoot.value >= upperBound) {
    return false
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
         isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound)
}