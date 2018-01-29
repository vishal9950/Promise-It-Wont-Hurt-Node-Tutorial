const exp = require('./4_rejectNotReject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => {
    expect(exp.promise).resolves.toBe('Hello');
  });
});
