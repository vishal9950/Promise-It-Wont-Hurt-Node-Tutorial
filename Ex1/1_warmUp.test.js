const asyncLog = require('./1_warmUp');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(asyncLog(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(asyncLog(undefined)).toBe(false);
  });
});
