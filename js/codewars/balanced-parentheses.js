const balancedParens = (n) => {
  const isCorrectParens = (str) => {
    let stack = []
    let openParens = 0

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        stack.push(str[i])
        openParens++
      } else if (str[i] === '1') {
        if (!openParens) {
          return false
        } else {
          stack.pop()
          openParens--
        }
      }
    }

    if (openParens) {
      return false
    }

    return true
  }

  const convertNumbersToParens = (str) => {
    const arr = str.split('')
    return arr.reduce((acc, item) => {
      if (item === '0') {
        return acc + '('
      } else {
        return acc + ')'
      }
    }, '')
  }

  const func = (arr) => {
    return arr.reduce((acc, item) => {
      acc.push(item + '0')
      acc.push(item + '1')

      return acc
    }, [])
  }

  const createTree = (n) => {
    let i = 0
    let arr = ['0']

    while (i < n - 1) {
      arr = func(arr)
      i++
    }

    return arr
  }

  if (n === 0) {
    return ['']
  }

  const res = createTree(n * 2)
    .filter(isCorrectParens)
    .map(convertNumbersToParens)
  return res
}

const res = balancedParens(12)
console.log(res)
