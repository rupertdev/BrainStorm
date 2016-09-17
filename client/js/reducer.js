function loggedIn(state = false, action){
  switch(action.type) {
    case 'success':
      return !state;
    default:
      return state;
  }
}

module.exports = loggedIn;