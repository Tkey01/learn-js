function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments) // (1)

    isThrottled = true

    setTimeout(function () {
      isThrottled = false // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

const getId = (id) => {
  console.log(id)
}

const func = throttle(getId, 1000)

func(1)
setTimeout(() => func(2), 100)
setTimeout(() => func(3), 200)
setTimeout(() => func(4), 300)
setTimeout(() => func(5), 400)
setTimeout(() => func(6), 500)
setTimeout(() => func(7), 600)
setTimeout(() => func(8), 1100)
setTimeout(() => func(9), 2200)
