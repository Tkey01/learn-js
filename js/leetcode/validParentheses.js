const isValid = (s) => {
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i])
    } else if (s[i] === map[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      return false
    }
  }

  if (stack.length) return false

  return true
}

console.log(isValid('(){}[]'))
