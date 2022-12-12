const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: -2,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: -2,
    left: null,
    right: null,
  },
}
const maxPathSum = (root) => {
  let max = Number.MIN_SAFE_INTEGER
  calcMaxPath(root)

  function calcMaxPath(node) {
    if (!node) {
      return 0
    }
    const leftSum = Math.max(0, calcMaxPath(node.left))
    const rightSum = Math.max(0, calcMaxPath(node.right))
    const currPath = leftSum + node.val + rightSum

    max = Math.max(currPath, max)
    return Math.max(node.val + leftSum, node.val + rightSum)
  }

  return max
}

console.log(maxPathSum(root))
