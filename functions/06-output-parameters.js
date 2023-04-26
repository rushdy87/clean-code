function createId(user) {
  user.id = 'u1';
}

const user = { name: 'Test' };
createId(user);

console.log(user);

// best to be addId

function addId(user) {
  user.id = 'u1';
}

const user2 = { name: 'Test2' };
addId(user2);

console.log(user2);

// more cleaner will be:

class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = 'u1';
  }
}

const user3 = new User('Test3');
user3.addId();

console.log(user3);
