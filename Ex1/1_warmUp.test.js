const log = require('./1_warmUp');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(log.asyncLog(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(log.asyncLog(undefined)).toBe(false);
  });
});

describe('Functionality of setTimeout: ', () => {
  jest.useFakeTimers();
  log.asyncLog('TIMED OUT!');
  test('Should be called for 1 time(s): ', () => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('Should be called with \'TIMED OUT\': ', () => {
    expect(setTimeout).toHaveBeenCalledWith(log.print, 300, 'TIMED OUT!');
  });
});
