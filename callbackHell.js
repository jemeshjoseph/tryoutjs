// Function add using callback
function add(num1, num2, callback) {
  callback(num1 + num2);
}

add(10, 20, function (sum) {
  console.log('Sum: ', sum);
});

// Function multiply using callback
function multiply(num1, num2, callback) {
  callback(num1 * num2);
}

multiply(10, 20, (product) => {
  console.log('Product: ', product);
});

// Function division using callback
function division(num1, num2, callback) {
  callback(num1 / num2);
}

division(10, 20, (result) => {
  console.log('Division result: ', result);
});

// *************************************************************
// Callback hell example ADD + MULTIPLY + DIVISION
console.log('Callback Hell example');

add(10, 20, function (sum) {
  console.log('Sum: ', sum);
  multiply(sum, sum, function (product) {
    console.log('Product: ', product);
    division(product, 10, function (result) {
      console.log('Final result: ', result);
    });
  });
});

