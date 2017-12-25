import React, {Component} from 'react';

const ColorBlock = ({children, color}) => (
  <div
    style={{
      display: 'grid',
      marginBottom: '1rem',
    }}>
    <div
      style={{
        backgroundColor: color,
        padding: '3em',
      }}
    />
    <p>
      {children} {color ? ` - ${color}` : ''}
    </p>
  </div>
);

export default ColorBlock;
