const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = input => input + 1;

module.exports = {
  alwaysThrows,
  iterate,
};
