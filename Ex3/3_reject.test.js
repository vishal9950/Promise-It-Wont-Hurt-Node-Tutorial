const promise = require('./3_reject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => {
    expect(promise).resolves.toBe('Hello');
  });
});