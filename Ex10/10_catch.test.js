const alwaysThrows = require('./10_catch');

describe('Test alwaysThrows: ', () => {
  test('Should throw an error message: ', () => {
    const err = new Error('OH NOES');
    const testReturn = alwaysThrows();
    expect(testReturn).toEqual(err);
  });
});
