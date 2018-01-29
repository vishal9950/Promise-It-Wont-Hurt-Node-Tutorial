const promise = require('./2_fulfill');

describe('Functionality of promise: ', () => {
  // jest.useFakeTimers();
  test('Should resolve to the given string: ', () => {
    // promise.resolve('HELLO');
    expect(promise).resolves.toBe('FULFILLED!');
  });

  test('Should reject with an error: ', () => {
    expect(promise).rejects.toMatch('error');
  });
});
