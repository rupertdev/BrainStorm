import React, { Component, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import formAGroupDialog from './formAGroupDialog';

class BrainStorm extends Component {
  render() {
    const { store, view, toggleView} = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="BrainStorm" onLeftIconButtonTouchTap={() => store.dispatch({type: 'leftDrawerState', state: true})} iconElementRight={<FlatButton onTouchTap={toggleView}>{view}</FlatButton>}>
            <Drawer open={store.getState().leftDrawerOpen} docked={false}>
              <List>
                <ListItem onTouchTap={() => store.dispatch({type: 'openDialog', dialog: 'studyGroup'})}>Start a Study Group</ListItem>
                <ListItem onTouchTap={() => store.dispatch({type: 'openDialog', dialog: 'askForHelp'})}>Ask for Help</ListItem>
                <ListItem onTouchTap={() => store.dispatch({type: 'openDialog', dialog: 'preferences'})}>Preferences</ListItem>
              </List>
            </Drawer>
          </AppBar>
        <formAGroupDialog/>
        </div>
      </MuiThemeProvider>
    )
  }
}

BrainStorm.propTypes = {
  store: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  toggleView: PropTypes.func.isRequired
};

export default BrainStorm