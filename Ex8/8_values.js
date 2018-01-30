const attachTitle = arg => `DR. ${arg}`;

const promise = new Promise((resolve, reject) => {
  resolve('MANHATTAN');
});

const prom2 = promise.then(attachTitle);
prom2.then(console.log);

module.exports = {
  promise,
  prom2,
};
