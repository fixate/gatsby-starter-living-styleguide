import React from 'react';

import {getYamlNode} from '../../../utils';
import SGWithComputedStyle from '../../../components/SGWithComputedStyle';

const FontFamilies = ({data}) => {
  const {families} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Family Utilities</h1>

      {Object.keys(families).map(key => (
        <SGWithComputedStyle
          key={key}
          className={families[key]}
          styleToCompute="font-family"
          style={{textAlign: 'left'}}>
          .{families[key]}
        </SGWithComputedStyle>
      ))}
    </div>
  );
};

export default FontFamilies;

export const query = graphql`
  query FontFamiliesQuery {
    allDataYaml {
      edges {
        node {
          utilitiesFonts {
            families
          }
        }
      }
    }
  }
`;
