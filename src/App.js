import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/learning-examples/FirstComponent';
import SecondComponent from './Components/learning-examples/SecondComponent';
import Counter from './Components/CounterComponent/Counter';
import TodoApplication from './Components/todo/TodoApplication';
import './bootstrap.css';


class App extends Component{
  render(){
    return(
      <div className="App">
      <TodoApplication/>
      {/*<Counter/>*/}
      </div>
    )
  }
}

class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      </div>
    )
  }
}

export default App

