const asyncLog = require('./1_warmUp');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(asyncLog(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(asyncLog(undefined)).toBe(false);
  });
});

describe('Functionality of setTimeout: ', () => {
  test('Should be called for 1 time(s): ', () => {
    jest.useFakeTimers();
    asyncLog('HELLO');
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
