const getName = require('./get-name');

describe('', () => {
  it('retuns a name from an object', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs',
    };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });
});
