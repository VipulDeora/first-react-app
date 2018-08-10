import React, { Component } from 'react';
import Header from './Header/Header';
import InputField from './InputField/Input';
import AllTasks from './AllTasks/AllTasks';
import shortid from 'shortid';
import moment from 'moment/moment'

class App extends Component {
  
  state = {
    inputValue: '',
    editMode: false,
    editTaskId: '',
    tasks: []
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSavetask = () => {
    if (this.state.inputValue.length && !this.state.editMode) {
      const newTasks = [...this.state.tasks];
      const newTask = {
        id: shortid.generate(),
        value: this.state.inputValue,
        status: 'incomplete',
        date: moment().format('Do MMM YYYY')
      };
      newTasks.push(newTask);
      this.setState({
        tasks : newTasks,
        inputValue: ''
      })
    } else if (this.state.editMode) {
        const prevTasks = [...this.state.tasks];
        prevTasks[prevTasks.findIndex(task => task.id === this.state.editTaskId)].value = this.state.inputValue;
        prevTasks[prevTasks.findIndex(task => task.id === this.state.editTaskId)].status = 'incomplete';
        this.setState({
          tasks : prevTasks,
          inputValue: '',
          editMode: false,
          editTaskId: ''
        });
    } else {
      return;
    }
  }

  handleDeleteTask = (event, id) => {
    const prevTasks = [...this.state.tasks];
    const taskIndex = prevTasks.findIndex(task => task.id === id);
    prevTasks.splice(taskIndex, 1);
    this.setState({
      tasks: prevTasks
    });
  }

  handleEditTask = (event, id) => {
    const prevTasks = [...this.state.tasks];
    const taskIndex = prevTasks.findIndex(task => task.id === id);
    this.setState({
      editMode: true,
      editTaskId: id,
      inputValue: prevTasks[taskIndex].value
    });
  }

  handleCompleteTask = (event, id) => {
    const prevTasks = [...this.state.tasks];
    prevTasks[prevTasks.findIndex(task => task.id === id)].status = 'complete';
    this.setState({
      tasks : prevTasks
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className='App container'>
        <div className='container-fluid' style={{marginTop: '15px'}}>
          <div className='row'>
            <div className='col-md-12'>
              <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-6'>
              {/* <select name='date' className='custom-select'>
                <option value='1'>{today}</option>
                <option value='2'>anbdjash</option>
                <option value='3'>anbdjash</option>
              </select> */}
            </div>
            <div className='col-md-4 col-sm-6'>
              {/* <select name='date' className='custom-select'>
                <option value='1'>{today}</option>
                <option value='2'>anbdjash</option>
                <option value='3'>anbdjash</option>
              </select> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-12' style={{marginTop: '15px'}}>
              <InputField
                handleInput={this.handleInputChange}
                handleSaveTask={this.handleSavetask} 
                value={this.state.inputValue}
              />
            </div>
            <div className='col-md-8 col-sm-12'>
              <AllTasks
                handleClickDelete={(event, id) => this.handleDeleteTask(event, id)} 
                handleClickComplete={(event, id) => this.handleCompleteTask(event, id)} 
                handleClickEdit={(event, id) => this.handleEditTask(event, id)} 
                tasks={this.state.tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
