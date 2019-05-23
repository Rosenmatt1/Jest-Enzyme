import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  incrementor = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrementor = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display"> The counter is currently {this.state.counter} </h1>
        <button onClick={ () => this.incrementor() } data-test="increment-button"> Incrementor</button>
        <button onClick={() => this.decrementor()} data-test="decrement-button"> Decrementor</button>
      </div>

    )
  }
}

export default App;
