const grid =
  'B p E D y o q F q n C H v x K K D \n' +
  'C r I y o w A n y F t B B q J C u B t z I A F I \n' +
  'F H u s s y H I D n B \n' +
  'L o J u F D F J A I s G s u o x E v \n' +
  'L r x G J K y x o I E n w G H J M M z w F M r G \n' +
  'K r r a b c d s w k'

let res = ''

let arr = grid
  .split('\n')
  .map((item) => item.trim())
  .map((item) => item.split(' '))

const rowSize = Math.max(...arr.map((item) => item.length))
const colSize = arr.length

arr = arr.map((row) =>
  [...new Array(rowSize)].map((_, colIndex) => row[colIndex] || null),
)

let i = 0
let j = 0
let isUpDirection = false

// First line
while (arr[i] && arr[i][j]) {
  res += arr[i][j]

  if (i === 0) {
    isUpDirection = false
  } else if (i === colSize - 1) {
    isUpDirection = true
  }

  i = isUpDirection ? i - 1 : i + 1
  j++
}

console.log(res)
