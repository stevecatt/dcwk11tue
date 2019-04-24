
import React, { Component }from 'react';

import './App.css';
import {Stepper} from './Stepper'
import {CompletedItems, ListItems} from './Todo'

export class App extends Component{
    constructor() {
      super()

      this.state = {
        name: "" ,
        pendingTasks: [],
        completedTasks: []

      }
    }
  

    taskNameSave = ()=>{
      let task= this.state.name
      this.setState({
      pendingTasks: this.state.pendingTasks.concat(task)
      })
    }

    //this is like a .then or callback

    taskNameBox =(e)=>{
      this.setState({
        name: e.target.value
      },()=>{ 
        console.log(this.state.name)
      })
    }

    
    moveToComplete= (task)=>{
       this.setState({
       pendingTasks: this.state.pendingTasks.filter((item)=>item !=task),
       completedTasks: this.state.pendingTasks.filter((item)=>item ==task)
     })
      console.log("why is this firing")
      console.log(this.state.completedTasks)


      }
    
    
  


      
      
      
  


  render(){
  
      return (

            <div className="App">
            <div>
              <input onChange ={this.taskNameBox}  type="text" />
              <button onClick ={this.taskNameSave}> Save</button>
              <ListItems listItems={this.state.pendingTasks} removeTaskCallback = {this.moveToComplete}></ListItems>
            </div>
        
    
    
     
     
    </div>
  );
}
}

export default App;
