import React from 'react';
import Button from '../Modules/Button';

const inputField = ({handleInput, handleSaveTask, value}) => {
  return (
    <React.Fragment>
      <textarea 
        type='text'
        rows='10'
        className='form-control'
        style={{width: '100%'}} 
        value={value}
        placeholder='Enter a task'
        onChange={(event => handleInput(event.target.value))}
      />
      <br />
      <Button handleClick={handleSaveTask} classNames='btn btn-sm btn-primary' text='Save'/>
    </React.Fragment>
  )
}

export default inputField;