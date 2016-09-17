var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');
require('react-tap-event-plugin')();

var loginPage = require('./components/loginPage');
var groupList = require('./components/groupList');
var store = require('./store');

var app = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      view: 'Map',
      page: loginPage
    };
  },

  goToHelpSomeone: function(){
    this.setState({
      open: !this.state.open,
      page: 'helpSomeone'
    });
  },

  goToHelpAGroup: function(){
    this.setState({
      open: !this.state.open,
      page: 'helpAGroup'
    });
  },

  goToGetHelp: function(){
    this.setState({
      open: !this.state.open,
      page: 'getHelp'
    });
  },

  goToPreferences: function(){
    this.setState({
      open: !this.state.open,
      page: 'preferences'
    });
  },

  toggleDrawer : function(){
    this.setState({
      open: !this.state.open
    });
  },

  toggleView: function(){
    this.setState(
        {view: (this.state.view == 'Map') ? 'List' : 'Map',
        page: (this.state.view == 'Map') ? loginPage : groupList});
  },

  render: function(){
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
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onClick: this.goToHelpSomeone}, 'Help Someone'),
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onClick: this.goToHelpAGroup}, 'Help a Group'),
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onClick: this.goToGetHelp}, 'Get Help'),
                  React.createElement(MaterialUI.ListItem, {leftIcon: MaterialUI.SvgIcon.ActionGroupWork, onClick: this.goToPreferences}, 'Preferences')
                )
              }
            )
          ),
          React.createElement(this.state.page)
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(app), document.getElementById('app'));