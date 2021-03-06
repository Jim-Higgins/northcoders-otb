# MP utils

This series of challenges is designed to help you practice using TDD and the implementation of pure functions.
You can make use of excellent documentation on all of the array methods available in javascript by looking [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Tasks

Implement the following functions, be sure to follow the README and devise test cases for each of the different functions' behaviour.

# Unit testing

Each of the functions below can be thought as a single unit. You can write your tests in `mps.test.js`

## `addFirstAndLastNames`

This function should take an array of MP objects and return an array of MP objects with an additional `firstName` and `lastName` property added to each MP object:

```js
addFirstAndLastNames([
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
]);
/* should return
[
  {
    'member_id': '41899',
    'person_id': '25227',
    'name' : 'Robert Jenrick',
    'firstName' : 'Robert',
    'lastName' : 'Jenrick'
    'party': 'Conservative',
    'constituency': 'Newark',
    'office': [
      {
        'dept': '',
        'position': 'The Exchequer Secretary',
        'from_date': '2018-01-09',
        'to_date': '9999-12-31'
      }
    ]
  },
  {
    'member_id': '41679',
    'person_id': '25406',
    'name' : 'Carol Monaghan',
    'firstName' : 'Carol',
    'lastName' : 'Monaghan'
    'party': 'Scottish National Party',
    'constituency': 'Glasgow North West',
    'office': [
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Armed Forces and Veterans)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': '',
        'position': 'Shadow SNP Spokesperson (Education)',
        'from_date': '2017-06-20',
        'to_date': '9999-12-31'
      },
      {
        'dept': 'Science and Technology Committee (Commons)',
        'position': 'Member',
        'from_date': '2017-12-04',
        'to_date': '9999-12-31'
      }
    ]
  }]
*/
```

## `addOfficeCounts`

This function should take an array of MP objects and add an `officeCount` property to each MP object with a count of their offices (the length of offices array).

```js
addOfficeCounts([
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
]);
/* should return 
[
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
];
*/
```

## `removeOffices`

This function should take an array of MP objects and return an array of MP objects of the same length but with the office property removed from each mp object.

```js
removeOffices([
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
    member_id: '41560',
    person_id: '11884',
    name: 'Greg Clark',
    party: 'Conservative',
    constituency: 'Tunbridge Wells',
    office: [
      {
        dept: '',
        position:
          'The Secretary of State for Business, Energy and Industrial Strategy ',
        from_date: '2016-07-14',
        to_date: '9999-12-31',
      },
    ],
  },
]);
/* should return [
  {
    'member_id': '41797',
    'person_id': '11500',
    'name': 'Theresa Villiers',
    'party': 'Conservative',
    'constituency': 'Chipping Barnet',
  },
    {
    'member_id': '41560',
    'person_id': '11884',
    'name': 'Greg Clark',
    'party': 'Conservative',
    'constituency': 'Tunbridge Wells',
  }
]
*/
```

## getMPsofAnyParty

This function will take an array of MP objects and a specific party. The function should return an array of all the mps of the given party.

```js
getMPsofAnyParty(
  [
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
    {
      member_id: '41560',
      person_id: '11884',
      name: 'Greg Clark',
      party: 'Conservative',
      constituency: 'Tunbridge Wells',
      office: [
        {
          dept: '',
          position:
            'The Secretary of State for Business, Energy and Industrial Strategy ',
          from_date: '2016-07-14',
          to_date: '9999-12-31',
        },
      ],
    },
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
  ],
  'Labour'
);
// should return an array of all the Labour MP objects
```

## `tallyMPsOfEachParty`

This function should return an object of key-value pairs for each party and the number of MPs in each party in the array i.e.

```js
tallyMPsOfEachParty([
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
  {
    member_id: '41560',
    person_id: '11884',
    name: 'Greg Clark',
    party: 'Conservative',
    constituency: 'Tunbridge Wells',
    office: [
      {
        dept: '',
        position:
          'The Secretary of State for Business, Energy and Industrial Strategy ',
        from_date: '2016-07-14',
        to_date: '9999-12-31',
      },
    ],
  },
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
]);
/*
should return
{ "Labour" : 1, "Conservative" : 3, "Scottish National Party" : 1 }
*/
```
