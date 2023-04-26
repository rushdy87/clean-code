// pure function
function generateId(userName) {
  const id = 'id_' + userName;
  return id;
}

// impure function
function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}
