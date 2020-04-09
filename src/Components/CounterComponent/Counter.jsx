import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{
    
    constructor(){
        super();
        this.state ={
            counter:0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    render(){
        return(
          <div className="Counter">
          <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
          <span className="count">{this.state.counter}</span>
          <div ><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        )
      }
    increment(by){//update state 
        //console.log(`call from parent ${by}`)
        this.setState(
        (prevState) =>{
            return {counter: prevState.counter + by}
        }
        );
    }  
    decrement(by){//update state 
        //console.log(`call from parent ${by}`)
        this.setState(
        (prevState) =>{
            return {counter: prevState.counter - by}
        }
        );
    }  
    reset(){
        this.setState({counter: 0}
        ); 
    }
}    

class CounterButton extends Component{
    //define the initial state in a constructor
    constructor(){
        super();
        this.state ={
            counter:0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render(){
        return (
        <div className="Counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
        </div>
        
        )
    }
    increment(){//update state 
        //console.log('increment method called')
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by)
    }
    decrement(){//update state 
        //console.log('increment method called')
        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by)
    }
}

CounterButton.defaultProps = {
    by : 1
}
CounterButton.prototypes = {
    by : PropTypes.number
}
export default Counter 