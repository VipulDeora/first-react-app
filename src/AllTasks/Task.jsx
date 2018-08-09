import React from 'react';
import Button from '../Modules/Button'

const Task = ({
    alertClass, 
    task, 
    classNames, 
    handleClickDelete, 
    handleClickComplete
  }) => {
  return (
    <div className='row'>
      <div className='col-md-10'>
        <div className={alertClass}>
          {task}
        </div>
      </div>
      <div className='col-md-1'>
        <Button handleClick={handleClickDelete} classNames={classNames} text='Delete' />
      </div>
      <div className='col-md-1'>
        <Button handleClick={handleClickComplete} classNames={classNames} text='Completed' />
      </div>
    </div>
  )
}

export default Task;