import React from 'react';

function Input({ onChange, username }) {
  return (
    <div>
      <form>
        <input
          id='input'
          type='text'
          onChange={onChange}
          value={username}
          placeholder='Enter your username...'
        />
      </form>
      <h5 className='symbol'>︾</h5>
    </div>
  );
}

export default Input;
