const alwaysThrows = () => {
  const errorMsg = new Error('OH NOES');
  return errorMsg;
};

module.exports = alwaysThrows;
