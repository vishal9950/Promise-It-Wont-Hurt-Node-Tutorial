const parsePromised = (jsonInput) => {
  const promise = new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(jsonInput));
    } catch (err) {
      reject(err.message);
    }
  });
  return promise;
};

// parsePromised(process.argv[2]).then(console.log, console.log);
parsePromised().then(console.log, console.log);

module.exports = parsePromised;
