class MyCircularQueue {
  constructor(k) {
    this.k = k
    this.n = 0
  }

  Front() {
    return this.n ? this.front.value : -1
  }

  Rear() {
    return this.n ? this.rear.value : -1
  }

  enQueue(value) {
    if (this.isFull()) {
      return false
    }

    if (this.isEmpty()) {
      this.front = {
        next: null,
        value,
      }
      this.rear = this.front
    } else {
      const newItem = {
        next: this.front,
        value,
      }
      this.rear.next = newItem
      this.rear = newItem
    }

    this.n += 1

    return true
  }

  deQueue() {
    if (this.isEmpty()) {
      return false
    }

    if (this.n === 1) {
      this.front = null
      this.rear = null
    } else if (this.n === 2) {
      this.front = this.rear
      this.front.next = null
    } else {
      this.front = this.front.next
      this.rear.next = this.front
    }

    this.n -= 1
    return true
  }

  isEmpty() {
    return this.n === 0 ? true : false
  }

  isFull() {
    return this.n === this.k ? true : false
  }
}

const myCircularQueue = new MyCircularQueue(7)
console.log(myCircularQueue.enQueue(0))
console.log(myCircularQueue.Front())
console.log(myCircularQueue.enQueue(4))
console.log(myCircularQueue.Rear())
console.log(myCircularQueue.enQueue(6))
console.log(myCircularQueue.enQueue(3))
console.log(myCircularQueue.deQueue())
console.log(myCircularQueue.deQueue())

console.log(myCircularQueue.Front())
console.log(myCircularQueue.Rear())
