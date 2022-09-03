import React from 'react';

function Cell({ color }) {
  return <div className='cell' style={{ backgroundColor: color }} />;
}

export default Cell;
