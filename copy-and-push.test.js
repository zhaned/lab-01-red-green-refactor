const copyAndPush = require('./copy-and-push');

const numbers = [1, 2, 3];

describe('', () => {
  it('retuns an array with a pushed item', () => {
    const newList = numbers;
    const something = copyAndPush(newList, 4);

    expect(something).toEqual([1, 2, 3, 4]);
  });

  it('checks to see if original array is the same', () => {
    const oldList = numbers;

    expect(oldList).toEqual([1, 2, 3]);
  });
});
