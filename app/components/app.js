var React = require('react')
var Image = require('./image')

var App = React.createClass({
  displayName: 'App',
  render: function () {
    return React.createElement(Image)
  }
})

module.exports = App
