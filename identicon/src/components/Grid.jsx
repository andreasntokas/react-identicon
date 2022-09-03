import React from 'react';
import _ from 'lodash';
import sha1 from 'js-sha1';
import Cell from './Cell';
import { fromHex, rgbToHex } from './utils';

function Grid({ username }) {
  const hash = sha1(username);
  const bytes = fromHex(hash).slice(0, 15);
  const [r, g, b] = bytes;

  const identicon = _.reduce(
    _.chunk(_.take(bytes, 15), 3),
    (grid, row) => _.concat(grid, row, _.reverse(_.dropRight(row))),
    []
  );

  const color = rgbToHex(r, g, b);

  return (
    <div className='board'>
      {username === '' ? (
        <div />
      ) : (
        identicon.map((value, index) => (
          <Cell key={index} color={value % 2 === 0 ? color : '#FFFFFF'} />
        ))
      )}
    </div>
  );
}

export default Grid;
