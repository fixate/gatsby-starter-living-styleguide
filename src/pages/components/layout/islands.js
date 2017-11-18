import React from 'react';

import WithComputedStyle from '../../../components/WithComputedStyle';
import withStyledPaddingHoc from '../../../components/hocs/withStyledPadding';
import {getYamlNode} from '../../../utils';

class Island extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {computedStyle, ...restProps} = this.props;

    return (
      <WithComputedStyle styleToCompute="padding-top" {...restProps}>
        <div style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
          .{this.props.className}
        </div>
      </WithComputedStyle>
    );
  }
}

const IslandPaddingStyled = withStyledPaddingHoc(Island);

const Islands = ({data}) => {
  const classNames = getYamlNode(data, 'componentsLayout').islands;

  return (
    <div>
      <h1>Islands</h1>

      {classNames.map(c =>
        <div key={c} style={{marginBottom: '1.5rem'}}>
          <IslandPaddingStyled className={c} />
        </div>
      )}
    </div>
  );
};

export default Islands;

export const query = graphql`
  query IslandsQuery {
    allDataYaml {
      edges {
        node {
          componentsLayout {
            islands
          }
        }
      }
    }
  }
`;
