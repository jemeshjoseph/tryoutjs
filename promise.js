function add(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject('Inputs should be only numbers.');
      // OR
      // reject(new Error('Inputs should be only numbers.'));
    } else {
      resolve(a + b);
    }
  });
}

add('asas', 20).then((sum) => {
  console.log('Sum: ', sum);
}, (err) => {
  console.log('Error 1: ', err); // If this error block is not there catch will fire
}).catch(err => {
  console.log('Error 2: ', err);
}).finally(() => {
  console.log('Final block 1');
});

add(10, 20).then((sum) => {
  console.log('Sum: ', sum);
}, (err) => {
  console.log('Error 1: ', err); // If this error block is not there catch will fire
}).catch(err => {
  console.log('Error 2: ', err);
}).finally(() => {
  console.log('Final block  2');
});