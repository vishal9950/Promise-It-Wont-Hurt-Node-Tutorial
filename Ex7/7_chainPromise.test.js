const exp = require('./7_chainPromise');

describe('Test firstPromise: ', () => {
  test('Should return a promise: ', () => {
    expect(exp.firstPromise).toBeInstanceOf(Promise);
  });
});

describe('Test secondPromise: ', () => {
  test('Should return a promise: ', () => {
    expect(exp.secondPromise).toBeInstanceOf(Promise);
  });

  test('Should resolve with resolve value from 1: ', () => {
    expect(exp.secondPromise).resolves.toBe('String from 1');
  });
});
