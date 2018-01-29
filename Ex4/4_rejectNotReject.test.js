const exp = require('./4_rejectNotReject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => {
    expect(exp.promise).resolves.toBe('Hello');
  });

  test('Should reject the async func with error: ', () => {
    expect(exp.promise).rejects.toBe('error');
  });
});
