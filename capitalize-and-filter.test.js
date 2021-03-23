const capitalizeAndFilter = require('./capitalize-and-filter');

describe('', () => {
  it('takes an array of strings and capitalize all strings and filter out ones that start with f', () => {
    const strings = ['futurama', 'rick and morty', 'spongebob', 'fsomething'];
    const newString = capitalizeAndFilter(strings);

    expect(newString).toEqual(['RICK AND MORTY', 'SPONGEBOB']);
  });
});
