// Solution to Callback hell is Promise Chaining

// Addition using promise
function add(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject(new Error('Inputs should be only numbers.'));
    } else {
      resolve(num1 + num2);
    }
  });
}

add(10, 20)
  .then((sum) => {
    console.log('Sum: ', sum);
  }).catch(err => {
    console.log('Error: ', err);
  });


// Multiplication using promise
function multiply(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject(new Error('Inputs should be only numbers.'));
    } else {
      resolve(num1 * num2);
    }
  });
}

// Division using promise
function division(num1, num2) {
  return new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2)) {
      reject(new Error('Inputs should be only numbers.'));
    } else {
      resolve(num1 / num2);
    }
  });
}

//*******************Promise Chaining********************* */
add(10, 20)
  .then(sum => {
    console.log('Sum: ', sum);
    return multiply(sum, sum);
  })
  .then(product => {
    console.log('Product: ', product);
    return division(product, 10);
  })
  .then(result => {
    console.log('Final result: ', result);
  })
  .catch(err => {
    console.log('Error: ', err);
  });
