const exp = require('./8_values');

describe('Test promise: ', () => {
  test('Should resolve with attachTitle: ', () => expect(exp.promise).resolves.toBe('MANHATTAN'));

  test('Should resolve with console.log: ', () => expect(exp.prom2).resolves.toBe('DR. MANHATTAN'));
});

// global.console.log = jest.fn();
//
// expect(console.log).toHaveBeenLastCalledWith('DR. MANHATTAN');
