function numIslands(grid) {
  //trivial
  if (grid.length == 0 || grid[0].length == 0) return 0

  let m = grid.length
  let n = grid[0].length
  let islandCount = 0

  // Holds the tiles part of the current island
  let islandQueue = []

  // Helper function
  // Returns arr of adjacent cells that are land
  let findAdj = (x, y) => {
    let adjNodes = []
    if (x + 1 < m && grid[x + 1][y] == '1') {
      adjNodes.push({ x: x + 1, y: y })
    }
    if (y + 1 < n && grid[x][y + 1] == '1') {
      adjNodes.push({ x: x, y: y + 1 })
    }
    if (x - 1 >= 0 && grid[x - 1][y] == '1') {
      adjNodes.push({ x: x - 1, y: y })
    }
    if (y - 1 >= 0 && grid[x][y - 1] == '1') {
      adjNodes.push({ x: x, y: y - 1 })
    }
    return adjNodes
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '0') continue

      // We found a new island
      islandQueue.push({ x: i, y: j })

      islandCount += 1

      // Change all tiles part of this island to 0 to avoid it in further scans
      while (islandQueue.length) {
        let { x: curX, y: curY } = islandQueue.shift()

        if (grid[curX][curY] == '0') {
          continue
        }
        grid[curX][curY] = '0'

        // Mark cells belonging to this island
        // If we want to DFS
        // islandQueue = [...(findAdj(curX, curY)), ...islandQueue];

        // If we want to BFS
        islandQueue = islandQueue.concat(findAdj(curX, curY))
      }
    }
  }

  return islandCount
}

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '1', '0'],
    ['0', '0', '1', '1', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]),
)
