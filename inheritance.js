/**
 * Put the JavaScript code in this file
 */

// Inheritance of Object Example

function a(a) {
  this.a = a;
}

a.prototype.getA = function () {
  return this.a;
}

function b(x, y) {
  // Class a() inside the context of b. This makes b inherits the private properties a.
  a.call(this, x);
  this.b = y;
}

// b inheriting the prototype of a. When this is done constructor of b changes to a.
b.prototype = Object.create(a.prototype);
// Resetting the constructor of b as b itself.
b.prototype.constructor = b;
b.prototype.getB = function () {
  return this.b;
}

let obj = new b(50, 100);

console.log(obj);
console.log(obj.getB()); // Consoles 100

// obj inherits getA() from the prototype chain
console.log(obj.getA()); // Consoles 50