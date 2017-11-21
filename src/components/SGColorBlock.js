import React, {Component} from 'react';

const ColorBlock = ({children, color}) =>
  <div
    style={{
      display: 'grid',
      marginBottom: '1.5em',
    }}>
    <div
      style={{
        backgroundColor: color,
        padding: '3em',
        marginBottom: '1.5rem',
      }}
    />
    <p>
      {children} {color ? ` - ${color}` : ''}
    </p>
  </div>;

export default ColorBlock;
