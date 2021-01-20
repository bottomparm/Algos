const isBalanced = (treeRoot) => {
  if (!treeRoot) return true

  let leafDepth1 = null
  let leafDepth2 = null
  treeRoot.depth = 0
  let nodes = [treeRoot]
  while (nodes.length) {
    let node = nodes.pop()
    let depth = node.depth
    // we found a leaf
    if (!node.left && !node.right) {
      if (!leafDepth1) leafDepth1 = depth
      else if (!leafDepth2) {
        if (depth >= leafDepth1 - 1 && depth <= leafDepth1 + 1) leafDepth2 = depth
        else return false
      } else {
        if (depth !== leafDepth1 && depth !== leafDepth2) return false
      }
    } else {
      if (node.right) {
        node.right.depth = depth + 1
        nodes.push(node.right)
      }
      if (node.left) {
        node.left.depth = depth + 1
        nodes.push(node.left)
      }
    }
  }
  return true
}