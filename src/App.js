import React, { Component } from 'react'
import './App.css'
import axios from 'axios'


class AddTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      titleInput: '',
      descInput: '',
    }
  }

  updateTitleValue(e){
    this.setState({
      titleInput: e.target.value,
      descInput: this.state.descInput,
    })
  }
    updateDescValue(e){
      this.setState({
        titleInput: this.state.titleInput,
        descInput: e.target.value,
      })
    }

    submitNewTask(){
      axios.post('http://localhost:5000/api/tasks/create',{title: this.state.titleInput, description: this.state.descInput})
      .then((res)=>{
        this.setState({titleInput: '', descInput: ''})
        console.log(res);
      })
      .catch((err)=>{
        console.log(err)
      })

    }


  render(){
    return(
      <div>
      <h3> Add New Task To List </h3>
      <label> Title </label>
      <input value = {this.state.titleInput} onChange={e => this.updateTitleValue(e)} >
      </input>
      <label> Description </label>
      <input value = {this.state.descInput} onChange={e => this.updateDescValue(e)}>
      </input>
      <button onClick={()=>{this.submitNewTask()}}>
        Submit
        </button>
      </div>
    )
  }

}



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
    axios.get('http://localhost:5000/api/tasks')
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
    const that = this;
    axios.get('http://localhost:5000/api/tasks')
    .then((res) => {
      console.log(res.data)
      that.setState({tasks: res.data})
    }); 
    
    return (
    this.state.tasks.map(function(task, index){
      return(
        <div key={index}>
        <h3>{task.title}</h3>
        <p >{task.description} </p>
        </div>
      ) 
    })
  )
  }


  render () {
    return (
      <div className='button__container'>
              <div className="right">
        <AddTask></AddTask>
        </div>
      <input value ={this.state.urlToSend} onChange={e => this.updateUrlToSend(e)}>
      </input>
      <br></br> <br></br>  <br></br>
        {/* <button className='button' onClick={this.handleClick}> */}
        {/* this is instead of .bind in the constructor - it's a more recent fix, .bind is old syntax */}
        <button className='button' onClick={()=>this.handleClick()}>
        Get List Of Tasks
        </button>
            <ul>
                {this.showTasks()}
            </ul>

      </div>
    )
  }
}
export default App