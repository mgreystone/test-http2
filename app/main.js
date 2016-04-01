/* globals start */

var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./components/app')

ReactDOM.render(React.createElement(App, { time: performance.now() - start }), document.getElementById('app'))
