import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';
import SGWithComputedStyle from '../../../components/SGWithComputedStyle';
import SGWithStyledMargin from '../../../components/SGWithStyledMargin';
import sgWithStyledPaddingHoc from '../../../components/hocs/sgWithStyledPadding';
import {getYamlNode} from '../../../utils';

class Wrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {computedStyle, ...restProps} = this.props;

    return (
      <SGWithComputedStyle styleToCompute="max-width" {...restProps}>
        <div style={{backgroundColor: '#f1f1f1'}}>.{this.props.className}</div>
      </SGWithComputedStyle>
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
        <div>
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
