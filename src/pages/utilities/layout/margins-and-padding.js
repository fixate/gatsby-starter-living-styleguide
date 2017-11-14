import React from 'react';

import marginVars from '!!sass-variable-loader!../../../shared/css/variables/_margins-padding.scss';
import WithStyledMargin from '../../../components/WithStyledMargin';
import WithComputedStyle from '../../../components/WithComputedStyle';
import withStyledPaddingHoc from '../../../components/hocs/withStyledPadding';
import {splitCamelCaseString} from '../../../utils';

const PaddingItem = props => {
  const {children, padding, style, ...restProps} = props;
  const newStyle = Object.assign({}, style, {
    padding,
    marginBottom: '1.5rem',
  });

  return (
    <WithComputedStyle
      style={newStyle}
      styleToCompute={'padding-bottom'}
      {...restProps}>
      <div style={{backgroundColor: '#f1f1f1', textAlign: 'center'}}>
        {children}
      </div>
    </WithComputedStyle>
  );
};

const PaddingItemStyled = withStyledPaddingHoc(PaddingItem);

const MarginItemStyled = props => {
  const {children, margin, ...restProps} = props;

  return (
    <WithStyledMargin
      style={{
        marginBottom: '1.5rem',
        display: 'table',
        width: '100%',
      }}
      {...restProps}>
      <WithComputedStyle
        style={{margin, backgroundColor: '#f1f1f1'}}
        styleToCompute={'margin-bottom'}>
        <div>
          {children}
        </div>
      </WithComputedStyle>
    </WithStyledMargin>
  );
};

const MarginsAndPadding = ({data}) => {
  const marPads = marginVars;

  return (
    <div>
      <h1>Margins And Padding</h1>

      <h2>Margins</h2>

      {Object.keys(marPads).map(key =>
        <MarginItemStyled margin={marPads[key]} key={key}>
          ${splitCamelCaseString()(key)}
        </MarginItemStyled>
      )}

      <h2>Padding</h2>

      {Object.keys(marPads).map(key =>
        <PaddingItemStyled padding={marPads[key]} key={key}>
          ${splitCamelCaseString()(key)}
        </PaddingItemStyled>
      )}
    </div>
  );
};

export default MarginsAndPadding;
