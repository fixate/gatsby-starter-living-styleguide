import React, {Component} from 'react';

// use !! to override other loaders in webpack, otherwise we can't get our vars
// https://github.com/nordnet/sass-variable-loader#usage
import colorVars from '!!sass-variable-loader!../shared/css/variables/_colors.scss';

import SGColorBlock from './SGColorBlock';
import {splitCamelCaseString} from '../utils';

const SGColorBlockList = () => {
  const colorTypes = Object.keys(colorVars)
    .map(n => n.match(/clr([A-Z][a-z]+)/g))
    .filter(x => x)
    .map(x => x[0]);
  const uniqeTypes = Array.from(new Set(colorTypes));

  return (
    <div>
      <h2>Colours</h2>

      {uniqeTypes.map(type => {
        const colorKeys = Object.keys(colorVars).filter(
          c => c.indexOf(type) > -1
        );

        return (
          <div key={type}>
            <h3>{type.replace('clr', '')}</h3>

            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridColumnGap: '1rem',
              }}>
              {colorKeys.map(key => (
                <SGColorBlock key={key} color={colorVars[key]}>
                  ${splitCamelCaseString()(key)}
                </SGColorBlock>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SGColorBlockList;
