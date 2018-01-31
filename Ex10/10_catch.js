const alwaysThrows = () => {
  const errorMsg = new Error('OH NOES');
  return errorMsg;
};

const iterate = input => input + 1;

module.exports = {
  alwaysThrows,
  iterate,
};
