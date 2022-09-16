/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}

var cloneGraph = function (node) {
  if (!node) return null
  let map = new Map()
  function cloneDFS(node) {
    if (map.has(node)) {
      return map.get(node)
    }
    let copy = new Node(node.val)
    map.set(node, copy)
    for (let i = 0; i < node.neighbors.length; i++) {
      copy.neighbors.push(cloneDFS(node.neighbors[i]))
    }
    return copy
  }
  return cloneDFS(node) || null
}

const gr = new Node(10, [new Node(2), new Node(1), new Node(4)])

console.log(gr)
console.log(cloneGraph(gr))
