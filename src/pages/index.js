import React from 'react';

import '../scss/style.scss';

import ColorBlockList from '../components/ColorBlockList';

export default ({data}) => {
  const {siteName} = data.site.siteMetadata;

  return (
    <div>
      <h1>
        {siteName} Living Styleguide
      </h1>

      <ColorBlockList />
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
