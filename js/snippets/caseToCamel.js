const isArray = function(a) {
  return Array.isArray(a)
}

const isObject = function(o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

function toCamel(string) {
  return string.replace(/(_\w)/g, (m) => {
    return m[1].toUpperCase()
  })
}

keysToCamel = function(o) {
  if (isObject(o)) {
    const n = {}

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k])
    })

    return n
  } else if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i)
    })
  }

  return o
}

const obj = {
  user_data: {
    a: 1,
    b: {
      a_data: 'adsda',
      b_data: [
        {
          d_n_d: '123'
        }
      ]
    }
  },
  tags: [1, 2, 3]
}

console.log('keysToCamel(obj) - ', keysToCamel(obj).userData.b.bData)
