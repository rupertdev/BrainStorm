function counter(state = false, action) {
  switch (action.type) {
  case 'LEFT_PANEL_TOGGLE':
    return !state;
  default:
    return state
  }
}

module.exports = counter;