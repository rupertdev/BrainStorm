import React, { Component, Proptypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class formAGroupDialog extends Component {
  render() {
//     const { store} = this.props;
    return (
      <Dialog title='Create a Study Group' open={true} actions={[
        <RaisedButton /*onTouchTap={store.dispatch({})}*/>Cancel</RaisedButton>,
        <RaisedButton>Start</RaisedButton>
      ]}>
        <TextField hintText={'Group Name'}/>
        <br/>
        <TextField hintText={'Topic / Class'}/>
        <br/>
        <TextField hintText={'Location Description'}/>
        <br/>
        <div id="map" style={{marginTop: '1%', height: '350px'}}></div>
      </Dialog>
    )
  }
}

// formAGroupDialog.propTypes = {
//   store: PropTypes.object.isRequired,
// };

export default formAGroupDialog