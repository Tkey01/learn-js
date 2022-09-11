const DOORS_COUNT = 3

/**
 * Игра: есть 3 двери, за 2-мя самокаты, за 1-й машина
 * Игрок выбирает случайно первую дверь
 * Ведущий выбирает дверь из 2-х оставшихся, такую, что она
 * обязательно с самокатом
 * Игроку даётся выбор: либо оставить свой 1-й выбор, либо
 * поменять его на другую оставшуюся дверь
 *
 * При первой стратегии вероятность выигрыша - 33.33%
 * При второй - 66.66%
 */

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const randomBool = () => Boolean(randomInteger(0, 1))

const fillDoors = () => {
  const doors = []

  for (let i = 0; i < DOORS_COUNT - 1; i++) {
    doors.push(false)
  }

  const randomIndex = randomInteger(0, DOORS_COUNT - 1)
  doors[randomIndex] = true

  return doors
}

const calculateSecondSelect = (doors, firstSelect) => {
  const doorIndexes = []

  for (let i = 0; i < DOORS_COUNT; i++) {
    if (i !== firstSelect && doors[i] !== true) {
      doorIndexes.push(i)
    }
  }

  const randomIndex = randomInteger(0, doorIndexes.length - 1)

  return doorIndexes[randomIndex]
}

const calculateThirdSelect = (firstSelect, secondSelect) => {
  const doorIndexes = []

  for (let i = 0; i < DOORS_COUNT; i++) {
    if (i !== firstSelect && i !== secondSelect) {
      doorIndexes.push(i)
    }
  }

  const randomIndex = randomInteger(0, doorIndexes.length - 1)

  return doorIndexes[randomIndex]
}

const selectDoor = () => {
  const doors = fillDoors()

  const firstSelect = randomInteger(0, DOORS_COUNT - 1)
  const secondSelect = calculateSecondSelect(doors, firstSelect)
  const thirdSelect = calculateThirdSelect(firstSelect, secondSelect)

  return { doors, firstSelect, secondSelect, thirdSelect }
}

let count1 = 0
let count2 = 0

for (let i = 0; i < 100000; i++) {
  const { doors, firstSelect, secondSelect, thirdSelect } = selectDoor()

  if (doors[firstSelect]) {
    count1++
  }

  if (doors[thirdSelect]) {
    count2++
  }

  // console.log('doors - ', doors)
  // console.log('firstselect', firstSelect)
  // console.log('secondselect', secondSelect)
  // console.log('thirdSelect', thirdSelect)
  // console.log('------')
}
console.log(count1)
console.log(count2)
