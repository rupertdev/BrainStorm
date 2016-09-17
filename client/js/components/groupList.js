var React = require('react');
var MaterialUI = require('material-ui');
var store = require('../store');

var groupList = React.createClass({
    getInitialState: function() {
        console.log('emittin');
        socket.emit('getCloseSessions', {latlng: map.latlng});
        return {
            groups: []
        };
    },

    componentDidMount: function () {
        var self = this;
        socket.on('returnCloseSessions', function(data){
            console.log('groups git got');
            self.setState({groups: data});
        });
    },

    render: function() {
        return (React.createElement(
            MaterialUI.Card,
            {},
            React.createElement(
                MaterialUI.List,
                {},
                this.state.groups.length > 0
                    ? this.state.groups.map(function(a) {
                    return React.createElement(
                        MaterialUI.ListItem,
                        {'key': a['id']},
                        React.createElement('div', {}, 'Name: ' + a['name']),
                        React.createElement('div', {}, 'Topic: ' + a['topic']),
                        React.createElement('div', {}, 'Members: ' + a['members'].length)
                    )})
                    : React.createElement('div', {'color': '#FFF'}, 'No nearby groups...'))));
    }

});

module.exports = groupList;