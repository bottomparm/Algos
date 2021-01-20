// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let nodesToVisit = root ? [root] : []
  let nextLevelNodes = []
  let levelOrderTraversal = []
  let currLevelVals = []
  while (nodesToVisit.length) {
      let currNode = nodesToVisit.shift()
      currLevelVals.push(currNode.val)
      if (currNode.left) nextLevelNodes.push(currNode.left)
      if (currNode.right) nextLevelNodes.push(currNode.right)
      
      if (!nodesToVisit.length) {
          levelOrderTraversal.push(currLevelVals)
          nodesToVisit = nextLevelNodes
          nextLevelNodes = []
          currLevelVals = []
      }
  }
  return levelOrderTraversal
}


// recursive approach, nice and clean

var levelOrder = function(root) {
  let arr = [];
  
  rec(arr,root,0)
  
  return arr;
};

let rec = (arr,node,depth) => {
  if(!node) return
  if(!arr[depth]){
      arr[depth] = [node.val];
  }else{
      arr[depth].push(node.val)
  }
  rec(arr,node.left,depth+1)
  rec(arr,node.right,depth+1)
}
