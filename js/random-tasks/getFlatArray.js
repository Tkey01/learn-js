const a = [1, 0, 2, [3, 4], [5, [6, [7, 8]]]]

const getElem = (elem, flatFn) => {
  if (Array.isArray(elem)) {
    if (elem.length) {
      return [...flatFn(elem)]
    }

    return []
  }

  return [elem]
}

const getFlatArray = ([first, ...arr]) => {
  return [...getElem(first, getFlatArray), ...getElem(arr, getFlatArray)]
}

const getFlatArray2 = (arr) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...getFlatArray2(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

console.log(getFlatArray(a))
console.log(getFlatArray2(a))
