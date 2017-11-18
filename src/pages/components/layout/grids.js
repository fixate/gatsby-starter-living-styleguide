import React from 'react';

import {getYamlNode} from '../../../utils';

const GridItem = ({children}) =>
  <div className="g g-1-of-3 g-lap-1-of-2 g-palm-1-of-1">
    <div style={{backgroundColor: '#f1f1f1'}}>
      {children}
    </div>
  </div>;

const Grids = ({data}) => {
  const classNames = getYamlNode(data, 'componentsLayout').grids;

  return (
    <div>
      <h1>Grids</h1>

      {classNames.map(c =>
        <div className={c}>
          <GridItem>
            .g-1-of-3 <br />
            .g-lap-1-of-2 <br />
            .g-palm-1-of-1 <br />
          </GridItem>

          <GridItem>
            2 lines
            <br />
            <br />
          </GridItem>

          <GridItem>one line</GridItem>
        </div>
      )}
    </div>
  );
};

export default Grids;

export const query = graphql`
  query GridsQuery {
    allDataYaml {
      edges {
        node {
          componentsLayout {
            grids
          }
        }
      }
    }
  }
`;
