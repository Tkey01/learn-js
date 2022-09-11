const multi = 1.01
const months = 36
const adder = 50
let sum = 0

for (let i = 0; i < months; i++) {
  sum = sum * multi + adder
}
sum = Math.floor(sum)

const divider = (sum) => {
  let numbersArr = String(sum).split('')
  let counter =
    numbersArr.length % 3 !== 0
      ? Math.floor(numbersArr.length / 3)
      : Math.floor(numbersArr.length / 3) - 1

  while (counter) {
    numbersArr.splice(numbersArr.length - 3 * counter, 0, ' ')
    counter--
  }

  return numbersArr.join('')
}

console.log(
  `Банк через ${months} месяцев составит - ${divider(sum * 1000)} рублей`,
)
