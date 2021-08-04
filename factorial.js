function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}

console.log('5!', factorial(5));
console.log('4!', factorial(4));

const num = prompt('Enter a number to find factorial:');
alert(`${num}! = ${factorial(num)}`);
