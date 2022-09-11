var MinStack = function () {
  this.min = undefined
  this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (value) {
  let newNode = {
    value,
  }
  if (!this.stack.length) {
    this.min = newNode
  }
  if (value < this.min.value && this.stack.length) {
    newNode.prev = this.min
    this.min = newNode
  }
  this.stack.push(newNode)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.stack.length) return

  const deletedNode = this.stack.pop()

  if (deletedNode === this.min) {
    this.min = this.min.prev
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.stack.length) return

  return this.stack[this.stack.length - 1].value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (!this.stack.length) return

  return this.min.value
}

var obj = new MinStack()
console.log(obj.push(-2))
console.log(obj.push(0))
console.log(obj.push(-3))
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.top())
console.log(obj.getMin())
