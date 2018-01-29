const promise = require('./2_fulfill');

describe('Functionality of promise: ', () => {
  // jest.useFakeTimers();
  test('Should resolve to the given string: ', () => {
    // promise.resolve('HELLO');
    expect(promise).resolves.toBe('FULFILLED!');
  });
});
