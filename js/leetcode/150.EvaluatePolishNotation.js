/**
 * @param {string[]} tokens
 * @return {number}
 */

const calc = (operator, number1, number2) => {
  if (operator === '-') {
    return number1 - number2
  }
  if (operator === '+') {
    return number1 + number2
  }
  if (operator === '/') {
    return number1 / number2
  }
  if (operator === '*') {
    return number1 * number2
  }
}
var evalRPN = function (tokens) {
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === '*' ||
      tokens[i] === '/' ||
      tokens[i] === '+' ||
      tokens[i] === '-'
    ) {
      const number2 = stack.pop()
      const number1 = stack.pop()
      stack.push(parseInt(calc(tokens[i], +number1, +number2)))
    } else {
      stack.push(tokens[i])
    }
  }

  return stack[0]
}
