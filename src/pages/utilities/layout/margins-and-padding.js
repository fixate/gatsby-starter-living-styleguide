import React from 'react';

import SGComputeStyle from '../../../components/SGComputeStyle';
import SGStyleMargin from '../../../components/SGStyleMargin';
import SGStylePadding from '../../../components/SGStylePadding';

import {getYamlNode} from '../../../utils';

const PaddingItem = props => {
  const {className, children, padding, style, ...restProps} = props;
  const newStyle = Object.assign({}, style, {
    padding,
    marginBottom: '1.5rem',
  });

  return (
    <SGComputeStyle
      styleToCompute={'padding-bottom'}
      render={({computedStyle, refCallback}) => (
        <div className={className} ref={refCallback} style={newStyle}>
          <div style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
            {children} {computedStyle ? ` - ${computedStyle}` : null}
          </div>
        </div>
      )}
    />
  );
};

const MarginItem = props => {
  const {children, className, ...restProps} = props;

  return (
    <SGStyleMargin style={{marginBottom: '1.5rem'}} {...restProps}>
      <SGComputeStyle
        styleToCompute="margin-bottom"
        render={({computedStyle, refCallback}) => (
          <div
            style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}
            className={className}
            ref={refCallback}>
            {children} {computedStyle ? ` - ${computedStyle}` : null}
          </div>
        )}
      />
    </SGStyleMargin>
  );
};

const MarginsAndPadding = ({data}) => {
  const {margins, paddings} = getYamlNode(data, 'utilitiesLayout');

  return (
    <div>
      <h1>Margin And Padding Utilities</h1>

      <h2>Margins</h2>

      {margins.map(m => (
        <MarginItem key={m} className={m}>
          @mixin {m}
        </MarginItem>
      ))}

      <h2>Padding</h2>

      {paddings.map(p => (
        <SGStylePadding
          key={p}
          render={({style}) => (
            <PaddingItem style={style} className={p}>
              @mixin {p}
            </PaddingItem>
          )}
        />
      ))}
    </div>
  );
};

export default MarginsAndPadding;

export const query = graphql`
  query MarginPaddingQuery {
    allDataYaml {
      edges {
        node {
          utilitiesLayout {
            margins
            paddings
          }
        }
      }
    }
  }
`;
