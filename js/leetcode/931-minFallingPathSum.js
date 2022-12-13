var minFallingPathSum = function (A) {
  const size = A.length

  if (size === 1) return A[0][0]

  let prev = A[0]

  for (let i = 1; i < size; i++) {
    let next = []

    for (let j = 0; j < size; j++) {
      const sum =
        A[i][j] +
        Math.min(
          j > 0 ? prev[j - 1] : Infinity,
          prev[j],
          j < size - 1 ? prev[j + 1] : Infinity,
        )

      next.push(sum)
    }

    prev = next
  }

  return Math.min(...prev)
}

const generateRandomMatrix = (n) => {
  let res = []

  for (let i = 0; i < n; i++) {
    res[i] = []
    for (let j = 0; j < n; j++) {
      res[i][j] =
        Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1)
    }
  }

  return res
}

const m = generateRandomMatrix(20)

console.log(minFallingPathSum(m))
