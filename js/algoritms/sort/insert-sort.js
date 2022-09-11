const arr = [1, 3, 4, 2]

const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const x = arr[i]
    let j = i
    while (j > 0 && arr[j - 1] > x) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = x
  }

  return arr
}

console.log(insertSort(arr))
