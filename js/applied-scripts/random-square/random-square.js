let squares = { 1: 0, 2: 0, 3: 0, 4: 0 }
let isRunning = false

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

const balanced = (value) => {
  if (value < 0) {
    return 0
  }

  if (value > 360) {
    return 360
  }

  return value
}
const square = document.querySelector('.square')

const move = () => {
  // let x = (square.style.left =
  //   balanced(parseInt(square.style.left) + randomInteger(-360, 360)) + 'px')
  // let y = (square.style.top =
  //   balanced(parseInt(square.style.top) + randomInteger(-360, 360)) + 'px')

  let x = (square.style.left = window.rando(0, 360) + 'px')
  let y = (square.style.top = window.rando(0, 360) + 'px')

  x = parseInt(x)
  y = parseInt(y)

  if (x <= 180 && y <= 180) {
    squares[1]++
  } else if (x <= 180 && y > 180) {
    squares[3]++
  } else if (x > 180 && y <= 180) {
    squares[2]++
  } else if (x > 180 && y > 180) {
    squares[4]++
  }
}

let interval

const cycle = () => {
  square.style.left = '180px'
  square.style.top = '180px'

  interval = setInterval(() => {
    move()
  }, 100)
}

const toggle = (e) => {
  e.preventDefault()

  if (e.keyCode === 32) {
    if (isRunning) {
      clearInterval(interval)
      console.log(squares)
      isRunning = false
    } else {
      console.log('quantum machine is started, good luck have fun!')
      squares = { 1: 0, 2: 0, 3: 0, 4: 0 }
      isRunning = true
      cycle()
    }
  }
}

document.querySelector('html').addEventListener('keypress', toggle)
