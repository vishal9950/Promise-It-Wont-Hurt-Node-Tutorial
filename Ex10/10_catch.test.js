const exp = require('./10_catch');

describe('Test alwaysThrows: ', () => {
  test('Should throw an error message: ', () => {
    expect(exp.alwaysThrows).toThrow('OH NOES');
  });
});

describe('Test iterate: ', () => {
  test('Should return a number incremented by 1: ', () => {
    expect(exp.iterate(2)).toBe(3);
  });
});

describe('Test promise: ', () => {
  test('Should resolve to the error message \'OH NOES\': ', () => expect(exp.promise).resolves.toBe('OH NOES'));
});
