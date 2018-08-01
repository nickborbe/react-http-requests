import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  //

  handleClick(){
    console.log("hello");
  }


  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
        {/* why is it better to do .bind in the constructor instead of this thing below? */}
        {/* <button className='button' onClick={()=>this.handleClick()}> */}
        Click Me
        </button>
      </div>
    )
  }
}
export default App