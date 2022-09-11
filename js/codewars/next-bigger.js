const numberToArr = (number) => String(number)
  .split('')
  .map(Number)

const arrToNumber = (arr) => Number(arr.join(''))

const isValidSeq = (curNumber, sourceNumber, arr) => {
  arr = arr.slice().sort((a, b) => b - a)
  const numberToArr = String(curNumber).split('').map(Number)
  const resNumber = Number(numberToArr.concat(arr).join(''))

  if (resNumber > sourceNumber) {
    return true
  }

  return false
}

const nextBigger = (number) => {
  let n = String(number).length
  let arr = numberToArr(number)
    .sort((a, b) => a - b)
  let i = 0
  let currentNumber = ''

  while (i < n) {
    let isFindedSeq = false

    for (let j = 0; j < arr.length; j++) {
      const copyNumber = currentNumber + arr[j]
      let copyArr = arr.slice()
      copyArr.splice(copyArr.indexOf(Number(copyNumber[copyNumber.length - 1])), 1)

      if (isValidSeq(Number(copyNumber), number, copyArr)) {
        currentNumber = copyNumber
        arr = copyArr.sort((a, b) => a - b)
        break
      }
    }

    if (isFindedSeq) {
      return -1
    }

    i++
  }

  if (!currentNumber) {
    return -1
  }


  return Number(currentNumber)
}


console.log(nextBigger(6192));
