import React from 'react';

import {getYamlNode} from '../../../utils';
import SGComputeStyle from '../../../components/SGComputeStyle';

const FontSizes = ({data}) => {
  const {sizes} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Size Utilities</h1>

      {Object.keys(sizes).map(key => (
        <SGComputeStyle
          key={key}
          styleToCompute="font-size"
          render={({computedStyle, refCallback}) => (
            <div
              className={sizes[key]}
              style={{textAlign: 'left'}}
              ref={refCallback}>
              .{sizes[key]}
              {computedStyle ? ` - ${computedStyle}` : null}
            </div>
          )}
        />
      ))}
    </div>
  );
};

export default FontSizes;

export const query = graphql`
  query FontSizesQuery {
    allDataYaml {
      edges {
        node {
          utilitiesFonts {
            sizes
          }
        }
      }
    }
  }
`;
