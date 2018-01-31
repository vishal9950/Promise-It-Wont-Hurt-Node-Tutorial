const parsePromised = require('./9_throw');

describe('Test parsePromised: ', () => {
  test('Returns a promise: ', () => {
    const testPromise = parsePromised();
    expect(testPromise).toBeInstanceOf(Promise);
  });

  test('Takes JSON object as argument, pass array: ', () => expect(parsePromised([])).rejects.toBe('Unexpected end of JSON input'));
});
