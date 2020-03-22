module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
      return false;
  }
  let firstLetterArray = members.map(function(item) {
      if (typeof item === 'string') {
          return item = item.trim().charAt(0).toUpperCase();
      }
  });
  let sortedArray = firstLetterArray.sort();
  let result = sortedArray.join('');
  return result;
}