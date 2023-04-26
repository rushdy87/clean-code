/*
function createUser(email, password) {
  if (!email || !email.includes('@') || !password || password.term() === '') {
    console.log('Invalid input!');
    return;
  }

  const user = { email, password };

  database.insert(user);
}
*/

function createUser(email, password) {
  if (!inputIsValid(email, password)) {
    showErrorMessage('Invalid input');
    return;
  }

  saveUser(email, password);
}

function inputIsValid(email, password) {
  return email && email.includes('@') && password && password.term() !== '';
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = { email, password };

  database.insert(user);
}
