const es6 = require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);

module.exports = promise;
