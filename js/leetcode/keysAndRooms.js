const canVisitAllRooms = (rooms) => {
  const visited = {}
  const queue = []

  queue.push(0)
  visited[0] = true

  while (queue.length) {
    const currKeys = rooms[queue.pop()]

    currKeys.forEach((keyNumber) => {
      if (!(keyNumber in visited)) {
        queue.push(keyNumber)
        visited[keyNumber] = true
      }
    })
  }

  return Object.keys(visited).length === rooms.length
}

const rooms = [[1, 3], [3, 0, 1], [2], [0]]
console.log(canVisitAllRooms(rooms))
