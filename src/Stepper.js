import React, { Component } from 'react';


export class Stepper extends Component {
    constructor(){
        super()

        this.state= {
            count:91
        }
    }

    minus= ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    plus= ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
               
                <button onClick={this.minus}>-</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>+</button>
                
            </div>
        )
    }
}