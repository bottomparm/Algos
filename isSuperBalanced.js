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

function isBalanced(treeRoot) {

  // Determine if the tree is superbalanced

  // tree with no nodes is superbalanced
  if (!treeRoot) {
    return true
  }

  let leafDepths = []
  let nodes = []

  nodes.push([treeRoot, 0])

  while (nodes.length) {
    const nodePair = nodes.pop()
    const node = nodePair[0]
    const depth = nodePair[1]

    // this node is a leaf
    if (!node.left && !node.right) {
      if (!leafDepths.includes(depth)) {
        leafDepths.push(depth)
        if (leafDepths.length > 2 || (leafDepths.length === 2 && Math.abs(leafDepths[0] - leafDepths[1]) > 1)) {
          return false
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1])
      }
      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }

  return true
}