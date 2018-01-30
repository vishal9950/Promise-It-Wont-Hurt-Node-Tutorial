const exp = require('./4_rejectNotReject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => expect(exp.promise).resolves.toBe('I FIRED'));

  test('Should not work for reject the async func with error: ', () => expect(exp.promise).rejects.toBe(new Error('I DID NOT FIRE')));
});

describe('Functionality of onRejected: ', () => {
  global.console.log = jest.fn();
  test('Should be called with \'Hello\': ', () => {
    exp.onRejected(new Error('Hello'));
    expect(console.log).toHaveBeenCalledWith('Hello');
  });
});
