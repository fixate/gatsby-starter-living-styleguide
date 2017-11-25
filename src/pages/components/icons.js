import React from 'react';

import {getYamlNode} from '../../utils';
import sgWithPseudoClass from '../../components/hocs/sgWithPseudoClass';

// use webpack to import all icons
const _require = require.context('../../shared/img/icons', false, /\.svg$/);
_require.keys().forEach(key => _require(key));

const Icon = ({id}) => {
  const style = {
    display: 'inline-block',
    verticalAlign: 'middle',
  };
  const styleInner = {
    display: 'inline',
  };
  const styleSvg = {
    color: 'currentColor',
    display: 'block',
    fill: 'currentColor',
    height: '1em',
    width: '1em',
  };

  return (
    <i className="icon" style={style}>
      <i className="icon__inner" style={styleInner}>
        <svg style={styleSvg}>
          <use xlinkHref={`#icon-${id}`} />
        </svg>
      </i>
    </i>
  );
};

const Icons = ({data}) => {
  const {names} = getYamlNode(data, 'componentsIcons');

  return (
    <div>
      <h1>Icons</h1>

      {names.map(n => (
        <div key={n}>
          <Icon id={n} /> - #icon-{n}
        </div>
      ))}
    </div>
  );
};

export default Icons;

export const query = graphql`
  query IconsQuery {
    allDataYaml {
      edges {
        node {
          componentsIcons {
            names
          }
        }
      }
    }
  }
`;
