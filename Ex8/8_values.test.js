const promise = require('./8_values');

describe('Test promise: ', () => {
  test('Should resolve with attachTitle: ', () => expect(promise).resolves.toBe('MANHATTAN'));
});
