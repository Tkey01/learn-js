function daysRepresented(trips) {
  let obj = {}

  for (let i = 0; i < trips.length; i++) {
    for (let j = trips[i][0]; j <= trips[i][1]; j++) {
      if (!(j in obj)) {
        obj[j] = true
      }
    }
  }

  return Object.keys(obj).length
}

console.log(daysRepresented([[60, 88],
[49, 79],
[85, 108],
[18, 31],
[86, 95],
[258, 293]]))
