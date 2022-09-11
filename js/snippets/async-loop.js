const emulate = (id, ms, isError) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(id)
      } else {
        resolve(id)
      }
    }, ms)
  })

const promises = [
  emulate(1, 5000, false),
  emulate(2, 2000, false),
  emulate(3, 1000, false),
]

/**
 * Первые три цикла абсолютно одинаковы:
 * Сработают последовательно,
 * функция дождётся выполнения всех промисов и потом выведет 'done'
 */
async function loop1() {
  for (let i = 0; i < promises.length; i++) {
    const res = await promises[i]
    console.log(res)
  }
  console.log('done')
}

async function loop2() {
  for await (const res of promises) {
    console.log(res)
  }
  console.log('done')
}

async function loop3() {
  for (const promise of promises) {
    const res = await promise
    console.log(res)
  }
  console.log('done')
}

/**
 * Все асинхронные коллбеки в forEach запустятся один за другим,
 * внутри они конечно будут ждать свои await-ы,
 * однако функция loop4 не будет ждать их самих
 * В итоге сначала выведется 'done', а потом результаты промисов
 * ПРИЧЕМ результаты будут в произвольном порядке (кто быстрее),
 * а не в порядке вызова (следования в массиве промисов)
 */
async function loop4() {
  promises.forEach(async (promise) => {
    try {
      const res = await promise
      console.log('success -', res)
    } catch (e) {
      console.log('error -', e)
    }
  })
  console.log('done')
}

/**
 * Тут фукнция сначала дождётся выполнения всех промисов,
 * а потом уже обработает их результаты в правильной последовательности,
 * такой, как они следуют друг за другом в массиве
 * 'done' конечно же будет в конце вывода всех результатов
 */
async function loop5() {
  for (const res of await Promise.all(promises)) {
    console.log(res)
  }
  console.log('done')
}

loop5()
