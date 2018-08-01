import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  // constructor(){
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // why do this whole .bind thing instead of just calling it differently in the view?

  handleClick(){
    axios.get('https://api.github.com/users/nickborbe')
    .then((res) => {
      console.log(res)
    });
    
  }


  render () {
    return (
      <div className='button__container'>
        {/* <button className='button' onClick={this.handleClick}> */}
        {/* this is instead of .bind in the constructor - it's a more recent fix, .bind is old syntax */}
        <button className='button' onClick={()=>this.handleClick()}>
        Click Me
        </button>
      </div>
    )
  }
}
export default App