import React from 'react';
import Task from './Task';

const AllTasks = ({handleClickDelete, handleClickComplete, handleClickEdit, classNames, tasks}) => {

  const allTasks = (
    tasks.map((el) => 
      <Task 
        key={el.id}
        value={el.value}
        status={el.status}
        date={el.date} 
        classNames={classNames} 
        handleClickDelete={(event) => handleClickDelete(event, el.id)} 
        handleClickComplete={(event) => handleClickComplete(event,  el.id)}
        handleClickEdit={(event) => handleClickEdit(event, el.id)} />)
  );

  return (
    <React.Fragment>
      {allTasks}
    </React.Fragment>
  )
}

export default AllTasks;