import React from 'react';

import variables from 'sass-variable-loader!../shared/_variables.scss';
import {getYamlNode} from '../utils';

import ColorBlockList from '../components/ColorBlockList';

export default ({data}) => {
  const {siteName} = data.site.siteMetadata;
  const colors = Object.keys(variables)
    .filter(k => /clr/i.test(k))
    .reduce((acc, key) => Object.assign({}, acc, {[key]: variables[key]}), {});

  return (
    <div>
      <h1>
        {siteName} Living Styleguide
      </h1>

      <h2>Colours</h2>

      <ColorBlockList colors={colors} />
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
