import React, {Component} from 'react';

// use !! to override other loaders in webpack, otherwise we can't get our vars
// https://github.com/nordnet/sass-variable-loader#usage
import colorVars from '!!sass-variable-loader!../shared/css/variables/_colors.scss';

import ColorBlock from './ColorBlock';
import {splitCamelCaseString} from '../utils';

const ColorBlockList = () => {
  const colors = Object.keys(colorVars)
    .filter(k => /clr/i.test(k))
    .reduce((acc, key) => Object.assign({}, acc, {[key]: colorVars[key]}), {});

  return (
    <div>
      <h2>Colours</h2>

      {Object.keys(colors).map(key =>
        <ColorBlock key={key} color={colors[key]}>
          ${splitCamelCaseString()(key)}
        </ColorBlock>
      )}
    </div>
  );
};

export default ColorBlockList;
