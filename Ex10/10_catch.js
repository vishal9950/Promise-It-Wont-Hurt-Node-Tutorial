const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (input) => {
  console.log(input);
  return input + 1;
};

const catchMe = err =>
  // console.log(err.message);
  err.message;
const promise = Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(catchMe);

module.exports = {
  alwaysThrows,
  iterate,
  promise,
};
