import React from 'react';
import Button from '../Modules/Button';
import './Task.css';

const Task = ({
    alertClass, 
    value,
    status,
    date,
    handleClickDelete, 
    handleClickComplete,
    handleClickEdit
  }) => {
  return (
    <div className='row Task'>
      <div className='col-md-9'>
        <div className={status === 'incomplete' ? 'alert alert-danger' : 'alert alert-success'}>
          <p>Date: {date}</p>
          <p>{value}</p>
        </div>
      </div>
      <div className='col-md-3'>
        <Button 
          handleClick={handleClickDelete} 
          classNames='btn btn-sm btn-danger' 
          iconClass='fa fa-times' />
        <Button 
          handleClick={handleClickEdit} 
          classNames='btn btn-sm btn-warning' 
          iconClass='fa fa-pen' />
        <Button 
          handleClick={handleClickComplete} 
          classNames='btn btn-sm btn-success' 
          iconClass='fa fa-check' />
      </div>
    </div>
  )
}

export default Task;