import React, {Component} from 'react';

const StyleMargin = ({children, style, ...restProps}) => (
  <div
    style={Object.assign({}, style, {
      backgroundColor: '#f7cb9d',
      display: 'table',
      width: '100%',
    })}
    {...restProps}>
    {children}
  </div>
);

export default StyleMargin;
