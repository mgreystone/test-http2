import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  displayName: 'App',
  render () {
    return <div>Working with JSX!</div>
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
