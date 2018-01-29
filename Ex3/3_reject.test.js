const exp = require('./3_reject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => {
    expect(exp.promise).resolves.toBe('Hello');
  });

  test('Should reject the async func with error: ', () => {
    expect(exp.promise).rejects.toBe('error');
  });
});

describe('Functionality of onReject: ', () => {
  global.console.log = jest.fn();
  test('Should be called 1 time(s): ', () => {
    exp.onReject('Hello');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
