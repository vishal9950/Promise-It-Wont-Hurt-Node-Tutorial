const promise = require('./5_promiseAsync');

describe('Test Promise: ', () => {
  test('Should resolve with given resolve value: ', () => expect(promise).resolves.toBe('PROMISE VALUE'));
});
