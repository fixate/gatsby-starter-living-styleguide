import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';
import SGComputeStyle from '../../../components/SGComputeStyle';
import SGStyleMargin from '../../../components/SGStyleMargin';
import SGStylePadding from '../../../components/SGStylePadding';

import {getYamlNode} from '../../../utils';

class Wrap extends React.Component {
  render() {
    const {className, style, ...restProps} = this.props;

    return (
      <SGComputeStyle
        styleToCompute="max-width"
        render={({refCallback, computedStyle}) => (
          <div className={className} ref={refCallback} style={style}>
            <div style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
              .{className}
              {computedStyle ? ` - ${computedStyle}` : null}
            </div>
          </div>
        )}
      />
    );
  }
}

const Wraps = ({data}) => {
  const classNames = getYamlNode(data, 'componentsLayout').wraps;

  return (
    <div>
      <h1>Wraps</h1>

      {classNames.map(c => (
        <div key={c}>
          <SGStyleMargin key={c} style={{marginBottom: '1.5rem'}}>
            <SGStylePadding
              render={({style}) => <Wrap style={style} className={c} />}
            />
          </SGStyleMargin>

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
