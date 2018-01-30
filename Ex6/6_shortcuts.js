const promiseResolve = Promise.resolve('SOME VALUE!');

promiseResolve.then(console.log);

module.exports = promiseResolve;
