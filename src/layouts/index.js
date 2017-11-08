import React from 'react';

import Menu from '../components/Menu';

const Layout = ({children, data}) => {
  const pages = data.allFile.edges
    .filter(edge => edge.node.sourceInstanceName === 'pages')
    .map(edge => edge.node);

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '0fr 1fr',
      }}>
      <div style={{padding: '1em'}}>
        <Menu pages={pages} />
      </div>

      <main style={{padding: '2em'}}>
        {children()}
      </main>
    </div>
  );
};

export const query = graphql`
  query MenuQuery {
    sitePage {
      path
    }
    allFile {
      edges {
        node {
          sourceInstanceName
          name
          relativeDirectory
          base
        }
      }
    }
  }
`;

export default Layout;
