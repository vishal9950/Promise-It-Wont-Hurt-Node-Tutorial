const parsePromised = (jsonInput) => {
  const promise = new Promise((resolve, reject) => {
    let jsonEle;
    try {
      jsonEle = JSON.parse(jsonInput);
    } catch (err) {
      reject(err.message);
    }
    resolve(jsonEle);
  });
  return promise;
};

// parsePromised(process.argv[2]).then(console.log, console.log);
parsePromised().then(console.log, console.log);

module.exports = parsePromised;
