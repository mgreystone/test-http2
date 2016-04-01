var React = require('react')
var Image = require('./image')

var App = React.createClass({
  displayName: 'App',

  propTypes: {
    time: React.PropTypes.number.isRequired
  },

  render: function () {
    return React.DOM.div(null,
      React.DOM.div(null, [ 'App Loaded in', this.props.time, ' ms' ].join(' ')),
      React.createElement(Image)
    )
  }
})

module.exports = App
