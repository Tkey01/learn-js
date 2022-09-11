/*
  Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path
  from the root node down to the farthest leaf node.
*/

const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
}

const maxDepth = (node) => {
  if (!node) {
    return 0
  }

  const leftLength = maxDepth(node.left)
  const rightLength = maxDepth(node.right)

  return Math.max(leftLength, rightLength) + 1
}
const res = maxDepth(root)
console.log(res)
