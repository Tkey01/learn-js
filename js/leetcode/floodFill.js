/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const isValid = (image, x, y, startColor) =>
  Array.isArray(image[x]) &&
  Number.isInteger(image[x][y]) &&
  image[x][y] === startColor

const getNeighbors = (image, x, y, visited, startColor) => {
  let res = []

  if (isValid(image, x + 1, y, startColor) && !visited[`${x + 1}${y}`]) {
    res.push({ x: x + 1, y })
  }
  if (isValid(image, x, y + 1, startColor) && !visited[`${x}${y + 1}`]) {
    res.push({ x, y: y + 1 })
  }
  if (isValid(image, x - 1, y, startColor) && !visited[`${x - 1}${y}`]) {
    res.push({ x: x - 1, y })
  }
  if (isValid(image, x, y - 1, startColor) && !visited[`${x}${y - 1}`]) {
    res.push({ x, y: y - 1 })
  }

  return res
}

const floodFill = (image, sr, sc, color) => {
  let stack = []
  let visited = {}
  const startColor = image[sr][sc]

  stack.push({ x: sr, y: sc })
  visited[`${sr}${sc}`] = true
  image[sr][sc] = color

  while (stack.length) {
    const cur = stack.pop()
    const neighbors = getNeighbors(image, cur.x, cur.y, visited, startColor)
    stack.push(...neighbors)

    neighbors.forEach((n) => {
      visited[`${n.x}${n.y}`] = true
      image[n.x][n.y] = color
    })
  }

  return image
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
)
