var Promise = require('es6-promise').Promise
var React = require('react')
var times = require('lodash/times')

var SIZE = 20

var Image = React.createClass({
  displayName: 'Image',

  getInitialState: function () {
    return {
      time: null
    }
  },

  componentDidMount: function () {
    this.start = performance.now()
  },

  render: function () {
    var promises = []
    var comp = React.DOM.div(null,
      times(SIZE, function (row) {
        return React.DOM.div({ key: row, className: 'image-row' }, times(SIZE, function (col) {
          var src = [ 'assets/slice_', row, '_', col, '.png' ].join('')
          var config = {
            key: col,
            className: 'image',
            src: src,
            alt: src,
            width: 50,
            height: 33
          }
          var promise = new Promise(function (resolve) { config.onLoad = resolve })
          promises.push(promise)
          return React.DOM.img(config)
        }))
      }),
      this.state.time && React.DOM.div(null, [ 'Image loaded in', this.state.time, 'ms' ].join(' '))
    )
    Promise.all(promises).then(function () { this.setState({ time: performance.now() - this.start }) }.bind(this))
    return comp
  }
})

module.exports = Image
