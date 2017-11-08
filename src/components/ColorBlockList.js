import React, {Component} from 'react';

import ColorBlock from './ColorBlock';
import {splitCamelCaseString} from '../utils';

const ColorBlockList = ({colors}) =>
  <div>
    {Object.keys(colors).map(key =>
      <ColorBlock key={key} color={colors[key]}>
        ${splitCamelCaseString()(key)}
      </ColorBlock>
    )}
  </div>;

export default ColorBlockList;
