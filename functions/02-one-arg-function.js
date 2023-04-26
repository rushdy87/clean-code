function log(message) {
  console.log(message);
}

log('Hi ther!');

function square(number) {
  return number * number;
}

const result = square(5);

function emailIsValid(email) {
  return email.includes('@');
}

const isValidEmai = emailIsValid('test@test.com');
