const promiseResolve = require('./6_shortcuts');

describe('Test resolve: ', () => {
  test('Should resolve with resolve value: ', () => expect(promiseResolve).resolves.toBe('SOME VALUE!'));
});
