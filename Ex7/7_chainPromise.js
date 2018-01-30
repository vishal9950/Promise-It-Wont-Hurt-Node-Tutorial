// for testing only

const first = () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve('String from 1');
  });
  return promise1;
};

const second = (fromFirst) => {
  const promise2 = new Promise((resolve, reject) => {
    resolve(fromFirst);
  });
  return promise2;
};

// testing code ends

const firstPromise = first();

const secondPromise = firstPromise.then(val => second(val));

secondPromise.then(console.log);

module.exports = {
  firstPromise,
  secondPromise,
};
