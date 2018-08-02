import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      tasks: [],
      urlToSend: '',
    }
  }
  // why do this whole .bind thing instead of just calling it differently in the view?


  

  handleClick(){
    axios.get(this.state.urlToSend)
    .then((res) => {
      console.log(res.data)
      console.log(this.state.urlToSend)
      this.setState({tasks: res.data})
    }); 
  }

  updateUrlToSend(e){
    this.setState({
      username: this.state.username,
      urlToSend: e.target.value,
    })

  }

  showTasks(){
    let result = ''
    this.state.tasks.forEach((eachTask)=>{  
       result +=  <h3> eachTask.title </h3>
       result += <p> eachTask.description </p>
    })
    return (
      <div>
        {result}
        </div>
    )
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
        {this.showTasks()}
      </div>
    )
  }
}
export default App