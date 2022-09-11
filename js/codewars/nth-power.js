const modifiedSum = (a, n) => {
  let i = 0
  let sum1 = 0

  while (i < a.length) {
    sum1 = sum1 + Math.pow(a[i], n)
    i++
  }

  let j = 0
  let sum2 = 0


  while (j < a.length) {
    sum2 = sum2 + a[j]
    j++
  }

  const res = sum1 - sum2


  return res
}

modifiedSum([1, 2, 3], 3)
