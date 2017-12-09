import React from 'react';

import SGDemoArea from '../../components/SGDemoArea';

import {getYamlNode} from '../../utils';
import sgWithPseudoClass from '../../components/hocs/sgWithPseudoClass';

// use webpack to import all icons
const _require = require.context('../../shared/img/icons', false, /\.svg$/);
_require.keys().forEach(key => _require(key));

const getIconMarkup = id => (
  <i className="icon">
    <i className="icon__inner">
      <svg>
        <use xlinkHref={`#icon-${id}`} />
      </svg>
    </i>
  </i>
);

const Icons = ({data}) => {
  const {names} = getYamlNode(data, 'componentsIcons');
  const iconDemo = getIconMarkup('[some-id]');

  return (
    <div>
      <h1>Icons</h1>

      <SGDemoArea hideComp comp={iconDemo} />

      {names.map(id => {
        const icon = getIconMarkup(id);

        return (
          <div key={id}>
            {icon} - #icon-{id}
          </div>
        );
      })}
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
