import React from 'react';
import Button from '../Modules/Button';

const inputField = ({handleInput, handleSaveTask, value}) => {
  return (
    <React.Fragment>
      <textarea 
        type='text'
        rows='6'
        className='form-control'
        style={{width: '100%'}} 
        value={value}
        placeholder='Enter a task'
        onChange={handleInput}
      />
      <br />
      <Button handleClick={handleSaveTask} classNames='btn btn-sm btn-primary'>Save</Button>
    </React.Fragment>
  )
}

export default inputField;