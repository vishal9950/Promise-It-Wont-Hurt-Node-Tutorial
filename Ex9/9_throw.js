const parsePromised = () => {
  const promise = new Promise((resolve) => {
    resolve('Resolved');
  });
  return promise;
};

parsePromised(process.argv[2]).then(console.log, console.log);

module.exports = parsePromised;
