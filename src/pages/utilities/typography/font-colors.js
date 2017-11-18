import React from 'react';

import {getYamlNode} from '../../../utils';

const FontColors = ({data}) => {
  const {colors} = getYamlNode(data, 'utilitiesFonts');

  return (
    <div>
      <h1>Font Color Utilities</h1>

      {Object.keys(colors).map(key =>
        <div key={key} className={colors[key]}>
          .{colors[key]}
        </div>
      )}
    </div>
  );
};

export default FontColors;

export const query = graphql`
  query FontColorsQuery {
    allDataYaml {
      edges {
        node {
          utilitiesFonts {
            colors
          }
        }
      }
    }
  }
`;
