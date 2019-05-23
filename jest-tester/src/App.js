import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display"> The counteris currently </h1>
        <button data-test="increment-button"> </button>
      </div>

    )
  }
}

export default App;
