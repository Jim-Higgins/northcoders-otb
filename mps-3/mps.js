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
module.exports = { addFirstAndLastNames, addOfficeCounts };
