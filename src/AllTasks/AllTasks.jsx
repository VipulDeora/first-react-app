import React from 'react';
import Task from './Task';

const AllTasks = ({handleClickDelete, handleClickComplete, classNames, tasks}) => {
  return (
    <React.Fragment>
      {
        tasks.map(el => <Task alertClass='alert alert-danger' task={el} classNames={classNames} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} />)
      }
    </React.Fragment>
  )
}

export default AllTasks;