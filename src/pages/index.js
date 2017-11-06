import React from 'react';

import {getYamlNode} from '../utils';

import ColorBlock from '../components/ColorBlock';

export default ({data}) => {
  const {siteName} = data.site.siteMetadata;
  const colors = getYamlNode(data, 'colors');

  return (
    <div>
      <h1>
        {siteName} Living Styleguide
      </h1>

      <h2>Colours</h2>

      <div>
        {colors.map(color =>
          <div key={color.id}>
            {color.shades.map(shade => {
              const shadeName = shade ? `-${shade}` : '';
              const className = `bgc--${color.id}${shade}`;

              return (
                <ColorBlock key={shade} className={className}>
                  .{className}
                </ColorBlock>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        siteName
      }
    }
    allDataYaml {
      edges {
        node {
          colors {
            id
            shades
          }
        }
      }
    }
  }
`;
