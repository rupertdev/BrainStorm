var defaultState = {
  view           : 'Map',
  open           : false,
  leftDrawerOpen : false,
  openDialog     : null
};

export default (state = defaultState, action) => {
  switch (action.type)
  {
    case 'view':
      if(state.view === 'Map')
      {
        return Object.assign({}, state, {
          view : 'List'
        })
      }

      else if(state.view === 'List')
      {
        return Object.assign({}, state, {
          view : 'Map'
        })
      }
      break;

    case 'leftDrawerState':
      return Object.assign({}, state, {
          leftDrawerOpen : action.state
        });

    case 'openDialog':
      if(action.dialog != null){
        return Object.assign({}, state, {
          openDialog : action.dialog,
          leftDrawerOpen : false
        });
      } else {
        return Object.assign({}, state, {
          openDialog     : null,
          leftDrawerOpen : false
        });
      }

    default:
      return state
  }
}