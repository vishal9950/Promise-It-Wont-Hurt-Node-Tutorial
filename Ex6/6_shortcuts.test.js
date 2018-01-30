const exp = require('./6_shortcuts');

describe('Test resolve: ', () => {
  test('Should resolve with resolve value: ', () => expect(exp.promiseResolve).resolves.toBe('SOME VALUE!'));
});

describe('Test reject: ', () => {
  test('Should reject with error object as value: ', () => expect(exp.promiseReject).rejects.toEqual(new Error('Error msg')));
});
