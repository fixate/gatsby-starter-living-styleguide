import React from 'react';
import reactToJsxString from 'react-element-to-jsx-string';

const jsxToString = (component, customOpts = {}) => {
  const options = Object.assign(
    {},
    {
      filterProps: ['__source', 'ref'],
      showDefaultProps: false,
    },
    customOpts
  );

  return reactToJsxString(component, options);
};

const SGDemoAreaInline = ({comp, hideComp, options}) => (
  <span>
    {!hideComp ? comp : null}
    <small
      style={{
        marginLeft: '1rem',
        display: 'inline-block',
        opacity: 0.75,
      }}>
      <code>{jsxToString(comp, options)}</code>
    </small>
  </span>
);

SGDemoAreaInline.displayName = 'SGDemoAreaInline';
SGDemoAreaInline.defaultProps = {hideComp: false};

export default SGDemoAreaInline;
