const initialState = {
    logged: false,
    closeGroups: []
};

function loggedIn(state = initialState.logged, action){
  switch(action.type) {
    case 'success':
      return !state;
    default:
      return state;
  }
}

module.exports = loggedIn;