import React from 'react';

import SGWithStyledMargin from '../../../components/SGWithStyledMargin';
import SGWithComputedStyle from '../../../components/SGWithComputedStyle';
import sgWithStyledPaddingHoc from '../../../components/hocs/sgWithStyledPadding';
import {getYamlNode} from '../../../utils';

const PaddingItem = props => {
  const {children, padding, style, ...restProps} = props;
  const newStyle = Object.assign({}, style, {
    padding,
    marginBottom: '1.5rem',
  });

  return (
    <SGWithComputedStyle
      style={newStyle}
      styleToCompute={'padding-bottom'}
      {...restProps}>
      <div style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
        {children}
      </div>
    </SGWithComputedStyle>
  );
};

const PaddingItemStyled = sgWithStyledPaddingHoc(PaddingItem);

const MarginItemStyled = props => {
  const {children, className, ...restProps} = props;

  return (
    <SGWithStyledMargin
      style={{
        marginBottom: '1.5rem',
        display: 'table',
        width: '100%',
      }}
      {...restProps}>
      <SGWithComputedStyle
        className={className}
        style={{backgroundColor: '#f1f1f1'}}
        styleToCompute={'margin-bottom'}>
        <div>{children}</div>
      </SGWithComputedStyle>
    </SGWithStyledMargin>
  );
};

const MarginsAndPadding = ({data}) => {
  const {margins, paddings} = getYamlNode(data, 'utilitiesLayout');

  return (
    <div>
      <h1>Margin And Padding Utilities</h1>

      <h2>Margins</h2>

      {margins.map(m => (
        <MarginItemStyled key={m} className={m}>
          @mixin {m}
        </MarginItemStyled>
      ))}

      <h2>Padding</h2>

      {paddings.map(p => (
        <PaddingItemStyled className={p} key={p}>
          @mixin {p}
        </PaddingItemStyled>
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
