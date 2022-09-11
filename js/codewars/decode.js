function encode(string) {
  return string.split('').reduce((acc, item) => {
    switch (item) {
      case 'a':
        return acc + '1'
      case 'e':
        return acc + '2'
      case 'i':
        return acc + '3'
      case 'o':
        return acc + '4'
      case 'u':
        return acc + '5'
      default:
        return acc + item
    }
  }, '')
}

const res = encode('hi there')
console.log(res);
