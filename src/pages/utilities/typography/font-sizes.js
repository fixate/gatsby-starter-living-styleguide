import React from 'react';

import {getYamlNode} from '../../../utils';
import SGWithComputedStyle from '../../../components/SGWithComputedStyle';

const FontSizes = ({data}) => {
  const {sizes} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Size Utilities</h1>

      {Object.keys(sizes).map(key => (
        <SGWithComputedStyle
          key={key}
          className={sizes[key]}
          styleToCompute="font-size"
          style={{textAlign: 'left'}}>
          .{sizes[key]}
        </SGWithComputedStyle>
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
