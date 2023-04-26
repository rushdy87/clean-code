// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }

// const user = new User('Test', 25, 'test@test.com');

class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

// const user = new User({
//   name: 'Test',
//   age: 25,
//   email: 'test@test.com',
// });

// function compare(a, b, comparetor) {
//   if (comparetor === 'equal') {
//     return a === b;
//   } else if (comparetor === 'not equal') {
//     return a !== b;
//   } else if (comparetor === 'grater') {
//     return a > b;
//   } else if (comparetor === 'smaller') {
//     return a < b;
//   }
// }

// const isSmaller = compare(3, 5, 'smaller');

// const isEqual = compare(3, 5, 'equal');

function compare(comparsionData) {
  const { first, second, comparetor } = comparsionData;

  if (comparetor === 'equal') {
    return first === second;
  } else if (comparetor === 'not equal') {
    return first !== second;
  } else if (comparetor === 'grater') {
    return first > second;
  } else if (comparetor === 'smaller') {
    return first < second;
  }
}

const isSmaller = compare({ first: 3, second: 5, comparetor: 'smaller' });
const isEqual = compare({ first: 3, second: 5, comparetor: 'equal' });
