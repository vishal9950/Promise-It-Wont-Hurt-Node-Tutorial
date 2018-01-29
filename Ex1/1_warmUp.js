const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied!`);
    return false;
  }
  return true;
};

const asyncLog = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  setTimeout(console.log(input), 300);
  return true;
};

module.exports = asyncLog;
