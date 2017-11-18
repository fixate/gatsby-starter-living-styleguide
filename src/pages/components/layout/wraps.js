import React from 'react';

import WithComputedStyle from '../../../components/WithComputedStyle';
import WithStyledMargin from '../../../components/WithStyledMargin';
import withStyledPaddingHoc from '../../../components/hocs/withStyledPadding';
import {getYamlNode} from '../../../utils';

class Wrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {computedStyle, ...restProps} = this.props;

    return (
      <WithComputedStyle styleToCompute="max-width" {...restProps}>
        <div style={{backgroundColor: '#f1f1f1'}}>
          .{this.props.className}
        </div>
      </WithComputedStyle>
    );
  }
}

const WrapPaddingStyled = withStyledPaddingHoc(Wrap);

const Wraps = ({data}) => {
  const classNames = getYamlNode(data, 'layout').wraps;

  return (
    <div>
      <h1>Wraps</h1>

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
          componentsLayout {
            wraps
          }
        }
      }
    }
  }
`;
