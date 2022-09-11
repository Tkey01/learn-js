const randomInteger2 = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

let a = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

const testRandom = () => {
  const number = window.rando(1, 5)
  a[number]++

  return number
}

for (let i = 0; i < 1000000; i++) {
  const res = testRandom()
  //   console.log(res)
}

console.log(a)
