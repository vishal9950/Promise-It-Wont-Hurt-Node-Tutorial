const attachTitle = arg => `DR. ${arg}`;

const promise = new Promise((resolve, reject) => {
  resolve('MANHATTAN');
});

promise.then(attachTitle).then(console.log);

module.exports = promise;
