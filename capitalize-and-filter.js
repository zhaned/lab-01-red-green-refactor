const capitalizeAndFilter = (strings) => {
  // const uppercase = strings.map(string => string.toUpperCase());
  const uppercase = strings;
  for(let i = 0; i < strings.length; i++) {
    uppercase[i] = uppercase[i].toUpperCase();
  }
  for(let i = 0; i < strings.length; i++) {
    if(uppercase[i].charAt(0) === 'F') {
      uppercase.splice(i, i + 1);
    }
  }
  return uppercase;
};

module.exports = capitalizeAndFilter;
