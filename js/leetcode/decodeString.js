const decodeString = (s) => {
  let stack = []
  let str = ''

  for (char of s) {
    if (char !== ']') {
      stack.push(char)
      continue
    }

    cur = stack.pop()
    str = ''

    while (cur !== '[') {
      str = cur + str
      cur = stack.pop()
    }

    cur = stack.pop()
    let num = ''

    while (!Number.isNaN(Number(cur))) {
      num = cur + num
      cur = stack.pop()
    }

    stack.push(cur)
    stack.push(str.repeat(Number(num)))
  }

  return stack.join('')
}

console.log(decodeString('3[a]2[bc]'))
