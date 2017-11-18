import React from 'react';

import {getYamlNode} from '../../../utils';
import WithComputedStyle from '../../../components/WithComputedStyle';

const FontFamilies = ({data}) => {
  const {families} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Family Utilities</h1>

      {Object.keys(families).map(key =>
        <WithComputedStyle
          key={key}
          className={families[key]}
          styleToCompute="font-family"
          style={{textAlign: 'left'}}>
          .{families[key]}
        </WithComputedStyle>
      )}
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
