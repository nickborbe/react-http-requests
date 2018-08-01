import React, { Component } from 'react'
import './App.css'
class App extends Component {
  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
        Click Me
        </button>
      </div>
    )
  }
}
export default App