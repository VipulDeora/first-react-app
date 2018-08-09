import React, { Component } from 'react';
import Header from './Header/Header';
import InputField from './InputField/Input';
import AllTasks from './AllTasks/AllTasks';

const initialState = {
  inputValue: '',
  tasks: [],
}
class App extends Component {
  
  handleInputChange = (value) => {
    this.setState(() => {
      return {inputValue: value};
    })
  }

  handleSavetask = () => {
    if (this.state.inputValue.length) {
      this.setState((prevState) => {
        const temp = [...prevState.tasks];
        temp.push(prevState.inputValue);
        return {tasks: temp, inputValue: ''};
      });
    } else {
      return;
    }
  }

  handleDeleteTask = () => {

  }

  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className='App container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <InputField
                handleInput={this.handleInputChange}
                handleSaveTask={this.handleSavetask} 
                value={this.state.inputValue}
              />
            </div>
            <div className='col-md-8'>
              <AllTasks
                handleClickDelete={this.handleDeleteTask} 
                handleClickComplete={this.handleDeleteTask} 
                classNames='btn btn-sm btn-danger' 
                tasks={this.state.tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
