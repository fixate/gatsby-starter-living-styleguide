import React from 'react';

// use !! to override other loaders in webpack, otherwise we can't get our vars
// https://github.com/nordnet/sass-variable-loader#usage
import colorVars from '!!sass-variable-loader!../shared/css/variables/_colors.scss';

import ColorBlockList from '../components/ColorBlockList';

export default ({data}) => {
  const {siteName} = data.site.siteMetadata;
  const colors = Object.keys(colorVars)
    .filter(k => /clr/i.test(k))
    .reduce((acc, key) => Object.assign({}, acc, {[key]: colorVars[key]}), {});

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
  }
`;
