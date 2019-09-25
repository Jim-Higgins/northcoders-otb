const { addFirstAndLastNames } = require('./mps');

describe('MP utils', () => {
  describe('addFirstAndLastNames()', () => {
    test('should return an empty array', () => {
      expect(addFirstAndLastNames([])).toEqual([]);
    });

    it('should return a new array', () => {
      let input = [];
      expect(addFirstAndLastNames(input)).not.toBe(input);
    });

    it('should return an empty object when given an empty object', () => {
      let input = [{}];
      expect(addFirstAndLastNames(input)).toEqual([{}]);
    });

    it('should return a new object', () => {
      let input = [{}];
      expect(addFirstAndLastNames(input)[0]).not.toBe(input[0]);
    });

    it('should return first name and last name to the object', () => {
      let input = [
        {
          member_id: '41899',
          person_id: '25227',
          name: 'Robert Jenrick',
          party: 'Conservative',
          constituency: 'Newark',
          office: [
            {
              dept: '',
              position: 'The Exchequer Secretary',
              from_date: '2018-01-09',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      expect(addFirstAndLastNames(input)).toEqual([
        {
          member_id: '41899',
          person_id: '25227',
          name: 'Robert Jenrick',
          firstName : 'Robert',
          lastName : 'Jenrick',
          party: 'Conservative',
          constituency: 'Newark',
          office: [
            {
              dept: '',
              position: 'The Exchequer Secretary',
              from_date: '2018-01-09',
              to_date: '9999-12-31',
            },
          ],
        },
      ]);
    });


  });
});
