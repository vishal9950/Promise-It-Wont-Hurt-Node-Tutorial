const es6 = require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then((msg) => {
  console.log(msg);
});

module.exports = promise;
