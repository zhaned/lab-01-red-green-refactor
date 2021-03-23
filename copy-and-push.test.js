const copyAndPush = require("./copy-and-push");


describe('', () => {
  it('retuns a name from an object', () => {
    const numbers = [1, 2, 3];
    const newList = copyAndPush(numbers, 4);

    expect(newList).toEqual([1, 2, 3, 4]);
  });
});