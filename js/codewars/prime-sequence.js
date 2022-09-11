const reverse = (str) => {
  let res = ''

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
  }

  return res
}

const isPrime = (number) => {
  const lastMultiplier = Math.floor(Math.sqrt(number))
  for (let i = 2; i <= lastMultiplier; i++) {
    if (!(number % i)) return false
  }

  return true
}

const nextPrime = (number) => {
  let newPrime = number + 1

  while (!isPrime(newPrime)) {
    newPrime++
  }

  return newPrime
}

const prevPrime = (number) => {
  let newPrime = number - 1 || 1

  while (!isPrime(newPrime)) {
    newPrime--
  }

  return newPrime
}

const pullNumbers = (primeStr, left, right) => {
  let res = ''

  for (let i = right; i >= left; i--) {
    res += primeStr[i];
  }

  return res
}

const solve = (targetIndex, count) => {
  let currentPrime = 1
  let currentIndex = 0
  let currentCount = count
  let res = ''

  while (currentIndex < targetIndex + count) {
    currentPrime = nextPrime(currentPrime)
    currentIndex += String(currentPrime).length
  }

  while (currentCount) {
    const primeStr = String(currentPrime)
    const right = primeStr.length - (currentIndex - targetIndex - currentCount) - 1
    const left = right + 1 - currentCount > 0 ? right + 1 - currentCount : 0
    const pulledNumbers = pullNumbers(primeStr, left, right)

    res += pulledNumbers

    currentCount -= pulledNumbers.length

    if (currentCount) {
      currentIndex -= primeStr.length
      currentPrime = prevPrime(currentPrime)
    }
  }

  res = reverse(res)

  return res
}

const res = solve(2000000, 5)
console.log('result -', res);
