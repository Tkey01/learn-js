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
 * @return {number}
 */
const tree = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
    },
  },
  right: {
    val: 4,
    left: {
      val: 1,
    },
    right: {
      val: 5,
    },
  },
}

const getCountOfGoodWays = function (node, valuesBehind) {
  if (!node) {
    return 0
  }

  let countOfGoodWays = 0
  const isThisNodeGood = valuesBehind.every((value) => value <= node.val)

  if (isThisNodeGood) {
    countOfGoodWays++
  }

  valuesBehind = [...valuesBehind, node.val]

  return (
    countOfGoodWays +
    getCountOfGoodWays(node.left, valuesBehind) +
    getCountOfGoodWays(node.right, valuesBehind)
  )
}

const goodNodes1 = function (root) {
  const valuesBehind = []

  return getCountOfGoodWays(root, valuesBehind)
}

const goodNodes2 = function (root) {
  let isGoodNode = (prev, nod) => {
    if (nod === null || nod === undefined) return 0
    return prev <= nod.val
      ? 1 + isGoodNode(nod.val, nod.right) + isGoodNode(nod.val, nod.left)
      : 0 + isGoodNode(prev, nod.right) + isGoodNode(prev, nod.left)
  }
  return isGoodNode(root.val, root)
}

const count = goodNodes2(tree)
console.log(count)
