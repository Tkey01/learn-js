var MyQueue = function () {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.splice(0, 1)[0]
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack[0]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !Boolean(this.stack.length)
}
