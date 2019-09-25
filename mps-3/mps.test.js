const { addFirstAndLastNames, addOfficeCounts, removeOffices } = require('./mps');

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
          firstName: 'Robert',
          lastName: 'Jenrick',
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

    it('should return the same input if input has no name field', () => {
      let input = [
        {
          member_id: '41899',
          person_id: '25227',
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
      expect(addFirstAndLastNames(input)).toEqual(input);
    });

    it('should add firstName and lastName for multiple objects', () => {
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
        {
          member_id: '41679',
          person_id: '25406',
          name: 'Carol Monaghan',
          party: 'Scottish National Party',
          constituency: 'Glasgow North West',
          office: [
            {
              dept: '',
              position: 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
              from_date: '2017-06-20',
              to_date: '9999-12-31',
            },
            {
              dept: '',
              position: 'Shadow SNP Spokesperson (Education)',
              from_date: '2017-06-20',
              to_date: '9999-12-31',
            },
            {
              dept: 'Science and Technology Committee (Commons)',
              position: 'Member',
              from_date: '2017-12-04',
              to_date: '9999-12-31',
            },
          ],
        },
      ]
      expect(addFirstAndLastNames(input)).toEqual([
        {
          member_id: '41899',
          person_id: '25227',
          name: 'Robert Jenrick',
          firstName: 'Robert',
          lastName: 'Jenrick',
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
        {
          member_id: '41679',
          person_id: '25406',
          name: 'Carol Monaghan',
          firstName: 'Carol',
          lastName: 'Monaghan',
          party: 'Scottish National Party',
          constituency: 'Glasgow North West',
          office: [
            {
              dept: '',
              position: 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
              from_date: '2017-06-20',
              to_date: '9999-12-31',
            },
            {
              dept: '',
              position: 'Shadow SNP Spokesperson (Education)',
              from_date: '2017-06-20',
              to_date: '9999-12-31',
            },
            {
              dept: 'Science and Technology Committee (Commons)',
              position: 'Member',
              from_date: '2017-12-04',
              to_date: '9999-12-31',
            },
          ],
        },
      ])
      
    });
    test('check that original input does not mutate', () => {
      const input = [
        {
          member_id: '41899',
          person_id: '25227',
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
      addFirstAndLastNames(input);
      expect(input).toEqual([
        {
          member_id: '41899',
          person_id: '25227',
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
      ])
    });
  });
  describe('addOfficeCounts()', () => {
    test('return a empty array when passed an empty array', () => {
      expect(addOfficeCounts([])).toEqual([])
    });
    test('returns a new array', () => {
      const input = [];
      expect(addOfficeCounts(input)).not.toBe(input)
    });
    test('returns a new object when passed an empty object', () => {
      const input = [{}];
      expect(addOfficeCounts(input)[0]).not.toBe(input[0])
    });
    test('should return an empty object when given an empty object', () => {
      let input = [{}];
      expect(addOfficeCounts(input)).toEqual([{}]);
    });
    test('should return a new array with one object with a office count property added', () => {
      let input = [
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      expect(addOfficeCounts(input)).toEqual([
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
          officeCount: 1
        },])
    });
    test('check that original input has not mutated', () => {
      const input = [
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
        },
      ];
      addOfficeCounts(input);
      expect(input).toEqual([
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
        },
      ])
    });
    test('adds officeCount property to multiple objects', () => {
      const input = [
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
        },
        {
          member_id: '41460',
          person_id: '10259',
          name: 'David Hanson',
          party: 'Labour',
          constituency: 'Delyn',
          office: [
            {
              dept: 'Panel of Chairs',
              position: 'Member',
              from_date: '2017-06-22',
              to_date: '9999-12-31',
            },
            {
              dept: 'Justice Committee',
              position: 'Member',
              from_date: '2017-09-11',
              to_date: '9999-12-31',
            },
            {
              dept: 'Intelligence and Security Committee of Parliament',
              position: 'Member',
              from_date: '2017-11-16',
              to_date: '9999-12-31',
            },
          ],
        },
      ]
      const output = [
        {
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
          office: [
            {
              dept: 'National Security Strategy (Joint Committee)',
              position: 'Member',
              from_date: '2017-10-30',
              to_date: '9999-12-31',
            },
          ],
          officeCount: 1
        },
          {
          'member_id': '41460',
          'person_id': '10259',
          'name': 'David Hanson',
          'party': 'Labour',
          'constituency': 'Delyn',
          'office': [
            {
              'dept': 'Panel of Chairs',
              'position': 'Member',
              'from_date': '2017-06-22',
              'to_date': '9999-12-31'
            },
            {
              'dept': 'Justice Committee',
              'position': 'Member',
              'from_date': '2017-09-11',
              'to_date': '9999-12-31'
            },
            {
              'dept': 'Intelligence and Security Committee of Parliament',
              'position': 'Member',
              'from_date': '2017-11-16',
              'to_date': '9999-12-31'
            }
          ],
          officeCount : 3
        },
      ]
      expect(addOfficeCounts(input)).toEqual(output)
    });
  });

  describe('removeOffices()', () => {
    test('return a empty array when passed an empty array', () => {
      expect(removeOffices([])).toEqual([])
    });
    test('return a new array when passed an empty array', () => {
      const input = [{}]
      expect(removeOffices(input)).not.toBe(input)
    });
    it('should return an empty object when given an empty object', () => {
      let input = [{}];
      expect(removeOffices(input)).toEqual([{}]);
    });
    test('returns a new object when passed an empty object', () => {
      const input = [{}];
      expect(removeOffices(input)[0]).not.toBe(input[0])
    });
    test('it removes the office key for one object', () => {
      const input = [{
        member_id: '41797',
        person_id: '11500',
        name: 'Theresa Villiers',
        party: 'Conservative',
        constituency: 'Chipping Barnet',
        office: [
          {
            dept: 'National Security Strategy (Joint Committee)',
            position: 'Member',
            from_date: '2017-10-30',
            to_date: '9999-12-31',
          },
        ],
      }]
      const output = [{
          member_id: '41797',
          person_id: '11500',
          name: 'Theresa Villiers',
          party: 'Conservative',
          constituency: 'Chipping Barnet',
      }];
      expect(removeOffices(input)).toEqual(output)
    })
    test('it does not mutate the input object or array', () => {
      const input = [{
        member_id: '41797',
        person_id: '11500',
        name: 'Theresa Villiers',
        party: 'Conservative',
        constituency: 'Chipping Barnet',
        office: [
          {
            dept: 'National Security Strategy (Joint Committee)',
            position: 'Member',
            from_date: '2017-10-30',
            to_date: '9999-12-31',
          },
        ],
      }]
      removeOffices(input);
      expect(input).toEqual([{
        member_id: '41797',
        person_id: '11500',
        name: 'Theresa Villiers',
        party: 'Conservative',
        constituency: 'Chipping Barnet',
        office: [
          {
            dept: 'National Security Strategy (Joint Committee)',
            position: 'Member',
            from_date: '2017-10-30',
            to_date: '9999-12-31',
          },
        ],
      }])
    });
  });
});
