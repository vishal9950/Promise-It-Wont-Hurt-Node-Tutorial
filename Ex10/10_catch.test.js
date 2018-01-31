const exp = require('./10_catch');

describe('Test alwaysThrows: ', () => {
  test('Should throw an error message: ', () => {
    const err = new Error('OH NOES');
    const testReturn = exp.alwaysThrows();
    expect(testReturn).toEqual(err);
  });
});

describe('Test iterate: ', () => {
  test('Should return an number incremented by 1: ', () => {
    expect(exp.iterate(2)).toBe(3);
  });
});
