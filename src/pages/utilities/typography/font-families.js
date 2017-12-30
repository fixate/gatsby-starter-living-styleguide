import React from 'react';

import {getYamlNode} from '../../../utils';
import SGComputeStyle from '../../../components/SGComputeStyle';

const FontFamilies = ({data}) => {
  const {families} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Family Utilities</h1>

      {Object.keys(families).map(key => (
        <SGComputeStyle
          key={key}
          styleToCompute="font-family"
          render={({computedStyle, refCallback}) => (
            <div className={families[key]} ref={refCallback}>
              .{families[key]} {computedStyle ? ` - ${computedStyle}` : null}
            </div>
          )}
        />
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
