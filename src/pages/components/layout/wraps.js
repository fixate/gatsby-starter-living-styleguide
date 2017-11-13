import React from 'react';

import WithComputedStyle from '../../../components/WithComputedStyle';
import WithStyledMargin from '../../../components/WithStyledMargin';
import withStyledPaddingHoc from '../../../components/hocs/withStyledPadding';
import {getYamlNode} from '../../../utils';

const WrapPaddingStyled = withStyledPaddingHoc(({props = {}}) =>
  <WithComputedStyle styleToCompute="width">
    .{props.className}
  </WithComputedStyle>
);

const Wraps = ({data}) => {
  const classNames = getYamlNode(data, 'layout').wraps;

  return (
    <div>
      {classNames.map(c =>
        <WithStyledMargin key={c} style={{marginBottom: '1.5rem'}}>
          <WrapPaddingStyled className={c} />
        </WithStyledMargin>
      )}
    </div>
  );
};

export default Wraps;

export const query = graphql`
  query WrapsQuery {
    allDataYaml {
      edges {
        node {
          layout {
            wraps
          }
        }
      }
    }
  }
`;
