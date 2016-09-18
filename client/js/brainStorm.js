var React = require('react');
var ReactDOM = require('react-dom');

var MaterialUI = require('material-ui');
require('react-tap-event-plugin')();

var loginPage = require('./components/loginPage');
var formAGroupDialog = require('./components/formAGroupDialog');
var askForHelpDialog = require('./components/askForHelpDialog');
var preferencesDialog = require('./components/preferencesDialog');
// var store = require('./store');
// var actions = require('./actions');

var app = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      view: 'Map',
      page: null,
    };
  },

  openStartAGroupDialog : function(){
    this.setState({
      open: !this.state.open,
      page: formAGroupDialog
    });
  },

  openAskForHelpDialog : function(){
    this.setState({
      open: !this.state.open,
      page: askForHelpDialog
    });
  },

  openPreferencesDialog : function(){
    this.setState({
      open: !this.state.open,
      page: preferencesDialog
    });
  },

  goHome: function(){
    console.log('goHome');
    this.setState({
      open: !this.state.open,
      page: preferencesDialog
    })
  },

  toggleDrawer : function(){
    this.setState({
      open: !this.state.open
    });
  },

  toggleView: function(){
    this.setState({view: (this.state.view == 'Map') ? 'List' : 'Map'});
  },

  render: function(){
    console.log('render');
    return (
      React.createElement(MaterialUI.MuiThemeProvider, {},
        React.createElement('div', {},
          React.createElement(MaterialUI.AppBar,
            {
              title: 'BrainStorm',
              onLeftIconButtonTouchTap: this.toggleDrawer,
              iconElementRight: React.createElement(MaterialUI.FlatButton,{label: this.state.view, onClick: this.toggleView})
            },
            React.createElement(MaterialUI.Drawer,
              {
                open: this.state.open,
                docked: false,
                children: React.createElement(MaterialUI.List,{},
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onTouchTap: this.openStartAGroupDialog}, 'Start a Study Group'),
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onTouchTap: this.openAskForHelpDialog}, 'Ask for Help'),
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onTouchTap: this.openPreferencesDialog}, 'Preferences')
                )
              }
            )
          ),
          ((this.state.page != null) ? React.createElement(this.state.page, {onClose: this.goHome}) : null),
//           React.createElement(MaterialUI.BottomNavigation, {children: [
//             React.createElement(MaterialUI.BottomNavigationItem, {label: 'Chat'}),
//             React.createElement(MaterialUI.BottomNavigationItem, {label: 'Active Session'})
//           ]})
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(app), document.getElementById('app'));