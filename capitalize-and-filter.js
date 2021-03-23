const capitalizeAndFilter = (strings) => {
  const uppercase = strings.map(string => string.toUpperCase());

  return uppercase;
};

module.exports = capitalizeAndFilter;
