import React, { Component } from 'react';


export class ListItems extends Component {
    // constructor(){
    //     super()

    //     this.state ={
    //         somelist: []

    //     }
    // }
    
removeTaskCallback = (name) =>{
    this.props.removeTaskCallback (name)
}


    render(){

        let tasks = this.props.listItems

        let taskListItems = tasks.map((task, index)=>{
        
           //make sure the button calls a function {() => this.props.removeTaskCallback(task)}
            return <div>
                             <li key={index}>{task}</li>
                        
                             <button onClick={() => this.props.removeTaskCallback(task)}>Move to Complete</button>
                    </div>
        })
        
        return(
            
           
            <div>
              <h1>Pending Items</h1>
              <ul>{taskListItems}</ul>
            </div>
        
        )
        
    }
}