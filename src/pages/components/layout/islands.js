import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';
import SGComputeStyle from '../../../components/SGComputeStyle';
import sgWithStyledPaddingHoc from '../../../components/hocs/sgWithStyledPadding';
import {getYamlNode} from '../../../utils';

class Island extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, ...restProps} = this.props;

    return (
      <SGComputeStyle
        styleToCompute="padding-top"
        render={({computedStyle, refCallback}) => (
          <div
            className={className}
            ref={refCallback}
            style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
            .{className} {computedStyle ? ` - ${computedStyle}` : null}
          </div>
        )}
      />
    );
  }
}

const IslandPaddingStyled = sgWithStyledPaddingHoc(Island);

const Islands = ({data}) => {
  const classNames = getYamlNode(data, 'componentsLayout').islands;

  return (
    <div>
      <h1>Islands</h1>

      {classNames.map(c => (
        <div key={c} style={{marginBottom: '1.5rem'}}>
          <IslandPaddingStyled className={c} />

          <SGDemoArea comp={<div className={c}>children</div>} hideComp />
        </div>
      ))}
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
