var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');
var map;
var test;

var askForHelpDialog = React.createClass({
  getInitialState: function(){
    return {
      open: true
    }
  },


  handleConfirm: function() {
    //Todo:perform session creation logic
    this.setState({open: false});
  },

  handleCancel: function() {
    this.setState({open: false});
  },

  componentDidMount: function(){
    test = require('../utils/mapbox');
    map = require('../map');
    this.setState({});
  },

  render: function(){
    return (
      React.createElement(MaterialUI.Dialog, {open: this.state.open, title: 'Ask For Help', actions: [
        React.createElement(MaterialUI.RaisedButton, {onTouchTap: this.handleCancel, style:{margin: '1%'}}, 'Cancel'),
        React.createElement(MaterialUI.RaisedButton, {onTouchTap: this.handleConfirm, primary: true}, 'Start')
      ]},
//         React.createElement(MaterialUI.TextField, {hintText: 'Group Name'}),
//         React.createElement('br'),
        React.createElement(MaterialUI.TextField, {hintText: 'Topic / Class'}),
        React.createElement('br'),
        React.createElement(MaterialUI.TextField, {hintText: 'Location Description'}),
        React.createElement('br'),
        React.createElement('div', {id: 'map', style:{marginTop: '1%', height: '350px'}})
      )
    );
  }
});

module.exports = askForHelpDialog;