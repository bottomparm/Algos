// recursive solution
const depth = (root) => {
	return root == null ? 0 : Math.max(depth(root.left), depth(root.right)) + 1
}