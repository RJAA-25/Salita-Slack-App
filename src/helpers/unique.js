export const getUnique = (arr) => {
  let uniqueID = [];
  let uniqueArray = [];
  for (let item of arr) {
    if (!uniqueID.includes(item.id)) {
      uniqueID.push(item.id);
      uniqueArray.push(item);
    } else continue;
  }
  return uniqueArray;
};
