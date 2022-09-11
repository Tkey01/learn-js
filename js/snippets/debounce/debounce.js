function debounce(f, ms) {
  let isCooldown = false

  return function () {
    if (isCooldown) return

    f.apply(this, arguments)

    isCooldown = true

    setTimeout(() => (isCooldown = false), ms)
  }
}

const getId = (id) => {
  console.log(id)
}
const func = debounce(getId, 1000)

func(1)
setTimeout(() => func(2), 100)
setTimeout(() => func(3), 200)
setTimeout(() => func(4), 300)
setTimeout(() => func(5), 400)
setTimeout(() => func(6), 500)
setTimeout(() => func(7), 600)
setTimeout(() => func(8), 1100)
setTimeout(() => func(9), 1200)
