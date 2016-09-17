var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client', 'brainStorm.js'),
    output: {
        path: path.join(__dirname, 'client'),
        filename: "appBundle.js"
    },
    module: {
        loaders: [
          {
            loaders: ['babel-loader']
          }
        ]
    }
};