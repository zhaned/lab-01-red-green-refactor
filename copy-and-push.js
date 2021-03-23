const copyAndPush = (list, i) => {
  const newList = list.slice();
  newList.push(i);
  return newList; 
}; 

module.exports = copyAndPush;
