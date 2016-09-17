var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');
var store = require('../store');

var loginPage = React.createClass({
  getInitialState: function() {
    return {
      logged: false
    };
  },

  onSignIn: function(googleUser) {
    console.log("user signed in:"); // plus any other logic here
    this.setState({logged: true});
  },

  renderGoogleLoginButton: function() {
    gapi.signin2.render('my-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 220,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    })
  },

  componentDidMount: function() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
  },

  render: function() {
    let displayText = "Sign in with Google";
    return (
        React.createElement(
            'div',
            {'id': 'my-signin2',
            'style': {
              'display': this.state.logged ? 'none' : '',
              'margin': 'auto',
              'width': '200px'
            }
            })
    );
  }

});

module.exports = loginPage;