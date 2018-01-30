const promiseResolve = Promise.resolve('SOME VALUE!');

const promiseReject = Promise.reject(new Error('Error msg'));

promiseReject.catch((err) => {
  console.error(err.message);
});

promiseResolve.then(console.log);

module.exports = {
  promiseResolve,
  promiseReject,
};
