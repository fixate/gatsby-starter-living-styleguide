import React from 'react';

import {getYamlNode} from '../../../utils';

const Content = ({children}) => (
  <p
    style={{
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
    }}>
    {children}
  </p>
);

const GridWrap = ({children, className, tagName}) => {
  const CustomTagName = tagName || 'div';

  return (
    <CustomTagName className={`gw ${className}`}>{children}</CustomTagName>
  );
};

const getVpClasses = vps =>
  vps
    ? Object.keys(vps).reduce((acc, key) => `${acc} g-${key}-${vps[key]}`, '')
    : '';

const GridCol = props => {
  const {className, baseWidth, children, tagName, viewports} = props;
  const CustomTagName = tagName || 'div';
  const vpClasses = getVpClasses(viewports);
  const baseWidthClassName = baseWidth ? `g-${baseWidth}` : '';

  return (
    <CustomTagName
      className={`g ${className} ${baseWidthClassName} ${vpClasses}`}>
      {children}
    </CustomTagName>
  );
};

const getBasicGridCols = (gridClassName, cols, colType) => {
  const baseClassName = 'g-';

  return cols[colType].map(col => {
    const numCols = /\d+/.test(col)
      ? +col
          .match(/\d+/g)
          .slice(-1)
          .find(x => x)
      : 1;
    const compKey = `${gridClassName}-${col}-${colType}`;

    return (
      <div key={compKey}>
        <GridWrap className={gridClassName}>
          {Array.apply(null, Array(numCols)).map((_, n) => (
            <GridCol
              className={`${baseClassName}${col}`}
              key={`${compKey}-${n}`}>
              <Content>
                {n === 0 ? `.${baseClassName}${col}` : '\u00A0'}
              </Content>
            </GridCol>
          ))}
        </GridWrap>
      </div>
    );
  });
};

const getViewportGridCols = (gridClassName, cols, colType) => {
  const baseClassName = 'g--';

  return cols[colType].map(col => {
    const props = {viewports: {[col]: '1-of-2'}};

    return (
      <div key={col}>
        <h4>.g-{col}-[m]-of-[n]</h4>
        <GridWrap className={gridClassName}>
          <GridCol baseWidth="1-of-1" {...props}>
            <Content>
              1-of-2 at {col}
              <br />
              1-of-1 everywhere else
            </Content>
          </GridCol>
          <GridCol baseWidth="1-of-2">
            <Content>always 1-of-2</Content>
          </GridCol>
        </GridWrap>
      </div>
    );
  });
};

const getModifierGridCols = (gridClassName, cols, colType) => {
  const baseClassName = 'g--';

  return cols[colType].map(col => (
    <div key={`${colType}${col}`}>
      <GridWrap className={gridClassName}>
        <GridCol className={`${baseClassName}${col}`}>
          <Content>
            .{baseClassName}
            {col}
          </Content>
        </GridCol>
        <GridCol baseWidth="1-of-3">
          <Content>.g-1-of-3</Content>
        </GridCol>
      </GridWrap>
    </div>
  ));
};

const getGridCols = (gridClassName, cols, colType) => {
  switch (colType) {
    case 'viewports':
      return getViewportGridCols(gridClassName, cols, colType);
    case 'modifiers':
      return getModifierGridCols(gridClassName, cols, colType);
    default:
      return getBasicGridCols(gridClassName, cols, colType);
  }
};

const Grids = ({data}) => {
  const {grids} = getYamlNode(data, 'componentsLayout');

  return (
    <div>
      <h1>Grids</h1>

      {grids.gridWraps.map(gw => (
        <div key={gw}>
          <h2>.{gw}</h2>

          {Object.keys(grids.gridCols).map(key => {
            const cols = getGridCols(gw, grids.gridCols, key);

            return (
              <div key={key}>
                <h3>{key}</h3>

                {cols.map(col => col)}
              </div>
            );
          })}

          <hr />
        </div>
      ))}
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
            grids {
              gridWraps
              gridCols {
                widths
                viewports
                modifiers
              }
            }
          }
        }
      }
    }
  }
`;
