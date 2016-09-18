var actions = require('./actions');

const initialState = {
  currentPage: actions.Pages.CREATE_GROUP
};

function BrainStormApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case actions.PAGE_TRANSITION:
      return Object.assign({}, state, {
        currentPage: action.page
      });
    default:
      return state
  }
}

module.exports = BrainStormApp;