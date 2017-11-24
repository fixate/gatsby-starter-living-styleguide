import React from 'react';

import SGColorBlockList from '../components/SGColorBlockList';

export default ({data}) => {
  const {siteName} = data.site.siteMetadata;

  return (
    <div>
      <h1>{siteName} Living Styleguide</h1>

      <SGColorBlockList />
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
