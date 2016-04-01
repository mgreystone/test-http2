var React = require('react')
var times = require('lodash/times')

var SIZE = 20

var Image = React.createClass({
  displayName: 'Image',
  render: function () {
    return React.DOM.div(null, times(SIZE, function (row) {
      return React.DOM.div({ key: row, className: 'image-row' }, times(SIZE, function (col) {
        var src = [ 'assets/slice_', row, '_', col, '.png' ].join('')
        return React.DOM.img({
          key: col,
          className: 'image',
          src: src,
          alt: src,
          width: 50,
          height: 33
        })
      }))
    }))
  }
})

module.exports = Image
