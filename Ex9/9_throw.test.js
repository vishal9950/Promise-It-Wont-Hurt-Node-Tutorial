const parsePromised = require('./9_throw');

describe('Test parsePromised: ', () => {
  test('Returns a promise: ', () => {
    const testPromise = parsePromised();
    expect(testPromise).toBeInstanceOf(Promise);
  });
});
