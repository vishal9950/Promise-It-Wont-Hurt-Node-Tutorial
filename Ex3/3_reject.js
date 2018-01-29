const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

const onReject = (error) => {
  console.log(error.message);
};

promise.then((msg) => {
  onReject(msg);
}, (err) => {
  onReject(err);
});

module.exports = {
  promise,
  onReject,
};
