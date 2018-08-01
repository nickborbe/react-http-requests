import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: null,
      urlToSend: '',
    }
  }
  // why do this whole .bind thing instead of just calling it differently in the view?

  theURL = ''
  

  handleClick(){
    axios.get('https://api.github.com/users/nickborbe')
    .then((res) => {
      console.log(res.data)
      console.log(this.theURL)
      this.setState({username: res.data.name})
    }); 
  }

  updateUrlToSend(e){
    this.setState({
      username: this.state.username,
      urlToSend: e.target.value,
    })

  }


  render () {
    return (
      <div className='button__container'>
      <input value ={this.state.urlToSend} onChange={e => this.updateUrlToSend(e)}>
      </input>
      <br></br> <br></br>  <br></br>
        {/* <button className='button' onClick={this.handleClick}> */}
        {/* this is instead of .bind in the constructor - it's a more recent fix, .bind is old syntax */}
        <button className='button' onClick={()=>this.handleClick()}>
        Click Me
        </button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}
export default App