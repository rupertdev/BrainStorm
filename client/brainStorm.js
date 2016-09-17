var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');
var injectTapEventPlugin = require('react-tap-event-plugin');

var store = require('./store');

injectTapEventPlugin();

var appBar = React.createElement(MaterialUI.AppBar, {title: 'BrainStorm'});
var App = React.createElement(MaterialUI.MuiThemeProvider, {muiTheme: MaterialUI.MuiThemeProvider.darkBaseTheme}, appBar);

ReactDOM.render(App, document.getElementById('app'));