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

const isBinarySearchTree = (treeRoot) => {
  if (treeRoot.left === null && treeRoot.right === null) return true
  else if (treeRoot.left > treeRoot.value || treeRoot.right < treeRoot.value) return false

  return (treeRoot.left ? isBinarySearchTree(treeRoot.left) : true &&
          treeRoot.right ? isBinarySearchTree(treeRoot.right) : true)
}