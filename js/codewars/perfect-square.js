function solve(n) {
  let value = 1
  let currentSquare

  for (let i = value; i <= n; i++) {
    currentSquare = n + i * i

    const cond = Math.sqrt(currentSquare) === Math.floor(Math.sqrt(currentSquare))
    if (cond) {
      return i * i
    }
  }

  return -1
}

const res = solve(13)
