import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      belowZero: false
    }
  }

  incrementor = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    this.positive();
  }

  positive = () => {
    if (this.state.counter === 0) {
      this.setState({
        counter: 0,
        belowZero: false
      })
    }
  }

  negative = () => {
    if (this.state.counter <= 0) {
      this.setState({
        counter: 0,
        belowZero: true
      })
    }
  }

  decrementor = () => {
    this.setState({
      counter: this.state.counter - 1
    })
    this.negative()
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display"> The counter is currently {this.state.counter} </h1>
        <button onClick={ () => this.incrementor() } data-test="increment-button"> Incrementor</button>
        <button onClick={() => this.decrementor()} data-test="decrement-button"> Decrementor</button>
        {this.state.belowZero
        ? <h5> Can not go below Zero </h5>
        : <div></div>
        }

      </div>

    )
  }
}

export default App;
