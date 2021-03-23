const fetchQuotes = require('./fetch-quotes');

describe('', () => {
  it('returns a single quote from Futurama API', async() => {
    const quotes = await fetchQuotes();

    expect(quotes).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image:expect.any(String)
    });
  });
});
