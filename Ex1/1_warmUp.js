const validateInput = (input) => {
  if (input === null) {
    console.log('Err1: null args supplied!');
    return false;
  }
  return true;
};

const asyncLog = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  return true;
};

module.exports = asyncLog;
