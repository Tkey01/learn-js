const numbersDictionary = [
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ['X', 'XX', 'XXX', 'XL', 'L', 'lX', 'LXX', 'LXXX', 'XC'],
  ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  ['M', 'MM', 'MMM'],
]

const getNumbers = (x) =>
  x
    .toString()
    .split('')
    .map((str) => Number(str))

/*
  type: the type of number:
  0 - units
  1 - dozens
  2 - hundreds
  3 - thousands
*/
const getRomanNumber = (number, type) =>
  numbersDictionary[type][number - 1] || ''

// 1 < x <= 3999
const intToRoman = (x) => {
  const numbersArray = getNumbers(x)
  let res = ''

  for (let i = 0; i < numbersArray.length; i++) {
    res += getRomanNumber(numbersArray[i], numbersArray.length - 1 - i)
  }

  return res
}

console.log(intToRoman(1025))
