/*
function connectDatabase() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!');
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!');
    return false;
  }
  return true;
}
*/

function initApp() {
  const seccess = connectDatabase();
  if (!seccess) {
    console.log('Could not connect to database!');
  }

  // ...
}

function connectDatabase() {
  const didConnect = database.connect(); //side effect expected
  return didConnect;
}

function determineSupportAgent(ticket) {
  //there is no side effect
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log('Could not connect to database!');
  }

  //...
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}
