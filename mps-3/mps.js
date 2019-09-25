function addFirstAndLastNames(mps) {

  return mps.map(mp => {
    if (mp.name) {
          let [firstName, lastName] = mp.name.split(' ');
          return { ...mp, firstName, lastName };
        } else {
          return { ...mp };
        }
  })
}

function addOfficeCounts (mps) {
  return mps.map(mp => {
    if(mp.office) {
      const officeCount = mp.office.length;
      return {...mp, officeCount}
    } else {
      return {...mp}
    }
  })
}

function removeOffices(mps) {
  if(!mps.length) return [];
  const { office, ...restOfTheMp } = mps[0]
  return [{...restOfTheMp}];
};
module.exports = { addFirstAndLastNames, addOfficeCounts, removeOffices };
