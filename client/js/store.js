var redux = require('redux');

//Include reducer
var app = require('./reducer');

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = redux.createStore(app);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
);

module.exports = store;