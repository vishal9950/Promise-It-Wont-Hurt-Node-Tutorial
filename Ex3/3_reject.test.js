const exp = require('./3_reject');

describe('Functionality of promise: ', () => {
  test('Should resolve the async func: ', () => expect(exp.promise).rejects.toEqual(new Error('REJECTED!')));
});

describe('Functionality of onReject: ', () => {
  global.console.log = jest.fn();

  test('Should be called with \'Hello\': ', () => {
    exp.onReject(new Error('Hello'));
    expect(console.log).toHaveBeenCalledWith('Hello');
  });
});
