const move = (direction, i, j) => {
  switch (direction) {
    case 'right':
      return [i, j + 1]
    case 'left':
      return [i, j - 1]
    case 'up':
      return [i + 1, j]
    case 'down':
      return [i - 1, j]
  }
}

const isCorrectNumber = (value) => parseInt(value, 10) >= 0 && parseInt(value, 10) <= 9

const interpret = (str) => {
  const arr = str
    .split('\n')
    .map(item => item.split(''))
  let input = ''
  let stack = []

  let i = 0
  let j = 0
  let direction = 'right'

  while (input !== '@') {
    if (isCorrectNumber(input)) {
      stack.push(input)
      [i, j] = move(direction, i, j)
    }
  }

  return arr
}

console.log(interpret('>987v>.v\nv456<  :\n>321 ^ _@'));
