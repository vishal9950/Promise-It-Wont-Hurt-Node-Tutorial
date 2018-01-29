const promise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  // reject(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => {
  console.log(error.message);
};

promise.then((msg) => {
  console.log(msg);
}, (err) => {
  onRejected(err);
});

module.exports = {
  promise,
  onRejected,
};
