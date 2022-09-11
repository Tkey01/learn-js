const dict = [
  ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['', 'M', 'MM', 'MMM'],
]

// 1 < x <= 3999
const intToRoman = (x) => {
  let res = ''
  let count = 0

  while (x) {
    const num = x % 10
    res = dict[count][num] + res
    x = Math.floor(x / 10)
    count++
  }

  return res
}

console.log(intToRoman(1994))
