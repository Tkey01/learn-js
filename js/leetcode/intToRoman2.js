const dict = [
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['M', 'MM', 'MMM'],
]

const getRomanNumber = (number, type) =>
  numbersDictionary[type][number - 1] || ''

// 1 < x <= 3999
const intToRoman = (x) =>
  x
    .toString()
    .split('')
    .reduce(
      (str, num, i, arr) => (str += dict[arr.length - i - 1][num - 1] || ''),
      '',
    )

console.log(intToRoman(1994))
