import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';
import SGComputeStyle from '../../../components/SGComputeStyle';
import SGWithStyledMargin from '../../../components/SGWithStyledMargin';
import sgWithStyledPaddingHoc from '../../../components/hocs/sgWithStyledPadding';
import {getYamlNode} from '../../../utils';

class Wrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, ...restProps} = this.props;

    return (
      <SGComputeStyle
        styleToCompute="max-width"
        render={({refCallback, computedStyle}) => (
          <div className={className} ref={refCallback}>
            <div style={{backgroundColor: '#f1f1f1'}}>
              .{className}
              {computedStyle ? ` - ${computedStyle}` : null}
            </div>
          </div>
        )}
      />
    );
  }
}

const WrapPaddingStyled = sgWithStyledPaddingHoc(Wrap);

const Wraps = ({data}) => {
  const classNames = getYamlNode(data, 'componentsLayout').wraps;

  return (
    <div>
      <h1>Wraps</h1>

      {classNames.map(c => (
        <div key={c}>
          <SGWithStyledMargin key={c} style={{marginBottom: '1.5rem'}}>
            <WrapPaddingStyled className={c} />
          </SGWithStyledMargin>

          <SGDemoArea comp={<div className={c}>children</div>} hideComp />
        </div>
      ))}
    </div>
  );
};

export default Wraps;

export const query = graphql`
  query WrapsQuery {
    allDataYaml {
      edges {
        node {
          componentsLayout {
            wraps
          }
        }
      }
    }
  }
`;
