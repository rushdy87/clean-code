// function saveUser(email, password) {
//   const user = {
//     id: Math.random().toString(),
//     email: email,
//     password: password,
//   };

//   db.insert('users', user);
// }

// saveUser('test@test.com', 'scritPassword');

// better
function saveUser(user) {
  db.insert('users', user);
}

const newUser = {
  id: Math.random().toString(),
  email: email,
  password: password,
};

saveUser(newUser);

// better

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString;
  }

  save() {
    db.insert('users', this);
  }
}

const user = new User('test@test.com', 'scritPassword');
user.save();
